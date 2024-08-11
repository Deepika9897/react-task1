// src/components/Banner.js
import React, { useState, useEffect } from "react";

const Banner = ({ description, timer, link, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (timeLeft > 0) {
      const countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      onClose();
    }
  }, [timeLeft, onClose]);

  return (
    <div className="banner">
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Click Here
        </a>
      )}
      <p>Time left: {timeLeft}s</p>
    </div>
  );
};

export default Banner;
