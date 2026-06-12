import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { userRequest } from "../../services/requestMethods";

const IncomeWidget = ({ type }) => {

  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);
console.log(income)
  return (
    <>
    <div className="widget">
      <div className="left">
        <span className="title">EARNINGS</span>
        <span className="counter">
        ${income[1]?.total}
        </span>
        <span className="link">View net earnings</span>
      </div>
      <div className="right">
        <div className="percentage positive">
        %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <KeyboardArrowUpIcon className="featuredIcon negative" />
            ) : (
              <ArrowDownwardIcon className="featuredIcon" />
            )}
          
        </div>
        <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
      </div>
    </div>

    </>

  );
};

export default IncomeWidget;
