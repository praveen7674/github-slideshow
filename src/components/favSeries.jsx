import React from "react";
import { useHistory } from "react-router";

function FavSeries(props) {
  const history = useHistory();

  const handleClick = (i) => {
    history.push({
      pathname: "/seriesInfo",
      state: { seriesId: i },
    });
  };
  if (props.fav === null) {
    return null;
  } else {
    return (
      <React.Fragment>
        <h3>Series</h3>
        <div className="movie_container">
          {props.fav.map((x) => (
            <div>
              <img
                className="movie_image"
                src={x.image}
                alt=""
                key={x.series_id}
                onClick={() => handleClick(x.series_id)}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default FavSeries;
