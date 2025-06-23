import ball from "../spanImg.png";
const Section4 = () => {
  return (
    <div className="view4">
      {/* Left div */}
      <div className="left">
        <div className="leftCenter">
          <div className="head">
            <h3 className="activity"><span><i className="ri-fire-fill"></i></span>Activity</h3>
            <p className="eightSeven">
              <span></span> 87%
            </p>
          </div>

          <p className="twoPointSeven">
            <span>2.780</span> Cal
          </p>
          <p className="well">You improved current well-being</p>

          <div className="image">
            <img src="" alt="" />
          </div>

          <div className="bottom">
            <div className="one">
              <p>
                <span></span>Working
              </p>
              <p>
                <span>127 </span>Cal
              </p>
            </div>

            <div className="two">
              <p>
                <span className="dot"></span>Running
              </p>
              <p>
                <span>386 </span>Cal
              </p>
            </div>

            <div className="three">
              <p>
                <span></span>Workout
              </p>
              <p>
                <span>249 </span>Cal
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Div */}
      <div className="right">
        <h2 className="featured">
          <span></span>FEATURED FEATURES
        </h2>
        <h1 className="stay">
          Stay motivated with activity
          <span>
            <img src={ball} alt="" />
          </span>
          tracking.
        </h1>
        <div className="icons">
          <span><i className="ri-command-line"></i></span>
          <span><i className="ri-t-shirt-2-line"></i></span>
          <span><i className="ri-moon-cloudy-line"></i></span>
          <span className="eight">8+</span>
        </div>
        <div className="rightBottom">
          <div className="rightBottomLeft">
            <p className="record">Record - activities to boost your performance</p>
            <div className="gpt">
              <h3 className="gptPara">WITH GPT 4.0</h3>
              <div className="circle">
                <span className="topRightArrow"><i className="ri-arrow-right-up-line"></i></span>
                <p  className="explore">EXPLORE <br /> MORE</p>
              </div>
            </div>
          </div>
          <div className="rightBottomRight">
            <div className="image">
              <p className="twoFive"><span></span>2025</p>
              <div className="view"><span><i className="ri-run-line"></i></span>View More</div>
              <h3 className="comming">comming soon</h3>
            </div>
            <h1 className="mood"><span><i className="ri-flashlight-fill"></i></span>Mood Boost</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
