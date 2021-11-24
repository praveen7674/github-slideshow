import React, { useEffect, useState } from "react";
import Menubar from "./Menubar";
import { useHistory } from "react-router";

import axios from "axios";
import "..//css/navbar.css";
import "..//css/search.css";

function Search() {
  const retrieve = JSON.parse(localStorage.getItem("Detail"));

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const history = useHistory();

  useEffect(() => {
    async function movieStream1() {
      const API =
        retrieve.User_play_url +
        "/player_api.php?username=" +
        retrieve.Username +
        "&password=" +
        retrieve.User_password +
        "&action=get_vod_streams";
      const req = await axios.get(API);
      const res = await req.data;
      setMovies(res);
    }
    async function movieStream2() {
      const API =
        retrieve.User_play_url +
        "/player_api.php?username=" +
        retrieve.Username +
        "&password=" +
        retrieve.User_password +
        "&action=get_series";
      const req = await axios.get(API);
      const res = await req.data;
      setSeries(res);
    }
    movieStream1();
    movieStream2();
  }, [retrieve.User_password, retrieve.User_play_url, retrieve.Username]);

  const complete = [...movies, ...series];

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = complete.filter((value) => {
      return value.title
        .toLowerCase()
        .includes(searchWord.toString().toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleClick = (type, id, img) => {
    const item = { stream_type: type, Id: id, Img: img };
    if (
      localStorage.getItem("Recent") === undefined || // execute if arr is empty
      localStorage.getItem("Recent") === null
    ) {
      var Recent = [];
      Recent.push(item);
      localStorage.setItem("Recent", JSON.stringify(Recent));
    } else {
      const data = JSON.parse(localStorage.getItem("Recent"));
      data.push(item);
      localStorage.setItem("Recent", JSON.stringify(data));
    }

    if (type === "series") {
      history.push({
        pathname: "/seriesInfo",
        state: { seriesId: id },
      });
    } else {
      history.push({
        pathname: "/movie_info",
        state: { streamId: id },
      });
    }
  };

  return (
    <React.Fragment>
      <Menubar />
      <div>
        <nav class="navbar navbar">
          <form class="form-inline">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={wordEntered}
              onChange={handleFilter}
            />
          </form>
        </nav>
        <div id="search_barSpacing">
          {filteredData.length !== 0 && (
            <>
              <div className="dataResult">
                {filteredData.slice(0, 15).map((x, key) => (
                  <div className="dataItem" key={key}>
                    <h1
                      onClick={() =>
                        handleClick(
                          x.stream_type,
                          x.stream_type === "series"
                            ? x.series_id
                            : x.stream_id,
                          x.stream_type === "series" ? x.cover : x.stream_icon
                        )
                      }
                    >
                      {x.title}
                    </h1>
                  </div>
                ))}
              </div>
              <h3>Search's</h3>
              <div className="ImageResult">
                {filteredData.slice(0, 15).map((x, key) => (
                  <div className="imageItem_div" key={key}>
                    <img
                      onClick={() =>
                        handleClick(
                          x.stream_type,
                          x.stream_type === "series"
                            ? x.series_id
                            : x.stream_id,
                          x.stream_type === "series" ? x.cover : x.stream_icon
                        )
                      }
                      className="imageItem"
                      src={x.stream_type === "series" ? x.cover : x.stream_icon}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;
