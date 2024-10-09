import React from "react";
import "./Banner.css";

export const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner_main">
          <div className="text">
            <h1>Masters of Consistency and Quality.</h1>
            <p>
              Blessing welcomed ladyship she met humoured sir breeding her. Six
              curiosity day assurance bed necessary.
            </p>
            <div className="b_btn">
              <a className="b_fi" href="#">
                Explore
              </a>
              <a className="b_se" href="#">
                Contact Us
              </a>
            </div>
          </div>
          <div className="img">
            <img className="shape" src="images/shape.png" alt="" />
            <img src="images/banner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
