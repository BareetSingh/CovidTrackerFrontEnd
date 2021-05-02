import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/show-data.css";
import axios from "axios";
const ShowData = () => {
  useEffect(() => {
    getAllBranchesFromServer();
  }, []);

  const [data, setData] = useState([]);

  //function to call server
  const getAllBranchesFromServer = (param) => {
    axios
      .get(`http://localhost:8080/data`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Country/Region</th>
            <th scope="col" style={{ width: "20%" }}>
              Province/State
            </th>
            <th scope="col">Latest Cases</th>
            <th scope="col">Total Cases</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr>
              <td id={e.country}>{e.country}</td>
              <td id={e.country}>{e.state}</td>
              <td id={e.country}>{e.latestCases}</td>
              <td id={e.country}>{e.latestTotalCases}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
