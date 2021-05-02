import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import covid from "../images/covid.jpg";
import "../style/header.css";

const Header = () => {
  return (
    <div>
      <div className="row my-header">
        <div className="col-2">
          <img src={covid} className="header-img" />
        </div>
        <div className="col-8">Corona Tracker</div>
        <div className="col-2">
          <img src={covid} className="header-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
