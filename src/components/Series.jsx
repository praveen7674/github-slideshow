import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Menubar from "./Menubar";
import SeriesRow from "./seriesRow";

function Movies() {
  const [series_category_list, setSeries_Category_List] = useState([]);

  const Series_category = async () => {
    const API2 =
      "http://xtremity.tv:2052/player_api.php?username=qyf9ax&password=p7au3w&action=get_series_categories"; // Movies List by Category e.g. Action ,Drama , Romance
    const req2 = await axios.get(API2);
    const res2 = await req2.data;
    setSeries_Category_List(res2);
  };

  useEffect(() => {
    Series_category();
  }, []);

  return (
    <React.Fragment>
      <Menubar />
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
