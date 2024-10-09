import React from "react";
import "./Choose.css";

export const Choose = () => {
  return (
    <section className="choose">
      <div className="container">
        <div className="text_main">
          <div className="t_left">
            <p>
              Blessing welcomed ladyship she met humoured sir breeding her. Six
              curiosity day assurance bed necessary.
            </p>
            <a className="b_fi" href="#">
              Explore
            </a>
          </div>
          <div className="t_right">
            <h2>Why Choose us for best construction experience</h2>
          </div>
        </div>
        <div className="c_main">
          <div className="c_left">
            <img src="images/image.png" alt="" />
          </div>
          <div className="c_right">
            <div className="c_item">
              <div className="c_img">
                <img src="images/Group 593.png" alt="" />
              </div>
              <div className="c_text">
                <p>
                  {" "}
                  And residence for met the estimable disposing. Mean if he they
                  been no hold mr. Is at much do made took held help.{" "}
                </p>
              </div>
            </div>
            <div className="c_item">
              <div className="c_img">
                <img src="images/Group 594.png" alt="" />
              </div>
              <div className="c_text">
                <p>
                  {" "}
                  Up maids me an ample stood given. Certainty say suffering his
                  him collected intention promotion.{" "}
                </p>
              </div>
            </div>
            <div className="c_item">
              <div className="c_img">
                <img src="images/Group 595.png" alt="" />
              </div>
              <div className="c_text">
                <p>
                  {" "}
                  Good draw knew bred ham busy his hour. Ask agreed answer
                  rather joy nature admire wisdom.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
