import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
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
    <footer>
      {totalVisitors !== null && (
        <p className="copyright">
          Website visitors {totalVisitors} | Inspired by <a href="https://github.com/jigalin" target="_blank" rel="noopener noreferrer">Matthew Jigalin</a>
        </p>
      )}
    </footer>
  );
};

export default Footer;