import React from "react";
import "./register.scss";

const Register = () => {
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
        <div className="input">
          <input type="email" name="email" placeholder="Email Address" />
          <button className="RegisterButton">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
