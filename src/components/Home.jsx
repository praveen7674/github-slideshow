import React from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Menubar />
      <Navbar head="Home" />
      <h2>Home</h2>
    </div>
  );
};

export default Home;
