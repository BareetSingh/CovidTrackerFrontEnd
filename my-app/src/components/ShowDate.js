import React, { useState, useEffect } from "react";

export const ShowDate = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      {/* <p> Time : {date.toLocaleTimeString()}</p> */}
      <p> Date : {date.toLocaleDateString() + " 00:00:00"}</p>
    </div>
  );
};

export default ShowDate;
