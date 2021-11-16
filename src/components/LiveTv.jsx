import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/LiveTv.css";
import Player from "react-player";
import Menubar from "./Menubar";
import Wait from "./Wait";

const LiveTv = () => {
  const [allChannel, setAllChannel] = useState([]);
  const [category, setCategory] = useState([]);
  const [channel, setChannel] = useState([]);
  const [wait, setWait] = useState(false);
  const [categorys, setCategorys] = useState("23");
  const [channels, setChannels] = useState(3043214);

  useEffect(() => {
    handleChannelLogic();
  }, []);

  const handleChannelLogic = async () => {
    const API =
      "http://xtremity.tv:2052/player_api.php?password=p7au3w&username=qyf9ax&action=get_live_categories"; // LIVE TV  CATEGORY
    const resp = await axios.get(API);
    const com_category = await resp.data;
    setCategory(com_category);

    const API2 =
      "http://xtremity.tv:2052/player_api.php?username=qyf9ax&action=get_live_streams&password=p7au3w"; // ALL LIVE TV CHANNEL
    const resp2 = await axios.get(API2);
    const complete_channels = await resp2.data;
    setAllChannel(complete_channels);
    const sorted = complete_channels.filter(
      (c) => c.category_id === com_category[0].category_id
    );
    setChannel(sorted);
    setWait(true);
  };

  const [state, setState] = useState({
    URL: "",
  });

  async function handleClick(i, a) {
    const myChannel = allChannel.filter((c) => c.category_id === i.category_id);
    setChannel(myChannel);
    setCategorys(a);
  }

  const tvHandleClick = (i) => {
    const Url = "http://xtremity.tv:2052/live/qyf9ax/p7au3w/" + i + ".m3u8";
    setState({ URL: Url });
    setChannels(i);
  };

  return (
    <React.Fragment>
      <Menubar />
      {wait ? (
        <div className="Livetv_screen">
          <div className="boxing">
            <div className="categaries">
              <h1>Categories</h1>
              <div className="categaries_list">
                {category.map((x) => (
                  <div
                    onClick={() => handleClick(x, x.category_id)}
                    className={
                      categorys === x.category_id ? "active-color" : "list_tv"
                    }
                    key={x.category_name}
                    value={x.category_id}
                  >
                    <h3>{x.category_name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="channels">
              <h1>Channels</h1>
              <div className="channel_list">
                {channel.map((channel_l) => (
                  <div
                    onClick={() => tvHandleClick(channel_l.stream_id)}
                    className={
                      channels === channel_l.stream_id
                        ? "active-color"
                        : "list_channel"
                    }
                    key={channel_l.stream_id}
                  >
                    <h3>{channel_l.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div id="player">
              <Player
                className="react-player"
                url={state.URL}
                width="100%"
                height="50%"
                controls={true}
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
