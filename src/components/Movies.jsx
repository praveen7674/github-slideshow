import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Row from "./row";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import BackButton from "./BackButton";

function Movies() {
  const ret = JSON.parse(localStorage.getItem("Detail"));

  const [movies_category_list, setMovies_Category_List] = useState([]);

  useEffect(() => {
    const Top_Movie_category = async () => {
      const API2 =
        ret.User_play_url +
        "/player_api.php?password=" +
        ret.User_password +
        "&username=" +
        ret.Username +
        "&action=get_vod_categories"; // Movies List by Category e.g. Action ,Drama , Romance
      const req2 = await axios.get(API2);
      const res2 = await req2.data;
      setMovies_Category_List(res2);
    };
    Top_Movie_category();
  }, [ret.User_password, ret.User_play_url, ret.Username]);

  return (
    <React.Fragment>
      <Navbar title="Movies" />
      <Menubar />
      <div id="btn">
        <BackButton />
      </div>
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
