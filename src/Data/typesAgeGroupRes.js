import { useState } from "react";

const TypesAgeGroupRes = (props) => {
  const [data, setData] = useState([
    { ageGroup: "15 to 24", rateOfRespond: 4.4 },
    { ageGroup: "25 to 34", rateOfRespond: 6.5 },
    { ageGroup: "35 to 44", rateOfRespond: 6.5 },
    { ageGroup: "45 to 54", rateOfRespond: 7 },
    { ageGroup: "55 to 64", rateOfRespond: 6.2 },
    { ageGroup: "Over 65", rateOfRespond: 7.5 },
  ]);

  return data;
};

export default TypesAgeGroupRes;
