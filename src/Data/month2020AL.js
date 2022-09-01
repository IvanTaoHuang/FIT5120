import { useState } from "react";

const Month2020AL = (props) => {
  const [data, setData] = useState([
    { month: "Jan", amountLost: 123448 },
    { month: "Feb", amountLost: 74368 },
    { month: "Mar", amountLost: 49623 },
    { month: "Apr", amountLost: 90999 },
    { month: "May", amountLost: 50288 },
    { month: "Jun", amountLost: 91219 },
    { month: "Jul", amountLost: 159767 },
    { month: "Aug", amountLost: 128585 },
    { month: "Sep", amountLost: 220540 },
    { month: "Oct", amountLost: 348691 },
    { month: "Nov", amountLost: 133860 },
    { month: "Dec", amountLost: 218018 },
  ]);

  return data;
};

export default Month2020AL;
