import { useState } from "react";

const TypesMenPF = (props) => {
  const [data, setData] = useState([
    { typesOfPersonalFraud: "Card fraud", Men: 683.3 },
    { typesOfPersonalFraud: "Identity theft", Men: 80.8 },
    { typesOfPersonalFraud: "Scams", Men: 326.5 },
  ]);

  return data;
};

export default TypesMenPF;
