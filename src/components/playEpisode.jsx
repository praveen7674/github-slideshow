import React from "react";
import { useLocation } from "react-router";
import Player from "react-player";

function PlayEpisode() {
  const ret = JSON.parse(localStorage.getItem("Detail"));

  const location = useLocation();
  const Id = location.state.episodeId;
  const URL =
    ret.User_play_url +
    "/series/" +
    ret.Username +
    "/" +
    ret.User_password +
    "/" +
    Id +
    ".mkv";

  return (
    <React.Fragment>
      <div className="player-wrapper">
        <Player
          className="react-player"
          url={URL}
          width="70%"
          height="70%"
          controls={true}
        />
      </div>
    </React.Fragment>
  );
}
export default PlayEpisode;
