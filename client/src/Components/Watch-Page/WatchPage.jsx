import React from "react";
import "./watchpage.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const WatchPage = () => {
  return (
    <div className="watch">
      <Link to={"/"}>
        <div className="back">
          <ArrowBackOutlined /> Home
        </div>
      </Link>

      <video
        autoPlay
        controls
        progress
        className="video"
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/V99PvIRsxil98uknx/videoblocks-night-rock-concert_rvbqnn2fu__300ced0838989d6a4084fa788836dabb__P360.mp4"
      ></video>
    </div>
  );
};

export default WatchPage;
