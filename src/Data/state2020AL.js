import { useState } from "react";

const State2020AL = (props) => {
  const [data, setData] = useState([
    { state: "VIC", amountLost: 687379 },
    { state: "NSW", amountLost: 318675 },
    { state: "QLD", amountLost: 214872 },
    { state: "WA", amountLost: 192987 },
    { state: "SA", amountLost: 154555 },
    { state: "Overseas", amountLost: 39647 },
    { state: "ACT", amountLost: 42448 },
    { state: "TAS", amountLost: 18650 },
    { state: "Not supplied", amountLost: 1440 },
    { state: "NT", amountLost: 39647 },
  ]);

  return data;
};

export default State2020AL;
