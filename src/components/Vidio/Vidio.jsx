import React, { useState, useRef } from "react";

function Vidio() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function handleVideoEnd() {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Возвращаем видео в начало
      videoRef.current.play(); // Запускаем видео заново
    }
  }

  function togglePlay() {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <video
        style={{ width: "1905px", height: "100vh" }}
        ref={videoRef}
        onEnded={handleVideoEnd}
        className="vidios boy"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          style={{ width: "100%" }}
          src="https://cdn-mk1.mortalkombat.com/home/hero.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </video>
      <button className="vidioButton" onClick={togglePlay}>
        {isPlaying ? "on" : "off"}
      </button>

      <div className="video-container"></div>
    </div>
  );
}

export default Vidio;
