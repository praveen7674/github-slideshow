import React from "react";
import { useHistory } from "react-router";

function FavLiveTv(props) {
  const history = useHistory();

  const handleClick = (category_Id, stream_Id) => {
    history.push({
      pathname: "/LiveTv",
      state: {
        category_id: category_Id,
        stream_id: stream_Id,
      },
    });
  };

  if (props.fav === null) {
    return null;
  } else {
    return (
      <React.Fragment>
        <h3>Live Tv</h3>
        <div>
          {props.fav.map((x) => (
            <div
              className="list_channel"
              key={x.LiveTv_id}
              onClick={() => handleClick(x.category_id, x.stream_id)}
            >
              {x.LiveTv_id}
              <img id="channel_icon" src={x.icon} alt="" />
              <h3 id="channel_name">{x.name}</h3>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default FavLiveTv;
