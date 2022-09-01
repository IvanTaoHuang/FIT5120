import { useState } from "react";

const AgeGroup2020AL = (props) => {
  const [data, setData] = useState([
    { ageGroup: "Under 18", amountLost: 3516 },
    { ageGroup: "18 to 24", amountLost: 144802 },
    { ageGroup: "25 to 34", amountLost: 217186 },
    { ageGroup: "35 to 44", amountLost: 116488 },
    { ageGroup: "45 to 54", amountLost: 202645 },
    { ageGroup: "55 to 64", amountLost: 215921 },
    { ageGroup: "Over 65", amountLost: 475257 },
  ]);

  return data;
};

export default AgeGroup2020AL;
