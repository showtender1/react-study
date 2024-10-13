import React from "react";
import "./styles.css";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>홈</li>
        <li>Shorts</li>
        <li>구독</li>
        <li>YouTube Music</li>
        <li>내 채널</li>
        <li>시청 기록</li>
        <li>재생목록</li>
        <li>좋아요 표시한 동영상</li>
      </ul>
    </nav>
  );
}

export default Sidebar;
