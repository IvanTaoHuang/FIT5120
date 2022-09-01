import { useState } from "react";

const State2021AL = (props) => {
  const [data, setData] = useState([
    { state: "VIC", amountLost: 713250 },
    { state: "NSW", amountLost: 1019458 },
    { state: "QLD", amountLost: 1684825 },
    { state: "WA", amountLost: 404140 },
    { state: "SA", amountLost: 145538 },
    { state: "Overseas", amountLost: 58675 },
    { state: "ACT", amountLost: 263229 },
    { state: "TAS", amountLost: 14172 },
    { state: "Not supplied", amountLost: 5000 },
    { state: "NT", amountLost: 15841 },
  ]);

  return data;
};

export default State2021AL;
