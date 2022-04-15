import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterPerson } from "../API/API";
import "./register.scss";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const eref = useRef();
  const navigate = useNavigate();

  const HandleStart = () => {
    setEmail(eref.current.value);
  };

  const HandleFinish = (e) => {
    e.preventDefault();

    RegisterPerson({ Username, Password, Email });
    navigate("/login");
  };

  const handleSingin = () => {
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="Logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Logo"
          />

          <button className="loginButton" onClick={handleSingin}>
            Sign In
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!Email ? (
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              ref={eref}
            />
            <button className="RegisterButton" onClick={HandleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <div className="input">
            <input
              type="username"
              name="username"
              placeholder="username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
            />
            <button className="RegisterButton" onClick={HandleFinish}>
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
