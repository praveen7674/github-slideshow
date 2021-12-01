import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/SignIn.css";
import { LogIn } from "..//features/user/userSlice";
import Home from "./Home";

function SignIn() {
  const [username, setUserName] = useState(" ");
  const [password, setPassword] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [play_url, setPlay_url] = useState("");
  const [Data, setData] = useState([]);
  const [Active, setActive] = useState("");

  const User_Detail = {
    Username: username,
    User_password: password,
    User_play_url: play_url,
  };

  const dispatch = useDispatch();

  localStorage.setItem("Detail", JSON.stringify(User_Detail));

  const login = async () => {
    const request = await axios.get(
      play_url +
        "/player_api.php" +
        "?username=" +
        username +
        "&password=" +
        password
    );
    const body = await request.data;
    setData(body.user_info);
    const active_user = Data.status;
    setActive(active_user);
    dispatch(LogIn({ playlist, username, password, play_url }));
  };

  return (
    <div>
      {Active === "Active" ? (
        <Home />
      ) : (
        <>
          <div className="Screen_section">
            <div className="image_section">
              <div className="imgSingh"></div>
            </div>
            <div className="form_section">
              <div className="logIn_logo"></div>
              <form>
                <input
                  className="Playlist_name"
                  onChange={(e) => setPlaylist(e.target.value)}
                  type="text"
                  placeholder="Enter Playlist"
                  value={playlist}
                />
                <input
                  className="Username"
                  onChange={(e) => setUserName(e.target.value)}
                  type="name"
                  value={username}
                  placeholder="Enter Username"
                  required
                />
                <input
                  className="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  required
                />
                <input
                  className="Input_url"
                  onChange={(e) => setPlay_url(e.target.value)}
                  type="url"
                  value={play_url}
                  placeholder="Enter Playlist Url"
                  required
                />
                <span className="Forget">
                  <b>Forget Password</b>
                </span>
                <input className="checkbox" type="checkbox" required />
                <label className="cb_text" required>
                  I have read and agree
                  <span className="Service"> Term of Service </span>
                </label>
                <button
                  className="Login_btn"
                  type="submit"
                  onClick={() => login()}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SignIn;
