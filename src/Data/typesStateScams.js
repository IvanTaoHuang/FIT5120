import { useState } from "react";

const TypesStateScams = (props) => {
  const [data, setData] = useState([
    { state: "VIC", scams: 209.6 },
    { state: "NSW", scams: 248.9 },
    { state: "QLD", scams: 116 },
    { state: "WA", scams: 74.9 },
    { state: "SA", scams: 45.8 },
    { state: "ACT", scams: 8.8 },
    { state: "TAS", scams: 16.3 },
    { state: "NT", scams: 3.2 },
  ]);

  return data;
};

export default TypesStateScams;
