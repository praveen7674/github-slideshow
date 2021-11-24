import React from "react";
import { Link } from "react-router-dom";
import "../css/menubar.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useHistory } from "react-router";

function Menubar() {
  const [changeMenu, setChangeMenu] = useState(false);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("Detail");
    history.push("/");
  };

  return (
    <>
      <div className="menubar">
        {changeMenu ? (
          <Sidebar />
        ) : (
          <>
            <nav className="nav_menu">
              <h1 className="menu_icon">
                <GiHamburgerMenu onClick={() => setChangeMenu(true)} />
              </h1>
              <Link to="/Home">
                <div className="menu_logo"></div>
              </Link>
              <Link to="/Search">
                <div className="search_menu"></div>
              </Link>
              <Link to="/Home">
                <div className="icon_home"></div>
              </Link>
              <Link to="/LiveTv">
                <div className="icon_live_tv"></div>
              </Link>
              <Link to="/Movies">
                <div className="icon_movie"></div>
              </Link>
              <Link to="/Series">
                <div className="icon_series"></div>
              </Link>
              <Link to="/favorite">
                <div className="icon_favorite">
                  <MdOutlineFavoriteBorder />
                </div>
              </Link>
              <Link to="/Recent">
                <div className="icon_recent">
                  <FaHistory />
                </div>
              </Link>
              <Link to="/Setting">
                <div className="icon_setting"></div>
              </Link>
              <Link to="/">
                <div onClick={() => logout()} className="icon_log_out">
                  <RiLogoutCircleRLine />
                </div>
              </Link>
            </nav>
          </>
        )}
      </div>
    </>
  );
}

export default Menubar;
