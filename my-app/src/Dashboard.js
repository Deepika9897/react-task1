// src/components/Dashboard.js
import React, { useState } from "react";

const Dashboard = ({
  setBannerVisible,
  setBannerDescription,
  setBannerTimer,
  setBannerLink
}) => {
  const [description, setDescription] = useState("");
  const [timer, setTimer] = useState(60);
  const [link, setLink] = useState("");

  const updateBanner = () => {
    setBannerDescription(description);
    setBannerTimer(timer);
    setBannerLink(link);
    setBannerVisible(true);
  };

  return (
    <div className="dashboard">
      <h2>Banner Settings</h2>
      <button onClick={() => setBannerVisible((prev) => !prev)}>
        Toggle Banner
      </button>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Timer (seconds): </label>
        <input
          type="number"
          value={timer}
          onChange={(e) => setTimer(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Link: </label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <button onClick={updateBanner}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
