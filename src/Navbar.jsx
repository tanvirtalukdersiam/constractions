import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav_main">
          <div className="logo">
            <img src="images/logo .png" alt="" />
          </div>
          <div className="manu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Servics</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
