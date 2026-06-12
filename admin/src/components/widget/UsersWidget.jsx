import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useEffect, useState } from "react";
import { userRequest } from "../../services/requestMethods";

const IncomeWidget = ({ type }) => {
  const [users, setUsers] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("users/stats");
        setUsers(res.data);

        if (res.data.length >= 2) {
          setPerc((res.data[1].total * 100) / res.data[0].total - 100);
        } else {
          setPerc(0);
        }
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };
    getIncome();
  }, []);

  const totalUsers = users.reduce((acc, user) => acc + user.total, 0);
  const isPositive = perc >= 0;

  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">
          {users.length > 0 ? totalUsers : "Loading..."}
        </span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className={`percentage ${isPositive ? "positive" : "negative"}`}>
          {isPositive ? <KeyboardArrowUpIcon /> : <ArrowDownwardIcon />}
          {perc.toFixed(2)}%
        </div>
        <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
      </div>
    </div>
  );
};

export default IncomeWidget;
