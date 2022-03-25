import React from "react";
import "./app.scss";
import Home from "./Components/Homepage/Home";
import { Routes, Route } from "react-router-dom";
import WatchPage from "./Components/Watch-Page/WatchPage";
import Register from "./Components/Register/Register";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/watch" element={<WatchPage />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
