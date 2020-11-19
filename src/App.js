import React, { useState } from "react";
import "./App.css";
import Feed from "./Feed";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [darkmode, setDarkmode] = useState(false);

  return (
    // Bem
    <>
      <div className={`App ${darkmode ? "App__dark" : ""}`}>
        <div
          className="App__inner"
          style={{
            filter: selectedImg ? "blur(4px)" : "blur(0)",
          }}
        >
          {/* SideBar */}
          <Sidebar />
          {/* Feed */}
          <Feed setSelectedImg={setSelectedImg} setDarkmode={setDarkmode} />
          {/* Widget */}
          <Widgets />
        </div>
      </div>
      {selectedImg && (
        <Modal imageUrl={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
}

export default App;
