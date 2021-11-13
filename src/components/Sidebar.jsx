import React from "react";
import "../css/Sidebar.css";
import { useState } from "react";
import Menubar from "./Menubar";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaHistory, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar() {
  const [click, setClick] = useState(false);

  return (
    <>
      {click ? (
        <Menubar />
      ) : (
        <div className="sidebar_menu">
          <nav className="sidebar_css">
            <div className="sidebar_menu_icon">
              <GiHamburgerMenu onClick={() => setClick(true)} />
            </div>
            <ul>
              {/* <FaSearch className="sidebar_searchIcon" /> */}
              <input
                className="sidebar_search"
                type="text"
                placeholder="Search"
              ></input>
              <Link to="/Home">
                <div className="sidebar_icon_home"></div>
                <li className="sidebar_link_home">Home</li>
                <div className="back_img"></div>
              </Link>
              <Link to="/LiveTv">
                <div className="icon_live_tv2"></div>
                <li className="link_live_tv">LiveTv</li>
              </Link>
              <Link to="/Movies">
                <div className="icon_movie2"></div>
                <li className="link_movies">Movies</li>
              </Link>
              <Link to="/Series">
                <div className="icon_series2"></div>
                <li className="link_series">Series</li>
              </Link>
              <Link to="/Favorite">
                <MdOutlineFavoriteBorder className="icon_fav" />
                <li className="link_fav">Favorite</li>
              </Link>
              <Link to="/Recent">
                <FaHistory className="icon_rec" />
                <li className="link_rec">Recent</li>
              </Link>
              <Link to="/Setting">
                <div className="icon_set"></div>
                <li className="link_set">Settings</li>
              </Link>
              <Link to="/">
                <RiLogoutCircleRLine className="icon_log_out2" />
                <li className="link_log_out">SignIn</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Sidebar;
