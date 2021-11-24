import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Menubar from "./Menubar";
import SeriesRow from "./seriesRow";
import Navbar from "./Navbar";
import BackButton from "./BackButton";

function Movies() {
  const ret = JSON.parse(localStorage.getItem("Detail"));
  const [series_category_list, setSeries_Category_List] = useState([]);

  useEffect(() => {
    const Series_category = async () => {
      const API2 =
        ret.User_play_url +
        "/player_api.php?password=" +
        ret.User_password +
        "&username=" +
        ret.Username +
        "&action=get_series_categories"; // Movies List by Category e.g. Action ,Drama , Romance
      const req2 = await axios.get(API2);
      const res2 = await req2.data;
      setSeries_Category_List(res2);
    };
    Series_category();
  }, [ret.User_password, ret.User_play_url, ret.Username]);

  return (
    <React.Fragment>
      <Menubar />
      <Navbar title="Series" />
      <div id="btn">
        <BackButton />
      </div>
      {series_category_list.map((x) => (
        <SeriesRow
          series_name={x.category_name}
          ids={x.category_id}
          key={x.category_id}
        />
      ))}
    </React.Fragment>
  );
}

export default Movies;
