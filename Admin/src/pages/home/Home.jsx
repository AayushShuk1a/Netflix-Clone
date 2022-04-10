import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";

import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useContext, useEffect, useMemo, useState } from "react";

import { GetStats } from "../../API/API.js";
import { Button } from "@material-ui/core";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Logout } from "../../Context/AuthContext/AuthActions";
import { useHistory } from "react-router-dom";

export default function Home() {
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

  const [userStats, setUserStats] = useState([]);

  const navigate = useHistory();

  const { dispatch } = useContext(AuthContext);

  const logoutHandler = () => {
    dispatch(Logout());
    navigate.push("/login");
  };

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await GetStats();
        const statsList = res.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <Button onClick={logoutHandler}>Logout</Button>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
