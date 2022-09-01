import { useState } from "react";

const TypesStateCF = (props) => {
  const [data, setData] = useState([
    { state: "VIC", cardFraud: 379 },
    { state: "NSW", cardFraud: 446.9 },
    { state: "QLD", cardFraud: 286.2 },
    { state: "WA", cardFraud: 139.9 },
    { state: "SA", cardFraud: 101.4 },
    { state: "ACT", cardFraud: 22.6 },
    { state: "TAS", cardFraud: 30.2 },
    { state: "NT", cardFraud: 9.2 },
  ]);

  return data;
};

export default TypesStateCF;
