import React from "react";
import ball from "../spanImg.png";

const Section5 = () => {
  return (
    <div className="view5">
      <div className="up">
        <h3 className="current">
          <span></span>CURRENT EVENTS
        </h3>
        <h2 className="win">
          To win over
          <span className="image">
            <img src={ball} alt="" />
          </span>
          sports-minded consumers with
          <span className="leaf">
            <i className="ri-leaf-fill"></i>
          </span>
          products own technology and excellent.
        </h2>
      </div>
      <div className="bottom">
        <h2 className="online">
          Online Fitness Challenge
          <span>
            <i className="ri-arrow-right-up-line"></i>
          </span>
        </h2>
        <div className="youth">
          <h2 className="orange">Youth Sports Camp - 20yo <span>
            <i className="ri-arrow-right-up-line"></i>
          </span></h2>
          <div className="youthDown"><span>Couch & Trainer</span><span>Solid Community</span>
          <span>Team Uniform</span>
          </div>
          <div className="overlay"></div>
        </div>
        <hr />
        <h2 className="online">
          Obstacle Course Race
          <span>
            <i className="ri-arrow-right-up-line"></i>
          </span>
        </h2>
        <hr />
        <h2 className="online">
          Sport x Game Day
          <span>
            <i className="ri-arrow-right-up-line"></i>
          </span>
        </h2>
        <hr />
        <h2 className="online">
          Trainer Meet & Greet
          <span>
            <i className="ri-arrow-right-up-line"></i>
          </span>
        </h2>
        <hr />
      </div>
    </div>
  );
};

export default Section5;
{
  /* */
}
