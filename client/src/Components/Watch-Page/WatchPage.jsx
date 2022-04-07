import React from "react";
import "./watchpage.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const WatchPage = () => {
  const location = useLocation();

  const movie = location.state.movie;
  return (
    <div className="watch">
      <Link to={"/"}>
        <div className="back">
          <ArrowBackOutlined /> Home
        </div>
      </Link>

      <video autoPlay controls className="video" src={movie.trailer}></video>
    </div>
  );
};

export default WatchPage;
