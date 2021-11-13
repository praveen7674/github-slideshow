import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import Menubar from "./Menubar";
import axios from "axios";
import "..//css/series_info.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Carousel } from "@trendyol-js/react-carousel";

import Wait from "./Wait";
function SeriesInfo() {
  const location = useLocation();
  const series_id = location.state.seriesId;
  const [seriesInfo, setSeriesInfo] = useState([]);
  const [seriesSeasons, setSeriesSeasons] = useState([]);
  const [seriesEpisodes, setSeriesEpisodes] = useState([]);
  const [wait, setWait] = useState(false);

  const history = useHistory();
  const name = seriesInfo.title;

  useEffect(() => {
    async function seriesStream() {
      const API =
        "http://xtremity.tv:2052/player_api.php?username=qyf9ax&password=p7au3w&action=get_series_info&series_id=" +
        series_id;
      const req = await axios.get(API);
      const res = await req.data;
      const seasons = res.seasons;
      const episodes = res.episodes;
      const infos = res.info;
      setSeriesEpisodes(episodes);
      setSeriesInfo(infos);
      setSeriesSeasons(seasons);
      setWait(true);
    }

    seriesStream();
  }, [history, name, seriesEpisodes, seriesSeasons, series_id]);

  const Series_HandleClick = () => {
    history.push({
      pathname: "/seriesList",
      state: {
        seasonsList: seriesSeasons,
        episodeList: seriesEpisodes,
        title: name,
      },
    });
  };
  const Series_HandleClick2 = () => {
    history.push({
      pathname: "/episodeList",
      state: { episodeList: seriesEpisodes, title: name },
    });
  };
  const Series_HandleClick3 = () => {
    history.push({
      pathname: "/seriesList",
      state: {
        seasonsList: seriesSeasons,
        episodeList: seriesEpisodes,
        title: name,
      },
    });
  };

  return (
    <React.Fragment>
      <Menubar />
      {wait ? (
        <div className="series_info">
          <div className="series_info_container">
            <img
              className="series_info_poster"
              key={seriesInfo.name}
              src={seriesInfo.cover}
              alt=""
            />
            <div className="series_com_detail">
              <span className="series_cast">Cast: {seriesInfo.cast}</span>
              <span className="series_name">{seriesInfo.title}</span>
              <h5 className="seriesDetail">{seriesInfo.release_date}</h5>
              <span className="series_description">{seriesInfo.plot}</span>
              <button
                className="series_play"
                type="button"
                key={seriesInfo.name}
                onClick={() => Series_HandleClick()}
              >
                Seasons
              </button>
              <button
                onClick={() => Series_HandleClick2()}
                className="series_episodes"
                type="button"
                key={seriesInfo.category_id}
              >
                Episodes
              </button>
              <button className="series_add_Fav" type="button">
                Add To Favorite
              </button>
            </div>
          </div>
          <h2 className="seasons4">Seasons</h2>
          <div className="series_info_season">
            <Carousel
              show={5}
              slide={3}
              swiping={true}
              infinite={false}
              rightArrow={<BsFillArrowRightCircleFill />}
              leftArrow={<BsFillArrowLeftCircleFill />}
            >
              {seriesSeasons.map((x) => (
                <div className="series_seasons_container">
                  <img
                    onClick={() => Series_HandleClick3()}
                    className="series_season_img"
                    src={x.cover}
                    alt=""
                  />
                  <h6 className="series_season_name">{x.name}</h6>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <Wait />
      )}
    </React.Fragment>
  );
}

export default SeriesInfo;
