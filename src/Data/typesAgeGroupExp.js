import { useState } from "react";

const TypesAgeGroupExp = (props) => {
  const [data, setData] = useState([
    { ageGroup: "15 to 24", rateOfExposed: 39.5 },
    { ageGroup: "25 to 34", rateOfExposed: 55.9 },
    { ageGroup: "35 to 44", rateOfExposed: 60.5 },
    { ageGroup: "45 to 54", rateOfExposed: 59.6 },
    { ageGroup: "55 to 64", rateOfExposed: 58.3 },
    { ageGroup: "Over 65", rateOfExposed: 53.8 },
  ]);

  return data;
};

export default TypesAgeGroupExp;
