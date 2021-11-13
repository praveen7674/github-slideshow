import React from "react";
import { useLocation } from "react-router";
import YouTubePlayer from "react-player/youtube";

function PlayTrailer() {
  const location = useLocation();
  const youtubeId = location.state.youtube_Id;
  const URL = "https://www.youtube.com/watch?v=" + youtubeId;

  return (
    <React.Fragment>
      <div className="player-wrapper">
        <YouTubePlayer
          className="react-player"
          url={URL}
          width="50%"
          height="50%"
          controls={true}
        />
      </div>
    </React.Fragment>
  );
}

export default PlayTrailer;
