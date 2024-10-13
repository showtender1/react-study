import React from "react";
import uploadIcon from './img/upload.png';
import alarmIcon from './img/alarm.png';
import profileIcon from './img/profile.jpg'
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={uploadIcon} alt="Upload Icon" className="logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="검색" className="search-input" />
        <button className="search-button">🔍</button>
      </div>
      <div className="header-right">
        <img src={uploadIcon} alt="Upload Icon" className="icon" />
        <img src={alarmIcon} alt="Notifications" className="icon" />
        <img src={profileIcon} alt="Profile" className="icon" />
      </div>
    </header>
  );
}

export default Header;
