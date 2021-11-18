import React from "react";
import { useHistory } from "react-router";
import Menubar from "./Menubar";
import Navbar from "./Navbar";

function Favourite() {
  const detail = localStorage.getItem("Detail");
  const retrieve = JSON.parse(detail);

  const history = useHistory();

  const handleClick = (i) => {
    history.push({
      pathname: "/movie_info",
      state: { streamId: i },
    });
  };

  const m = localStorage.getItem("Movies");
  const r = JSON.parse(m);
  if (r == null) {
    return (
      <React.Fragment>
        <Menubar />
        <Navbar title="Favourite" />
        <div id="center_favour">
          <h1 id="center_favourite">Nothing To show</h1>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Menubar />
        <Navbar title="Favourite" />
        <div className="favourites_container">
          <h3>Movies</h3>
          <div className="movie_container">
            {r.map((x) => (
              <div>
                <img
                  className="movie_image"
                  src={x.image}
                  alt=""
                  key={x.stream_id}
                  onClick={() => handleClick(x.stream_id)}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Favourite;
