import React, { useState, useEffect } from 'react';
import "./Banner.css";

const Banner = () => {
    const [totalVisitors, setTotalVisitors] = useState(null);

  useEffect(() => {
    fetch('https://mb-crc-visitors-app.azurewebsites.net/api/GetTotalVisitors', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {console.log(response); return response.json()})
      .then(data => {
        setTotalVisitors(data.total_entries);
      })
      .catch(error => {
        console.error('Error fetching total visitors:', error);
      });
  }, []);

    return (
        <div className="Banner">
            Visitor {totalVisitors}. Curious?<a href="https://github.com/CRC-bertoma/CRC" target="_blank" rel="noopener noreferrer">Check GitHub</a>!
        </div>
    );
}

export default Banner;