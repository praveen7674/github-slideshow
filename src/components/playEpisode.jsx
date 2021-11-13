import React from "react";
import { useLocation } from "react-router";
import Player from "react-player";

function PlayEpisode() {
  const location = useLocation();
  const Id = location.state.episodeId;
  const URL = "http://xtremity.tv:2052/series/qyf9ax/p7au3w/" + Id + ".mkv"; //

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
