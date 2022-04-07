import React, { useContext, useState } from "react";

import { AuthContext } from "../../Context/AuthContext/AuthContext";
import "./Login.css";

export default function Login() {
  const setEmail = () => {};
  const setPassword = () => {};

  const handleLogin = () => {};
  const isFetching = () => {};

  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
}
