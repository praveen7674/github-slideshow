import React from "react";
import { BeatLoader } from "react-spinners";
import "..//css/Wait.css";
function Wait() {
  return (
    <React.Fragment>
      <div id="wait_ji">
        <BeatLoader size={48} color="purple" />
      </div>
    </React.Fragment>
  );
}

export default Wait;
