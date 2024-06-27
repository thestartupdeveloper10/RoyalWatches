import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useEffect, useState } from "react";
import { userRequest } from "../../services/requestMethods";

const BalanceWidget = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);

        if (res.data.length >= 2) {
          setPerc((res.data[1].total * 100) / res.data[0].total - 100);
        } else {
          setPerc(0);
        }
      } catch (error) {
        console.error("Error fetching income data:", error);
      }
    };
    getIncome();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">BALANCE</span>
        <span className="counter">
          {income.length > 1 ? `$${income[1]?.total}` : "Loading..."}
        </span>
        <span className="link">See details</span>
      </div>
      <div className="right">
        <div className={`percentage ${perc >= 0 ? "positive" : "negative"}`}>
          {Math.floor(perc)}%{" "}
          {perc >= 0 ? (
            <KeyboardArrowUpIcon className="featuredIcon positive" />
          ) : (
            <ArrowDownwardIcon className="featuredIcon negative" />
          )}
        </div>
        <AccountBalanceWalletOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
        />
      </div>
    </div>
  );
};

export default BalanceWidget;
