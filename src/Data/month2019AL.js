import { useState } from "react";

const Month2019AL = (props) => {
  const [data, setData] = useState([
    { month: "Jan", amountLost: 74280 },
    { month: "Feb", amountLost: 53509 },
    { month: "Mar", amountLost: 168357 },
    { month: "Apr", amountLost: 72060 },
    { month: "May", amountLost: 153656 },
    { month: "Jun", amountLost: 101257 },
    { month: "Jul", amountLost: 177574 },
    { month: "Aug", amountLost: 107720 },
    { month: "Sep", amountLost: 121561 },
    { month: "Oct", amountLost: 161765 },
    { month: "Nov", amountLost: 268235 },
    { month: "Dec", amountLost: 57890 },
  ]);

  return data;
};

export default Month2019AL;
