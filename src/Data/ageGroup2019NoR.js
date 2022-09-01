import { useState } from "react";

const AgeGroup2019NoR = (props) => {
  const [data, setData] = useState([
    { ageGroup: "Under 18", numberOfReports: 161 },
    { ageGroup: "18 to 24", numberOfReports: 1197 },
    { ageGroup: "25 to 34", numberOfReports: 3034 },
    { ageGroup: "35 to 44", numberOfReports: 2841 },
    { ageGroup: "45 to 54", numberOfReports: 2453 },
    { ageGroup: "55 to 64", numberOfReports: 2678 },
    { ageGroup: "Over 65", numberOfReports: 3739 },
  ]);

  return data;
};

export default AgeGroup2019NoR;
