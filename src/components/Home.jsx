import React, { useEffect, useState } from "react";
import Menubar from "./Menubar";
import "..//css/home.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Wait from "./Wait";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Carousel } from "@trendyol-js/react-carousel";

function Home() {
  const ret = JSON.parse(localStorage.getItem("Detail"));
  const [state, setState] = useState({
    Series: [],
  });
  const [wait, setWait] = useState(false);

  useEffect(() => {
    async function seriesStream() {
      const API =
        ret.User_play_url +
        "/player_api.php?password=" +
        ret.User_password +
        "&username=" +
        ret.Username +
        "&action=get_series";

      const req = await axios.get(API);
      const res = await req.data;
      setState({ Series: res });
      setWait(true);
    }
    seriesStream();
  }, [ret.User_password, ret.User_play_url, ret.Username]);

  return (
    <React.Fragment>
      <Navbar title="Home" />
      <Menubar />
      {wait ? (
        <div className="home_align2">
          <div className="home_alignment">
            <Link to="/LiveTv">
              <img className="home_LiveTv1" alt="" />{" "}
            </Link>
            <Link to="/Movies">
              <img className="home_LiveTv2" alt="" />
            </Link>
            <Link to="/Search">
              <img className="home_LiveTv3" alt="" />
            </Link>
            <Link to="/Series">
              <img className="home_LiveTv4" alt="" />
            </Link>
            <Link to="/Setting">
              <img className="home_LiveTv5" alt="" />
            </Link>
          </div>
          <div className="home_series_scroll">
            <h1>Trending Show</h1>
            <Carousel
              show={6}
              slide={4}
              swiping={true}
              infinite={false}
              rightArrow={<BsFillArrowRightCircleFill />}
              leftArrow={<BsFillArrowLeftCircleFill />}
            >
              {state.Series.map((x) => (
                <div key={x.series_id}>
                  <img
                    className="Series_home"
                    key={x.series_id}
                    src={x.cover}
                    alt=""
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

export default Home;
