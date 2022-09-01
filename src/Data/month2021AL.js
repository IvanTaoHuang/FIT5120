import { useState } from "react";

const Month2021AL = (props) => {
  const [data, setData] = useState([
    { month: "Jan", amountLost: 228101 },
    { month: "Feb", amountLost: 207269 },
    { month: "Mar", amountLost: 227197 },
    { month: "Apr", amountLost: 200801 },
    { month: "May", amountLost: 1470933 },
    { month: "Jun", amountLost: 213901 },
    { month: "Jul", amountLost: 346947 },
    { month: "Aug", amountLost: 383679 },
    { month: "Sep", amountLost: 197943 },
    { month: "Oct", amountLost: 224644 },
    { month: "Nov", amountLost: 172088 },
    { month: "Dec", amountLost: 450625 },
  ]);

  return data;
};

export default Month2021AL;
