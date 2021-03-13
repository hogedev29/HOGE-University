import React from "react";

const Video = ({ src }) => (
  <div className="video">
    <iframe
      width="560"
      height="315"
      src={src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
);

export default Video;
