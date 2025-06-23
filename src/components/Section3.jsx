import ball from "../spanImg.png";

const Section3 = () => {
  return (
    <div className="view3">
      <div className="one">
        <div className="left">
          <span>
            <i className="ri-basketball-line"></i>Virtual Challenges
          </span>
          <span>
            <i className="ri-trophy-fill"></i>Community Tournaments
          </span>
        </div>
        <h1 className="program">
          <span></span>THE PROGRAM
        </h1>
      </div>
      <div className="two">
        <h1>
          Elevate your
          <span>
            <img src={ball} alt="" />
          </span>
          experience with handpicked featured.
        </h1>
        <p>
          Your sports journey starts <br /> right here with us and the crew.
        </p>
      </div>
      <div className="three">
        <div className="left">
          <div className="event">
            <p>
              <span>01</span>/8
            </p>
            <p className="upcoming">Upcoming Event</p>
          </div>
          <div className="circle">
            <div className="leftArrow"><i className="ri-arrow-left-line"></i></div>
            <div className="rightArrow"><i className="ri-arrow-right-line"></i></div>
          </div>
        </div>
        <div className="middle">
          <h3 className="coach">
            The coach experts <span>img</span> and simple software
            <span>
              <i className="ri-flower-line"></i>
            </span>
            for better sportainment.
          </h3>
          <div className="live">
            <span>
             <i className="ri-rfid-line"></i>Live
            </span>
            <span className="dotCom">granger.com</span>
          </div>
        </div>
        <div className="racket">
          <div className="top">
            <div className="sportCenter">
              <p>Sportcenter</p>
            </div>
            <div className="icon">
              <span>
                <i className="ri-basketball-fill"></i>
              </span>
              <p className="twoK">2.88k</p>
              <p className="member">Membership</p>
            </div>
          </div>
          <div className="bottom">
            <p className="oneK">
              1.20k <span>Membership</span>
            </p>
            <h3>Chemistry Sports Partner</h3>
            <p className="US">New York ,US</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
// #FA4D05
