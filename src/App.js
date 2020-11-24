import React, { useState, Fragment } from "react";
import "./App.css";
import Feed from "./Feed";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App(props) {
  const [selectedImg, setSelectedImg] = useState(null);
  const [darkmode, setDarkmode] = useState(false);

  return (
    <Fragment>
      <div className={`App ${darkmode ? "App__dark" : ""}`}>
        <div
          className="App__inner"
          style={{
            filter: selectedImg ? "blur(4px)" : "blur(0)",
          }}
        >
          <Sidebar />
          <Feed setSelectedImg={setSelectedImg} setDarkmode={setDarkmode} />
          <Widgets darkmode={darkmode} />
        </div>
      </div>
      {selectedImg && (
        <Modal imageUrl={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </Fragment>
  );
}

export default App;
