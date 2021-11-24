import React from "react";
import { useHistory } from "react-router";

function FavMovies(props) {
  const history = useHistory();

  const handleClick = (i) => {
    history.push({
      pathname: "/movie_info",
      state: { streamId: i },
    });
  };

  if (props.fav === null) {
    return null;
  } else {
    return (
      <React.Fragment>
        <h3>Movies</h3>
        <div className="movie_container">
          {props.fav.map((x) => (
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
      </React.Fragment>
    );
  }
}
export default FavMovies;
