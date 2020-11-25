import React, { useState, Fragment } from "react";
import "./App.css";
import Feed from "./Feed";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Grid from "@material-ui/core/Grid";

function App(props) {
  const [selectedImg, setSelectedImg] = useState(null);
  const [darkmode, setDarkmode] = useState(false);
  const [sidebar, showSidebar] = useState(false);

  return (
    <Fragment>
      <div className={`App ${darkmode ? "App__dark" : ""}`}>
        <Grid
          container
          spacing={0}
          style={{
            margin: "auto",
            width: "94%",
            filter: selectedImg ? "blur(4px)" : "blur(0)",
          }}
        >
          <Grid lg={3} md={2} sm={2} xs={2}>
            <Sidebar sidebar={sidebar} />
          </Grid>
          <Grid lg={5} md={9} sm={8} xs={10}>
            <Feed
              setSelectedImg={setSelectedImg}
              setDarkmode={setDarkmode}
              sidebar={sidebar}
              showSidebar={showSidebar}
            />
          </Grid>
          <Grid lg={4} md={false} sm={false} xs={false} className="md-none">
            <Widgets />
          </Grid>
        </Grid>
      </div>
      {selectedImg && (
        <Modal imageUrl={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </Fragment>
  );
}

export default App;
