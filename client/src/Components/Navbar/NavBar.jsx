import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useWindowSize } from "./windowsize";
import { Link } from "react-router-dom";
import { Logout } from "../AuthContext/AuthActions.js";
import { AuthContext } from "../AuthContext/AuthContext";

const NavBar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [OnPhone, setOnPhone] = useState();

  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
  };

  const value = useWindowSize();
  const width = value[0];

  const handleLogout = () => {
    console.log("Clicked");
    dispatch(Logout());
  };

  useEffect(() => {
    const condition = width >= 1020 ? true : false;
    setOnPhone(condition);
  }, [width]);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Logo"
          />

          {OnPhone && (
            <div>
              <Link to="/" className="link">
                <span>Home</span>
              </Link>

              <Link to="/series" className="link">
                <span>Tv Show</span>
              </Link>

              <Link to="/movies" className="link">
                <span>Movies</span>
              </Link>

              <span>New & Popular</span>
              <span>My List</span>
            </div>
          )}

          {!OnPhone && (
            <div className="profile">
              Browse <ArrowDropDown className="icon" />
              <div className="options">
                <span>Home</span>
                <span>Tv Show</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
              </div>
            </div>
          )}
        </div>
        <div className="right">
          <Search className="icon" />
          <Notifications className="icon" />
          <img
            src="https://ih1.redbubble.net/image.618405117.2432/flat,1000x1000,075,f.u2.jpg"
            alt="Profile"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
