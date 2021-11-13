import React from "react";
import Menubar from "./Menubar";
import { Card } from "react-bootstrap";
const Home = () => {
  return (
    <React.Fragment>
      <Menubar />
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="..//Assets/.live.png" />
        </Card>
      </div>
      <h2>Home</h2>
    </React.Fragment>
  );
};

export default Home;
