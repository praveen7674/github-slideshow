import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import "..//css/series_list.css";
import Menubar from "./Menubar";

function SeriesList() {
  const location = useLocation();
  const season = location.state.seasonsList;
  const episode = location.state.episodeList;
  const [selector_Id, setSelector_Id] = useState(1);
  const [hide, setHide] = useState(false);
  const selected_episode = episode[selector_Id];
  const episode_list = Object.values(selected_episode).map((x) => x);

  const series_HandleClick = (i) => {
    const id = i;
    if (id === 0) {
      setHide(false);
    } else {
      setSelector_Id(id);
      setHide(true);
    }
  };
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
      <div className="season_list_container">
        <h2 className="all_episode">{location.state.title}</h2>
        <div className="series_season_list_container">
          {Object.values(season).map((x) => (
            <div>
              <img
                className="series_season_list_img"
                src={x.cover}
                key={x.season_number}
                onClick={() => series_HandleClick(x.season_number)}
                alt=""
              />
              <h6 id="series-seasons">{x.name}</h6>
            </div>
          ))}
        </div>
        {hide ? (
          <>
            <h1 className="all_episode">Season {selector_Id}</h1>
            <h1 className="all_episode_list">Episodes</h1>

            <div className="all_episode_list_container">
              {Object.values(episode_list).map((x) => (
                <div>
                  <img
                    className="all_episode_img_container"
                    src={x.info.movie_image}
                    onClick={() => episode_HandleClick(x.id)}
                    key={x.id}
                    alt=""
                  />
                  <h5 id="all_episode_detail">
                    E-{x.episode_num} {x.title}
                  </h5>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </React.Fragment>
  );
}

export default SeriesList;
