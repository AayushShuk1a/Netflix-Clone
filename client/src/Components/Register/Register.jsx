import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const eref = useRef();
  const pref = useRef();

  const HandleStart = () => {
    setEmail(eref.current.value);
  };

  console.log(Email);

  const HandleFinish = () => {
    setPassword(pref.current.value);
  };

  console.log(Password);

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="Logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Logo"
          />
          <button className="loginButton">Sign In</button>
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
              type="password"
              name="password"
              placeholder="password"
              ref={pref}
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
