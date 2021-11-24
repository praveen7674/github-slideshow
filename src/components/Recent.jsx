import React from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import "..//css/search.css";
import { GiCancel } from "react-icons/gi";

function Recent() {
  const data1 = JSON.parse(localStorage.getItem("Recent"));

  const removeRecent = (i) => {
    const data = JSON.parse(localStorage.getItem("Recent"));
    var index = data.map((x) => {
      return x.Id;
    });
    const id = index.filter((x) => x === i);
    const updatedItem = data.map((x) => x.Id === id);
    data.pop(updatedItem);
    localStorage.setItem("Recent", JSON.stringify(data));
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <Menubar />
      <Navbar title="Recent" />
      <div className="ImageResult2">
        {data1.map((x) => (
          <div className="imageItem_div2" key={x.Id}>
            <img className="imageItem2" src={x.Img} alt="" />
            <GiCancel
              className="recent_Cancel"
              onClick={() => removeRecent(x.Id)}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Recent;
