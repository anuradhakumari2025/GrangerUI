import React from "react";
import ball from "../spanImg.png";
const Section6 = () => {
  return (
    <div className="view6">
      <div className="up">
        <h3 className="people">
          What
          <span>
            <img src={ball} alt="" />
          </span>
          people are honestly saying right now
        </h3>
        <div className="testimonial">
          <p><span></span>Testimonial</p>
          <p><i className="ri-wechat-line"></i>Customer Says</p>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="head">
            <p>
              <span></span>1/20
            </p>
            <div className="line"></div>
          </div>
          <h3>
            "The activity tracker keeps me on track, and the community pushes me
            to keep going. It's the perfect mix of fun and fitness"
          </h3>
          <div className="stars">
            <span>
              <i className="ri-star-fill"></i>
            </span>
            <span>
              <i className="ri-star-fill"></i>
            </span>
            <span>
              <i className="ri-star-fill"></i>
            </span>
            <span>
              <i className="ri-star-fill"></i>
            </span>
            <span>
              <i className="ri-star-half-fill"></i>
            </span>
            &nbsp; 4.5
          </div>
          <div className="benedata">
            <div className="chan">
              <h3>Benedata Chan</h3>
              <p>Housewife in China</p>
            </div>
            <div className="circle">
              <div className="circle1">
                <div className="circle2">
                  <span>
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="head">
            <div className="trainer">
              <span>
                <i className="ri-award-line"></i>Professional Trainer
              </span>
              <span>
                <i className="ri-gift-line"></i>Merchandise
              </span>
            </div>
            <p>APR-MAY 2025</p>
          </div>
          <div className="center">
            <h1>Single Session</h1>
            <p>Individual Training - Beginner</p>
            <p className="session"><span>$99 </span>/Session</p>
          </div>
          <div className="rightEnd">
            <h3><span></span>FULL GAME</h3>
            <span className="arrow"><i className="ri-arrow-right-up-line"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
