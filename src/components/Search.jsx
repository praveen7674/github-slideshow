import React from "react";
import Menubar from "./Menubar";
import "..//css/navbar.css";

function Search() {
  return (
    <React.Fragment>
      <Menubar />
      <nav class="navbar navbar">
        <form class="form-inline">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // onChange={()=>}
          />
        </form>
      </nav>
    </React.Fragment>
  );
}

export default Search;
