import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LandCard() {
  const [landInfo, setLandInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/magic-kingdom-data")
      .then((res) => {
        console.log(res);
        setLandInfo(res.data.lands);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid gap-5">
    {landInfo.map((land) => {
        const landImage = "./"+ land.name + ".jpg";
        return (    
      <div className="card p-3 mt-5">
        <img src={landImage} className="card-img-top" alt={land.name} />
        <div className="card-body">
          <h2 className="card-title">{land.name}</h2>
        </div>

        {land.rides.map((ride) => {
            return (
            <ul className="list-group list-group-flush mt-4">
            <li className="list-group-item"><h4>{ride.name}</h4></li>
            <li className="list-group-item">Is Open: {ride.is_open ? <i className="bi bi-check-circle-fill text-success"></i> : <i className="bi bi-x-circle-fill text-danger"></i>}</li>
            <li className="list-group-item">Wait Time: {ride.wait_time}</li>
            <li className="list-group-item">Last Updated: {ride.last_updated}</li>
            </ul>
            );
        })}
      </div>
        );
    })}
    </div>
  );
}
