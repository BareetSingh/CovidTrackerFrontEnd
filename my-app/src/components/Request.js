import React from "react";
import "../style/request.css";
const Request = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col request" role="alert">
            <h2>Stay Safe, Stay Live</h2>
            <marquee className="my-marquee">
              <h5>
                --Disinfect surface around your home and work --Wash your hands
                for at least 20 seconds --Sneeze or Cough? Cover your mouth
              </h5>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
