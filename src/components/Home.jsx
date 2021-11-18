import React from "react";
import Menubar from "./Menubar";
import "..//css/home.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <React.Fragment>
      <Navbar title="Home" />
      <Menubar />
      <div className="home_alignment">
        <Link to="/LiveTv">
          <img className="home_LiveTv1" alt="" />{" "}
        </Link>
        <Link to="/Movies">
          <img className="home_LiveTv2" alt="" />
        </Link>
        <Link to="LiveTv">
          <img className="home_LiveTv3" alt="" />
        </Link>
        <Link to="/Series">
          <img className="home_LiveTv4" alt="" />
        </Link>
        <Link to="/Setting">
          <img className="home_LiveTv5" alt="" />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
