import axios from "axios";
import React, { useState } from "react";
import "../css/SignIn.css";
import Home from "./Home";

function SignIn() {
  const [User, setUser] = useState(" ");
  const [password, setpassword] = useState("");
  const [playlist, setplaylist] = useState("");
  const [play_url, setplay_url] = useState("");
  const [Data, setData] = useState([]);
  const [Active, setActive] = useState("");

  const User_Detail = {
    Username: User,
    User_password: password,
    User_play_url: play_url,
  };

  localStorage.setItem("Detail", JSON.stringify(User_Detail));

  async function login() {
    const request = await axios.get(
      play_url +
        "/player_api.php" +
        "?username=" +
        User +
        "&password=" +
        password
    );
    const body = await request.data;
    setData(body.user_info);
    const active_user = Data.status;
    setActive(active_user);
  }
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
                  onChange={(e) => setplaylist(e.target.value)}
                  type="text"
                  placeholder="Enter Playlist"
                  value={playlist}
                />
                <input
                  className="Username"
                  onChange={(e) => setUser(e.target.value)}
                  type="name"
                  value={User}
                  placeholder="Enter Username"
                  required
                />
                <input
                  className="Password"
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  required
                />
                <input
                  className="Input_url"
                  onChange={(e) => setplay_url(e.target.value)}
                  type="url"
                  value={play_url}
                  placeholder="Enter Playlist Url"
                  required
                />
                <span className="Forget">
                  <b>Forget Password</b>
                </span>
                <button onClick={login} className="Login_btn" type="submit">
                  Login
                </button>
                <input className="checkbox" type="checkbox" required />
                <label className="cb_text" required>
                  I have read and agree
                  <span className="Service"> Term of Service </span>
                </label>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SignIn;
