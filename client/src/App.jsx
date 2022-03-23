import React from "react";
import "./app.scss";
import Home from "./Components/Homepage/Home";
import { Routes, Route } from "react-router-dom";
import WatchPage from "./Components/Watch-Page/WatchPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/watch" element={<WatchPage />} />
    </Routes>
  );
};

export default App;
