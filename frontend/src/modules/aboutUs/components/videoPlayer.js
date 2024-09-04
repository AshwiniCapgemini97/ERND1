import React from "react";

const VideoPlayer = ({ src, poster }) => {
  return (
    <div className="videoPlayerWrapper">
      {src && (
        <video controls src={src} width="100%" height="auto">
          Your browser does not support the video tag.
        </video>
      )}
      {!src && poster && <img src={poster} alt="Video placeholder" />}
    </div>
  );
};

export default VideoPlayer;
