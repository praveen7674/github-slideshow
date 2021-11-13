import { useState, useEffect } from "react";
import React from "react";
import "..//css/movies.css";
import axios from "axios";
import Row from "./row";
import Menubar from "./Menubar";
import Wait from "./Wait";

function Movies() {
  const [movies_category_list, setMovies_Category_List] = useState([]);

  const Top_Movie_category = async () => {
    const API2 =
      "http://xtremity.tv:2052/player_api.php?username=qyf9ax&password=p7au3w&action=get_vod_categories"; // Movies List by Category e.g. Action ,Drama , Romance
    const req2 = await axios.get(API2);
    const res2 = await req2.data;
    setMovies_Category_List(res2);
  };

  useEffect(() => {
    Top_Movie_category();
  }, []);

  return (
    <React.Fragment>
      <Menubar />
      {movies_category_list.map((x) => (
        <Row
          movie_name={x.category_name}
          ids={x.category_id}
          key={x.category_id}
        />
      ))}
    </React.Fragment>
  );
}

export default Movies;
