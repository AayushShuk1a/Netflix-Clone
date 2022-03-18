import React, { useState } from "react";
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";

const NavBar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [onPhone, setonPhone] = useState(false);

  window.onscroll = () => {
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Logo"
          />
          <span>Home</span>
          <span>Tv Show</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
          {
            <div className="profile">
              <span>Browse</span>
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          }
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
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
