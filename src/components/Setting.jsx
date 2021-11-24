import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import Menubar from "./Menubar";
import "..//css/setting.css";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import BackButton from "./BackButton";

function Setting() {
  const retrieve = JSON.parse(localStorage.getItem("Detail"));

  const [data, setData] = useState([]);
  const [truth, setTruth] = useState(false);
  const [lang, setLang] = useState("");

  useEffect(() => {
    const userDetail = async () => {
      const API =
        retrieve.User_play_url +
        "/player_api.php?username=" +
        retrieve.Username +
        "&password=" +
        retrieve.User_password;
      console.log(API);
      const req = await axios.get(API);
      const res = await req.data;
      
      const info_detail = res.user_info;
      setData(info_detail);
    };
    userDetail();
  }, [retrieve.User_password, retrieve.User_play_url, retrieve.Username]);

  const create = data.created_at;
  console.log(create);
  let createdAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(create);
  const expiry_date = data.exp_date;
  let expiryAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(expiry_date);

  const handleClick = (i) => {
    if (i === "user_info") {
      setTruth(false);
    } else {
      setTruth(true);
    }
  };

  const { t, i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(lang);
  };

  return (
    <React.Fragment>
      <Suspense fallback="loading">
        <Menubar />
        <Navbar title="Setting" />
        <div id="setting_true_btn">
          <BackButton />
          <button
            type="button"
            value="user_info"
            onClick={(e) => handleClick(e.target.value)}
          >
            {t("user_info_btn")}
          </button>
          <button
            type="button"
            value="change_lang"
            onClick={(e) => handleClick(e.target.value)}
          >
            {t("change_lang_btn")}
          </button>
        </div>
        {truth ? (
          <>
            <div id="heading_change_language">
              <h1>{t("change_lang_btn")}</h1>
              <div id="user_choose_language">
                <div>
                  <label htmlFor="English">English</label>
                  <input
                    type="radio"
                    id="English"
                    name="language"
                    value="english"
                    onChange={(e) => setLang(e.target.value)}
                  />
                  <label htmlFor="Hindi">Hindi</label>
                  <input
                    type="radio"
                    id="Hindi"
                    name="language"
                    value="hindi"
                    onChange={(e) => setLang(e.target.value)}
                  />
                  <label htmlFor="Arabic">Arabic</label>
                  <input
                    type="radio"
                    id="Arabic"
                    name="language"
                    value="arabic"
                    onChange={(e) => setLang(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="French">French</label>
                  <input
                    type="radio"
                    id="French"
                    name="language"
                    value="french"
                    onChange={(e) => setLang(e.target.value)}
                  />
                  <label htmlFor="Russian">Russian</label>
                  <input
                    type="radio"
                    id="Russian"
                    name="language"
                    value="russian"
                    onChange={(e) => setLang(e.target.value)}
                  />
                  <label htmlFor="Spanish">Spanish</label>
                  <input
                    type="radio"
                    id="Spanish"
                    name="language"
                    value="spanish"
                    onChange={(e) => setLang(e.target.value)}
                  />
                </div>
                <div id="lang_change_btn">
                  <button type="submit" onClick={() => changeLang()}>
                    {t("submit")}
                  </button>
                  <button type="button" onClick={() => setTruth(false)}>
                    {t("cancel")}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="container_user_setting">
            <div id="user_setting">
              {
                <>
                  <h1>{t("acc_info")}</h1>
                  <div>
                    <h4>
                      {t("acc_name")}
                      <span>{data.username}</span>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      {t("acc_status")}
                      <span>{data.status}</span>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      {t("is_trail")}
                      <span>{data.is_trial}</span>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      {t("act_conn")}
                      <span>{data.active_cons}</span>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      {t("m_conn")}
                      <span>{data.max_connections}</span>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      {t("create_at")}
                      <span>{createdAt}</span>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      {t("ex_dt")}
                      <span>{expiryAt}</span>
                    </h4>
                  </div>
                </>
              }
            </div>
          </div>
        )}
      </Suspense>
    </React.Fragment>
  );
}

export default Setting;
