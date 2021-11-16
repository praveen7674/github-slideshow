import React from "react";
import { useEffect, useState } from "react";
import "..//css/movieInfo.css";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import axios from "axios";
import Menubar from "./Menubar";
import Player from "react-player";
import Wait from "./Wait";

function MovieInfo() {
  const location = useLocation();
  const stream_id = location.state.streamId;

  const detail = localStorage.getItem("Detail");
  const retrieve = JSON.parse(detail);

  const [movie_info, setMovie_info] = useState({});
  const [check, setCheck] = useState(false);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    async function movieStream() {
      const API =
        retrieve.User_play_url +
        "/player_api.php?username=" +
        retrieve.Username +
        "&password=" +
        retrieve.User_password +
        "&action=get_vod_info&vod_id=" +
        stream_id;
      console.log(API);
      const req = await axios.get(API);
      const res = await req.data;
      setMovie_info(res);
      setWait(true);
    }
    movieStream();
  }, [stream_id]);
  const extension1 = Object.values(movie_info).map(
    (x) => x.container_extension
  );
  const youtubeId = Object.values(movie_info).map((x) => x.youtube_trailer);

  const history = useHistory();
  const handleClick1 = () => {
    history.push({
      pathname: "/play_trailer",
      state: { youtube_Id: youtubeId },
    });
  };
  const URL =
    "http://xtremity.tv:2052/movie/qyf9ax/p7au3w/" +
    stream_id +
    "." +
    extension1;
  console.log(URL);
  const handleClick2 = () => {
    setCheck(true);
  };
  const change_label = () => {};
  return (
    <React.Fragment>
      <Menubar />
      {wait ? (
        <div className="movie_info">
          {check ? (
            <div className="player-wrapper2">
              <div className="react-player2">
                <Player
                  url={URL}
                  width="1390px"
                  height="891px"
                  controls={true}
                />
              </div>
            </div>
          ) : (
            <div>
              {Object.values(movie_info).map((x) => (
                <div className="movies_container">
                  <img
                    className="movie_poster"
                    key={x.name}
                    src={x.movie_image}
                    alt=""
                  />
                  <div className="movie_com_detail">
                    <span className="movie_name">{x.name}</span>
                    <h5 className="movieDetail">
                      {x.release_date} {x.genre} {x.duration}
                    </h5>
                    <span className="directedby">
                      Directed By: {x.director}
                    </span>
                    <span className="actors">Actors: {x.actors}</span>
                    <span className="cast">Cast: {x.cast}</span>
                    <span className="country">Country: {x.country}</span>
                    <span className="description">{x.description}</span>
                    <button
                      className="trailer"
                      type="button"
                      onClick={() => handleClick1()}
                    >
                      Trailer
                    </button>
                    <button
                      className="play"
                      onClick={() => handleClick2()}
                      type="button"
                    >
                      Play
                    </button>
                    <button
                      onclick={() => change_label()}
                      className="add_Fav"
                      type="button"
                    ></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Wait />
      )}
    </React.Fragment>
  );
}

export default MovieInfo;
