import React from "react";
import Featured from "../Featured/Featured";
import NavBar from "../Navbar/NavBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <NavBar></NavBar>
      <Featured type="movie" />
    </div>
  );
};

export default Home;
