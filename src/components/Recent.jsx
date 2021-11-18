import React from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";

function Recent() {
  return (
    <React.Fragment>
      <Menubar />
      <Navbar title="Recent" />
    </React.Fragment>
  );
}

export default Recent;
