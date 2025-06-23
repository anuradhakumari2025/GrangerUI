import React from 'react'
import ball from "../spanImg.png"
const Section2 = () => {
  return (
<section className="view2">
        <div className="left">
          <h1 className="benefit">
            <span></span>THE BENEFIT
          </h1>
          <h1 className="explore">
            Explore <span><img src={ball} alt="" /> </span>our flexible of acivity.
          </h1>
          <div className="span">
            <span><i className="ri-emotion-2-fill  emot"></i>Eating After the Game</span>
            <span><i className="ri-t-shirt-line"></i>Game Jersey</span>
          </div>
          <div className="whiteBg">
            <div className="head">
              <h2>Connections</h2>
              <span></span>
            </div>
            <p>
              Built to connect - with people, purpose, and the momentum that
              moves you forward.
            </p>
          </div>
          <div className="bottom">
            <h2>Sport Package</h2>
            <span><i className="ri-add-fill"></i></span>
          </div>
        </div>
        <div className="right">
          <div className="rightLeft">
            <div className="top">
              <h2>
                <span><i className="ri-basketball-line"></i></span>EST - 1997
              </h2>
              <p>
                Smart features designed to move with you - fast,flexible, and
                built for everyday action.
              </p>
            </div>
            <div className="down">
              <h1>Visionary Precision Play</h1>
              <div className="btn">
                Join Now! <span><i className="ri-arrow-right-line"></i></span>
              </div>
            </div>
          </div>
          <div className="rightRight">
            <h2>
              <span><i className="ri-gift-2-line"></i></span>February Sale
            </h2>
            <div className="bottom">
             <div className="content">
               <h4>Tenis Outdor</h4>
              <h3><span>86%</span> Member</h3>
             </div>
              <div className="boost"><span><i className="ri-flashlight-fill"></i>Boost</span></div>
            </div>
          </div>
        </div>
      </section>  )
}

export default Section2