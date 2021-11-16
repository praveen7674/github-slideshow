import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import React from "react";
import axios from "axios";
import "..//css/Row.css";
import Wait from "./Wait";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Carousel } from "@trendyol-js/react-carousel";

function Row(props) {
  const [movies_list, setMovies_List] = useState([]);
  const [wait, setWait] = useState(false);

  const history = useHistory();
  useEffect(() => {
    async function All_Movies_List() {
      const API =
        "http://xtremity.tv:2052/player_api.php?username=qyf9ax&password=p7au3w&action=get_vod_streams"; // All Movies LIst
      const req = await axios.get(API);
      const res = await req.data;
      const id = props.ids;
      const my_movie = res.filter((movie) => movie.category_id === id);
      setMovies_List(my_movie);
      setWait(true);
    }

    All_Movies_List();
  }, [props.ids]);

  const handleClick = (i) => {
    history.push({
      pathname: "/movie_info",
      state: { streamId: i },
    });
  };
  return (
    <React.Fragment>
      {wait ? (
        <div className="row_container">
          <h3>{props.movie_name}</h3>
          <div className="movie_container">
            <Carousel
              show={7}
              slide={4}
              swiping={true}
              infinite={false}
              rightArrow={<BsFillArrowRightCircleFill />}
              leftArrow={<BsFillArrowLeftCircleFill />}
            >
              {movies_list.map((movie) => (
                <div className="image_container">
                  <img
                    src={movie.stream_icon}
                    alt=""
                    className="movie_image"
                    key={movie.stream_id}
                    onClick={() => handleClick(movie.stream_id)}
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

export default Row;
