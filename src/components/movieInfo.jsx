import React from "react";
import { useEffect, useState } from "react";
import "..//css/movieInfo.css";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import axios from "axios";
import Menubar from "./Menubar";
import Player from "react-player";
import Wait from "./Wait";
import BackButton from "./BackButton";

function MovieInfo() {
  const location = useLocation();
  const stream_id = location.state.streamId;

  const retrieve = JSON.parse(localStorage.getItem("Detail"));

  const [movieInfo, setMovieInfo] = useState([]);
  const [check, setCheck] = useState(false);
  const [wait, setWait] = useState(false);
  const [truth, setTruth] = useState(true);

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
      const req = await axios.get(API);
      const res = await req.data;
      setMovieInfo(res);
      setWait(true);
    }
    movieStream();
  }, [retrieve.User_password, retrieve.User_play_url, retrieve.Username, stream_id]);

  const extension1 = Object.values(movieInfo).map((x) => x.container_extension);
  const youtubeId = Object.values(movieInfo).map((x) => x.youtube_trailer);

  const history = useHistory();
  const handleClick1 = () => {
    history.push({
      pathname: "/play_trailer",
      state: { youtube_Id: youtubeId },
    });
  };
  const URL =
    retrieve.User_play_url +
    "/movie/" +
    retrieve.Username +
    "/" +
    retrieve.User_password +
    "/" +
    stream_id +
    "." +
    extension1;

  const handleClick2 = () => {
    setCheck(true);
  };

  const Img = Object.values(movieInfo).map((x) => x.movie_image);
  const image = Img[0];
  const Name = Object.values(movieInfo).map((x) => x.name);
  const name = Name[0];
  var item = { name, image, stream_id };

  const addFavorite = () => {
    setTruth(false);
    if (
      localStorage.getItem("favMov") === undefined || // execute if arr is empty
      localStorage.getItem("favMov") === null
    ) {
      var favMov = [];
      favMov.push(item);
      localStorage.setItem("favMov", JSON.stringify(favMov));
    } else {
      const data = JSON.parse(localStorage.getItem("favMov"));
      data.push(item);
      localStorage.setItem("favMov", JSON.stringify(data));
    }
  };

  const removeFavorite = () => {
    setTruth(true);
    const data = JSON.parse(localStorage.getItem("favMov"));
    var index = data.map((x) => {
      return x.stream_id;
    });
    const id = index.filter((x) => x === stream_id);

    const updatedItem = data.map((x) => x.stream_id === id);
    data.pop(updatedItem);
    localStorage.setItem("favMov", JSON.stringify(data));
  };
  return (
    <React.Fragment>
      <Menubar />
      {wait ? (
        <>
          <div id="btn">
            <BackButton />
          </div>
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
                {Object.values(movieInfo).map((x) => (
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
                      {truth ? (
                        <button
                          onClick={() => addFavorite()}
                          className="add_Fav"
                          type="button"
                        >
                          Add Favorite
                        </button>
                      ) : (
                        <button
                          onClick={() => removeFavorite()}
                          className="add_Fav"
                          type="button"
                        >
                          Remove Favorite
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <Wait />
      )}
    </React.Fragment>
  );
}

export default MovieInfo;
