import React, { useEffect, useState } from "react";
import Featured from "../Featured/Featured";
import NavBar from "../Navbar/NavBar";
import "./home.scss";
import List from "../List/List";

import { RandomList } from "../API/API.js";

const Home = ({ type }) => {
  const [Lists, setLists] = useState([]);
  const [genre, setgenre] = useState(null);

  useEffect(() => {
    const randList = async () => {
      const list = await RandomList(type, genre);
      setLists(list);
    };

    randList();
  }, [type, genre]);

  return (
    <div className="home">
      <NavBar></NavBar>
      <Featured type={type} setgenre={setgenre} />

      {Lists.map((list, i) => (
        <List list={list} key={i}></List>
      ))}
    </div>
  );
};

export default Home;
