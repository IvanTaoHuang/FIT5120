#!/usr/bin/env python
# coding: utf-8

# In[9]:


# Import libraries

import pandas as pd
import boto3
import numpy as np
from sagemaker import get_execution_role
import sagemaker
from sklearn.model_selection import train_test_split


# In[10]:


# read data from s3
bucket = 'phishingdetection'
data_key = 'dataset_B_05_2020.csv'
data_location = 's3://{}/{}'.format(bucket, data_key)

df = pd.read_csv(data_location)


# In[11]:


df


# In[12]:


# Change the status 
df["status"] = df["status"].map({"legitimate":0, "phishing":1})


# In[13]:


df.head(3)


# In[14]:


# Dependant  variables
x = df.iloc[:,1:-1]
# Independant variables
y = df["status"]


# In[15]:


# split data into train and test sets (70% for training and 30% for testing)
x_train, x_test, y_train, y_test = train_test_split(x,y, random_state = 42, test_size = 0.3)

x_train.to_csv("train_set.csv")
x_test.to_csv("test_set.csv")


# In[16]:


sm_boto3 = boto3.client("sagemaker")

sess = sagemaker.Session()

region = sess.boto_session.region_name

bucket = sess.default_bucket()  # this could also be a hard-coded bucket name

print("Using bucket " + bucket)


# In[17]:


# send data to S3. SageMaker will take training data from s3
trainpath = sess.upload_data(
    path="train_set.csv", bucket=bucket, key_prefix="sagemaker/sklearncontainer"
)

testpath = sess.upload_data(
    path="test_set.csv", bucket=bucket, key_prefix="sagemaker/sklearncontainer"
)


# In[ ]:





# In[18]:


# build a model using randomforest
from sklearn.ensemble import RandomForestClassifier
rfc = RandomForestClassifier()

# fit the model
rfc.fit(x_train, y_train)
rfc.score(x_train, y_train)

# Predict the test set
y_predict = rfc.predict(x_test)
print(y_predict)


# In[21]:


# check for accuracy
from sklearn.metrics import confusion_matrix, classification_report
print(confusion_matrix(y_test, y_predict))


# In[22]:


print(classification_report(y_test, y_predict))


# In[ ]:





# In[ ]:


# first compress the code and send to S3

source = "source.tar.gz"
project = "scikitlearn-train-from-boto3"

tar = tarfile.open(source, "w:gz")
tar.add("script.py")
tar.close()

s3 = boto3.client("s3")
s3.upload_file(source, bucket, project + "/" + source)


# In[ ]:




