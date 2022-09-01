import { useState } from "react";

const State2019AL = (props) => {
  const [data, setData] = useState([
    { state: "VIC", amountLost: 650417 },
    { state: "NSW", amountLost: 319161 },
    { state: "QLD", amountLost: 237106 },
    { state: "WA", amountLost: 94197 },
    { state: "SA", amountLost: 84315 },
    { state: "Overseas", amountLost: 60858 },
    { state: "ACT", amountLost: 33489 },
    { state: "TAS", amountLost: 18675 },
    { state: "Not supplied", amountLost: 18573 },
    { state: "NT", amountLost: 1073 },
  ]);

  return data;
};

export default State2019AL;
