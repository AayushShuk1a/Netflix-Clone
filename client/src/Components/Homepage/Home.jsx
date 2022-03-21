import React from "react";
import Featured from "../Featured/Featured";
import NavBar from "../Navbar/NavBar";
import "./home.scss";
import List from "../List/List";

const Home = () => {
  return (
    <div className="home">
      <NavBar></NavBar>
      <Featured type="movie" />
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
    </div>
  );
};

export default Home;
