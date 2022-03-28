import React from 'react';

const HeaderBar = () => {
  return (
    <nav>
      <div className="topnav">
        <span className="nav-item" href="#home">
          Home
        </span>
        <span className="nav-item" href="#news">
          News
        </span>
        <span className="nav-item" href="#contact">
          Contact
        </span>
        <span className="nav-item" href="#about">
          About
        </span>
      </div>
    </nav>
  );
};

export default HeaderBar;
