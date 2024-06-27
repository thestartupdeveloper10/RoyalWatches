import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import IncomeWidget from "../../components/widget/IncomeWidget";
import UsersWidget from "../../components/widget/UsersWidget";
import OrderWidget from "../../components/widget/OrderWidget"
import BalanceWidget from "../../components/widget/BalanceWidget"
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../services/requestMethods";

const Home = () => {

  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
console.log(userStats)
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
         <IncomeWidget/>
         <OrderWidget/>
         <UsersWidget/>
         <BalanceWidget/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="User Analytics" data={userStats} dataKey="Active User" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
