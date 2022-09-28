import React from "react";
import VideoItem from "../videoItem/VideoItem";
import "./videoList.scss";

const VideoList = ({ videos }) => {
  return (
    <ul className="videos">
      {videos.map((video) => (
        <VideoItem video={video} key={video.id} />
      ))}
    </ul>
  );
};

export default VideoList;
