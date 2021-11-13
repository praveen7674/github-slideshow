import React from "react";
// import "../css/navbar.css";

function Navbar(props) {
  return (
    <React.Fragment>
      {/* <div className="Navbar"> */}
      <nav className="Navbar_navbar">
        <img id="nav_img" alt="" />
        <h2>{props.head}</h2>
        <input
          className="input_search"
          type="search"
          placeholder="Search Here"
          aria-label="Search"
        />
      </nav>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Navbar;
