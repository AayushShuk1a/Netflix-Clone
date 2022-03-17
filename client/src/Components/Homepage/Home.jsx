import React from "react";
import NavBar from "../Navbar/NavBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <NavBar></NavBar>
      <img
        src="https://wallpapercave.com/wp/wp10551370.jpg"
        alt=""
        style={{ width: "100%" }}
      />
      <img
        src="https://wallpapercave.com/wp/wp10835280.jpg"
        alt=""
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Home;
