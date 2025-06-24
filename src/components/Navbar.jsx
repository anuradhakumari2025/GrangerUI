import React from "react";

const Navbar = ({ darkMode, toggleTheme }) => {
  const handleToggle = () => {
    console.log("co");
  };
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
        <div className="toggle" onClick={toggleTheme}>
      <div className="icon-container">
                <i className="ri-sun-line"></i>
        <i className="ri-moon-line"></i>
        <div className={`switch-thumb ${darkMode ? "right" : "left"}`}></div>
      </div>
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
