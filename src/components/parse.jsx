import React from "react";
import fs from "fs";
import parser from "iptv-playlist-parser";

function Parse() {
  const playlist = fs.readFileSync("AU01_AUSTRALIA.m3u", { encoding: "utf-8" });
  const result = parser.parse(playlist);
  console.log("hii", result);

  return (
    <>
      <div>
        {/* <input
          type="playlist"
          value
          placeholder="Enter Playlist"
          onChange={(e) => setState({ Playlist: e.target.value })}
        /> */}
      </div>
    </>
  );
}

export default Parse;
