import React from "react";

const Video = ({ className, src, height, width }) => (
  <div className={`${className}`}>
    <iframe
      width={width}
      height={height}
      src={src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
);

export default Video;
