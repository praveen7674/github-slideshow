import React from "react";
import { useHistory } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

function BackButton() {
  let history = useHistory();

  return (
    <React.Fragment>
      <h1 className="backButton">
        <IoChevronBackCircleOutline onClick={() => history.goBack()} />
      </h1>
    </React.Fragment>
  );
}

export default BackButton;
