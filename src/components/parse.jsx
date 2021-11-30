import React, { useState } from "react";
import fs from "fs";
import parser from "iptv-playlist-parser";

function Parse() {
  const [state, setState] = useState({
    Playlist: "",
  });
  console.log(state.Playlist);
  const playlist = fs.readFileSync("./playlist.m3u", { encoding: "utf-8" });
  const result = parser.parse(playlist);
  console.log(result);

  return (
    <>
      <div>
        <input
          type="playlist"
          value
          placeholder="Enter Playlist"
          onChange={(e) => setState({ Playlist: e.target.value })}
        />
      </div>
    </>
  );
}

export default Parse;
