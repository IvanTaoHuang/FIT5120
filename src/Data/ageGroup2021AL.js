import { useState } from "react";

const AgeGroup2021AL = (props) => {
  const [data, setData] = useState([
    { ageGroup: "Under 18", amountLost: 8168 },
    { ageGroup: "18 to 24", amountLost: 205256 },
    { ageGroup: "25 to 34", amountLost: 481640 },
    { ageGroup: "35 to 44", amountLost: 461343 },
    { ageGroup: "45 to 54", amountLost: 1738170 },
    { ageGroup: "55 to 64", amountLost: 304432 },
    { ageGroup: "Over 65", amountLost: 939491 },
  ]);

  return data;
};

export default AgeGroup2021AL;
