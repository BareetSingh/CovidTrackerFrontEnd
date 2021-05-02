import React from "react";
import Header from "./Header";
import ShowData from "./ShowData";
import Request from "./Request";
import UpdationDetails from "./UpdationDetails";
const Home = () => {
  return (
    <div>
      <Header />
      <Request />
      <ShowData />
      <UpdationDetails />
    </div>
  );
};

export default Home;
