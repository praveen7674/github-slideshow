import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import React from "react";
import axios from "axios";
import "..//css/seriesrow.css";
import Wait from "./Wait";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Carousel } from "@trendyol-js/react-carousel";

function SeriesRow(props) {
  const ret = JSON.parse(localStorage.getItem("Detail"));

  const [series_list, setSeries_List] = useState([]);
  const [wait, setWait] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function Series_List() {
      const API =
        ret.User_play_url +
        "/player_api.php?password=" +
        ret.User_password +
        "&username=" +
        ret.Username +
        "&action=get_series";                             // All series LIst
      const req = await axios.get(API);
      const res = await req.data;
      const id = props.ids;

      const my_series = res.filter((series) => series.category_id === id);
      setSeries_List(my_series);
      setWait(true);
    }

    Series_List();
  }, [props.ids, ret.User_password, ret.User_play_url, ret.Username]);

  const handleClick = (i) => {
    history.push({
      pathname: "/seriesInfo",
      state: { seriesId: i },
    });
  };

  return (
    <React.Fragment>
      {wait ? (
        <div className="seriesrow_container">
          <h3>{props.series_name}</h3>
          <div className="series_container">
            <Carousel
              show={6}
              slide={4}
              swiping={true}
              infinite={false}
              rightArrow={<BsFillArrowRightCircleFill />}
              leftArrow={<BsFillArrowLeftCircleFill />}
            >
              {series_list.map((movie) => (
                <div className="image_container">
                  <img
                    src={movie.cover}
                    alt=""
                    className="series_image"
                    key={movie.series_id}
                    onClick={() => handleClick(movie.series_id)}
                  />
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

export default SeriesRow;
