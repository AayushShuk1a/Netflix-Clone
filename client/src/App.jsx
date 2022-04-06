import React from "react";
import "./app.scss";
import Home from "./Components/Homepage/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import WatchPage from "./Components/Watch-Page/WatchPage";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

const App = () => {
  const user = false;
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to="/register" />}
      ></Route>
      <Route
        exact
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      ></Route>

      <Route
        exact
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      ></Route>

      {user && (
        <>
          <Route exact path="/movies" element={<Home type="movies" />}></Route>
          <Route exact path="/series" element={<Home type="Series" />}></Route>
          <Route exact path="/watch" element={<WatchPage />} />
        </>
      )}
    </Routes>
  );
};

export default App;
