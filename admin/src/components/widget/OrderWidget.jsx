import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect, useState } from "react";
import { userRequest } from "../../services/requestMethods";

const OrderWidget = () => {
  const [orders, setOrders] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/stats");
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching order income data:", error);
      }
    };
    getIncome();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">ORDERS</span>
        <span className="counter">
          {orders}
        </span>
        <span className="link">View all orders</span>
      </div>
      <div className="right">
        <div>
         
        </div>
        <ShoppingCartOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
      </div>
    </div>
  );
};

export default OrderWidget;
