import { useState } from "react";

const AgeGroup2019AL = (props) => {
  const [data, setData] = useState([
    { ageGroup: "Under 18", amountLost: 3457 },
    { ageGroup: "18 to 24", amountLost: 248171 },
    { ageGroup: "25 to 34", amountLost: 248522 },
    { ageGroup: "35 to 44", amountLost: 145653 },
    { ageGroup: "45 to 54", amountLost: 95815 },
    { ageGroup: "55 to 64", amountLost: 114230 },
    { ageGroup: "Over 65", amountLost: 431542 },
  ]);

  return data;
};

export default AgeGroup2019AL;
