import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import VideoGrid from "./VideoGrid";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main>
        <div className="category-bar">
          <button>전체</button>
          <button>게임</button>
          <button>음악</button>
          <button>믹스</button>
          <button>스포츠</button>
        </div>
        <VideoGrid />
      </main>
    </div>
  );
}

export default App;
