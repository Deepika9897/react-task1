// src/App.js
import React, { useState } from "react";
import Banner from "./Banner";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [bannerDescription, setBannerDescription] = useState(
    "Welcome to our website!"
  );
  const [bannerTimer, setBannerTimer] = useState(60);
  const [bannerLink, setBannerLink] = useState("");

  const handleCloseBanner = () => setBannerVisible(false);

  return (
    <div className="App">
      {bannerVisible && (
        <Banner
          description={bannerDescription}
          timer={bannerTimer}
          link={bannerLink}
          onClose={handleCloseBanner}
        />
      )}
      <Dashboard
        setBannerVisible={setBannerVisible}
        setBannerDescription={setBannerDescription}
        setBannerTimer={setBannerTimer}
        setBannerLink={setBannerLink}
      />
    </div>
  );
}

export default App;
