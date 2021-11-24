import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/LiveTv.css";
import Player from "react-player";
import Menubar from "./Menubar";
import Wait from "./Wait";
import Navbar from "..//components/Navbar";
import BackButton from "./BackButton";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { useLocation } from "react-router";

const LiveTv = () => {
  const ret = JSON.parse(localStorage.getItem("Detail"));

  const [allChannel, setAllChannel] = useState([]);
  const [category, setCategory] = useState([]);
  const [channel, setChannel] = useState([]);
  const [truth, setTruth] = useState({
    Wait: false,
  });
  const [state, setState] = useState(true);
  const [categories, setCategories] = useState("23");
  const [channels, setChannels] = useState(3043214);
  const [url, setUrl] = useState(
    ret.User_play_url +
      "/live/" +
      ret.Username +
      "/" +
      ret.User_password +
      "/" +
      3043214 +
      ".m3u8"
  );
  const location = useLocation();
  setCategories(location.state.category_id);
  setChannels(location.state.stream_id);

  useEffect(() => {
    const handleChannelLogic = async () => {
      const API =
        ret.User_play_url +
        "/player_api.php?password=" +
        ret.User_password +
        "&username=" +
        ret.Username +
        "&action=get_live_categories"; // LIVE TV  CATEGORY
      const resp = await axios.get(API);
      const com_category = await resp.data;
      setCategory(com_category);

      const API2 =
        ret.User_play_url +
        "/player_api.php?password=" +
        ret.User_password +
        "&username=" +
        ret.Username +
        "&action=get_live_streams&password=p7au3w"; // ALL LIVE TV CHANNEL
      const resp2 = await axios.get(API2);
      const complete_channels = await resp2.data;
      setAllChannel(complete_channels);
      const sorted = complete_channels.filter(
        (c) => c.category_id === com_category[0].category_id
      );
      setChannel(sorted);
      setTruth({ Wait: true });
    };
    handleChannelLogic();
  }, [ret.User_password, ret.User_play_url, ret.Username]);

  async function handleClick(i, a) {
    const myChannel = allChannel.filter((c) => c.category_id === i.category_id);
    setChannel(myChannel);
    setCategories(a);
    const selected_channel = myChannel.map((x) => x.stream_id);
    const sel_chan = selected_channel[0];
    setChannels(sel_chan);
    setUrl(
      ret.User_play_url +
        "/live/" +
        ret.Username +
        "/" +
        ret.User_password +
        "/" +
        sel_chan +
        ".m3u8"
    );
  }

  const tvHandleClick = (i) => {
    const Url =
      ret.User_play_url +
      "/live/" +
      ret.Username +
      "/" +
      ret.User_password +
      "/" +
      i +
      ".m3u8";
    setUrl(Url);
    setChannels(i);
  };

  const addFavorite = (name, LiveTv_id, icon, category_id) => {
    setState(false);
    const item = { name, LiveTv_id, icon, category_id };

    if (
      localStorage.getItem("favTv") === undefined || // execute if arr is empty
      localStorage.getItem("favTv") === null
    ) {
      var favTv = [];
      favTv.push(item);
      localStorage.setItem("favTv", JSON.stringify(favTv));
    } else {
      const data = JSON.parse(localStorage.getItem("favTv"));
      data.push(item);
      localStorage.setItem("favTv", JSON.stringify(data));
    }
  };

  const removeFavorite = (LiveTv_id) => {
    setState(true);
    const data = JSON.parse(localStorage.getItem("favTv"));
    var index = data.map((x) => {
      return x.LiveTv_id;
    });
    const id = index.filter((x) => x === LiveTv_id);

    const updatedItem = data.map((x) => x.LiveTv_id === id);
    data.pop(updatedItem);
    localStorage.setItem("favTv", JSON.stringify(data));
  };

  return (
    <React.Fragment>
      <Navbar title="LiveTv" />
      <Menubar />
      {truth.Wait ? (
        <div className="Livetv_screen">
          <div className="boxing">
            <BackButton />
            <div className="categaries">
              <h1>Categories</h1>
              <div className="categaries_list">
                {category.map((x) => (
                  <div
                    onClick={() => handleClick(x, x.category_id)}
                    className={
                      categories === x.category_id ? "active-color" : "list_tv"
                    }
                    key={x.category_name}
                    value={x.category_id}
                  >
                    <h3 id="categoryList_name">{x.category_name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="channels">
              <h1>Channels</h1>
              <div className="channel_list">
                {channel.map((x) => (
                  <div
                    onClick={() => tvHandleClick(x.stream_id)}
                    className={
                      channels === x.stream_id ? "active-color" : "list_channel"
                    }
                    key={x.stream_id}
                  >
                    {x.stream_id}
                    <img id="channel_icon" src={x.stream_icon} alt="" />
                    <h3 id="channel_name">{x.name}</h3>
                    <span id="channel-fav-icon">
                      {state ? (
                        <GrFavorite
                          onClick={() =>
                            addFavorite(
                              x.name,
                              x.stream_id,
                              x.stream_icon,
                              x.category_id
                            )
                          }
                          id={
                            channels === x.stream_id
                              ? "favIcon_unselected"
                              : "favIcon_selected"
                          }
                        />
                      ) : (
                        <MdFavorite
                          onClick={() => removeFavorite(x.stream_id)}
                          id={
                            channels === x.stream_id
                              ? "favIcon_selected"
                              : "favIcon_unselected"
                          }
                        />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div id="player">
              <Player
                className="react-player"
                url={url}
                width="100%"
                height="50%"
                controls={true}
                playing={true}
              />
            </div>
          </div>
        </div>
      ) : (
        <Wait />
      )}
    </React.Fragment>
  );
};

export default LiveTv;
