import React, { useState } from "react";
import "../style/updation-details.css";
import ShowDate from "./ShowDate";
const UpdationDetails = () => {
  return (
    <div>
      <div className="position-fixed">
        <h5 style={{ float: "left" }}>Last updated:- </h5>
        <h5>
          <ShowDate />
        </h5>
      </div>
    </div>
  );
};

export default UpdationDetails;
