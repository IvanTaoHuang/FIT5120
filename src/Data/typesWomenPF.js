import { useState } from "react";

const TypesWomenPF = (props) => {
  const [data, setData] = useState([
    { typesOfPersonalFraud: "Card fraud", Women: 722.3 },
    { typesOfPersonalFraud: "Identity theft", Women: 76 },
    { typesOfPersonalFraud: "Scams", Women: 392.3 },
  ]);

  return data;
};

export default TypesWomenPF;
