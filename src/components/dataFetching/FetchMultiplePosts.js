import React, {useState, useEffect} from 'react';
import axios from 'axios';



export default function FetchMultiplePosts() {
    const [landInfo, setLandInfo] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/getData")
            .then(res => {
                setLandInfo(res.data.lands);
            })
            .catch(err => {
                console.log(err);
            })
     }, []);

  return (
    <div>
      
      {landInfo.map((land) => {
        return (
            <ul key={land.id}>
                <li>{land.name}</li>
                {land.rides.map((ride) => {
                    return (
                        <ul key={ride.id}>
                            <li>{ride.name}</li>
                            <li>Is Open: {ride.is_open}</li>
                            <li>Wait Time:{ride.wait_time}</li>
                            <li>Last Updated: {ride.last_updated}</li>       
                        </ul>
                    )
                }
                )}
            </ul>   
        )})}
    </div>
  )
}
