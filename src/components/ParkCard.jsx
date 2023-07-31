import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ParkCard(props) {
  const [landInfo, setLandInfo] = useState([]);

  useEffect(() => {
    const endpoint = "https://oyster-app-sus4c.ondigitalocean.app/"+ props.park + "-data";
    axios
      .get(endpoint)
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
        return (    
      <div className="card p-3 mt-5">
        
        <div className="card-body">
          <h1 className="card-title">{land.name}</h1>
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
