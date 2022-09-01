import { useState } from "react";

const AgeGroup2020NoR = (props) => {
  const [data, setData] = useState([
    { ageGroup: "Under 18", numberOfReports: 226 },
    { ageGroup: "18 to 24", numberOfReports: 1979 },
    { ageGroup: "25 to 34", numberOfReports: 5909 },
    { ageGroup: "35 to 44", numberOfReports: 5994 },
    { ageGroup: "45 to 54", numberOfReports: 5776 },
    { ageGroup: "55 to 64", numberOfReports: 5313 },
    { ageGroup: "Over 65", numberOfReports: 6964 },
  ]);

  return data;
};

export default AgeGroup2020NoR;
