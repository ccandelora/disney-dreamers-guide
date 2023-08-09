import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

export default function ParkCard(props) {
  console.log(props);
  const [landInfo, setLandInfo] = useState([]);
  const landLink = "https://www.disneydreamersguide.com/" + props.park + "-queue-times";

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
    <div className="container">
      <Helmet>
          {/* Standard metadata tags */}
          <title>{props.title}</title>
          <meta name="description" content={props.title} />
          {/* End standard metadata tags */}
          {/* Facebook tags */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content={props.title} />
          <meta property="og:url" content={landLink} />
          {/* End Facebook tags */}
          {/* Twitter tags */}
          <meta name="twitter:creator" content="Chris Candelora" />
          <meta name="twitter:card" content="article" />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content={props.title} />
          {/* End Twitter tags */}
        </Helmet>
    {landInfo.map((land) => {
        return (    
      <div className="card p-3 mt-4">
        
        <div className="card-body">
          <h1 className="card-title">{land.name}</h1>
        </div>

        {land.rides.map((ride) => {
            return (
            <ul className="list-group list-group-flush mt-4" style={{width:"550px"}}>
            <li className="list-group-item"><h2>{ride.name}</h2></li>
            <li className="list-group-item">Is Open: {ride.is_open ? <i className="bi bi-check-circle-fill text-success"></i> : <i className="bi bi-x-circle-fill text-danger"></i>}</li>
            <li className="list-group-item">Wait Time: {ride.wait_time} {ride.wait_time === 1 ? "Minute" : "Minutes"} </li>
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
