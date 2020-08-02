import React from "react";

const Video = ({ id, name }) => (
  <div className="screen-video">
    <video id={`video-${id}`} playsInline autoPlay muted loop>
      <source src={`videos/${name}.mp4`} type="video/mp4" />
      Tu navegador no implementa el elemento <code>video</code>.
    </video>
  </div>
);

export default Video;
