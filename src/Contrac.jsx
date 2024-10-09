import React from "react";
import "./contrac.css";

const Contrac = () => {
  return (
    <section className="contrac">
      <div className="container">
        <div className="t_te">
          <h1>Contact Us</h1>
          <p>
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
        </div>
        <div className="main">
          <div className="left">
            <form action="">
              <input type="text" placeholder="Maya" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <a className="btn" href="#">
                Send Massage
              </a>
            </form>
          </div>
          <div className="right">
            <img src="images/Group 597.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contrac;
