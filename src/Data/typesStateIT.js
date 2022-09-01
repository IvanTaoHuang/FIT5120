import { useState } from "react";

const TypesStateIT = (props) => {
  const [data, setData] = useState([
    { state: "VIC", identityTheft: 139.7 },
    { state: "NSW", identityTheft: 198 },
    { state: "QLD", identityTheft: 99.4 },
    { state: "WA", identityTheft: 63.7 },
    { state: "SA", identityTheft: 41.9 },
    { state: "ACT", identityTheft: 9.7 },
    { state: "TAS", identityTheft: 11.6 },
    { state: "NT", identityTheft: 3.1 },
  ]);

  return data;
};

export default TypesStateIT;
