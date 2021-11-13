import React from "react";
import "..//css/episode_list.css";
import { useLocation } from "react-router";
import Menubar from "./Menubar";
import { useHistory } from "react-router";

function EpisodeList() {
  const location = useLocation();
  const episode = location.state.episodeList;
  const title = location.state.title;
  const history = useHistory();

  const episode_HandleClick = (i) => {
    const id = i;
    history.push({
      pathname: "/play_episode",
      state: { episodeId: id },
    });
  };
  return (
    <React.Fragment>
      <Menubar />
      <div className="all_episodes_container">
        <h1 className="all_episode">{title}</h1>
        <h1 className="all_episode_list">Episodes</h1>
        <div className="all_episode_list_container">
          {Object.values(episode).map((x) =>
            x.map((x) => (
              <div>
                <img
                  className="all_episode_img_container"
                  src={x.info.movie_image}
                  key={x.id}
                  onClick={() => episode_HandleClick(x.id)}
                  alt=""
                />
                <h5 id="all_episode_detail">
                  E-{x.episode_num} {x.title}
                </h5>
              </div>
            ))
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
export default EpisodeList;
