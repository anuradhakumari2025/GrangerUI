import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">granger</div>
      <div className="detail">
        <div className="menu">
          <h4>Program</h4>
          <h4>
            Product <span>New</span>
          </h4>
          <h4>Events</h4>
          <h4>About</h4>
        </div>
        <div className="toggle">
          <div className="moon">
            <i className="ri-moon-line"></i>
          </div>
          <div className="sun">
            <i className="ri-sun-line"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
