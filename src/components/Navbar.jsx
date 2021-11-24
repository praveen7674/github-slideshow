import React from "react";
import "../css/navbar.css";

function Navbar(props) {
  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar">
          <span className="navbar-brand mb-0 h1">{props.title}</span>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
