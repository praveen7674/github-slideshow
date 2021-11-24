import React from "react";
import FavLiveTv from "./favLiveTv";
import FavMovies from "./favMovies";
import FavSeries from "./favSeries";
import Menubar from "./Menubar";
import Navbar from "./Navbar";

function Favorite() {
  const r = JSON.parse(localStorage.getItem("favMov"));
  const i = JSON.parse(localStorage.getItem("favSer"));
  const l = JSON.parse(localStorage.getItem("favTv"));

  if (i == null && r == null && l == null) {
    return (
      <React.Fragment>
        <Menubar />
        <Navbar title="Favorite" />
        <div id="center_favour">
          <h1 id="center_favorite">Nothing To show</h1>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Menubar />
        <Navbar title="Favorite" />
        <div className="favorites_container">
          <FavMovies fav={r} />
          <FavSeries fav={i} />
          <FavLiveTv fav={l} />
        </div>
      </React.Fragment>
    );
  }
}

export default Favorite;
