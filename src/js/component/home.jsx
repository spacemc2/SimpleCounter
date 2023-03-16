import React from "react";

//include images into your bundle
import SecondsCounter from "./secondsCounter.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid">
      <SecondsCounter />
    </div>
  );
};

export default Home;
