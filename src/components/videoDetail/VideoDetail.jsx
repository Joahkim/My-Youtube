import React from "react";
import "./videoDetail.scss";

const VideoDetail = ({ selectedVideo }) => {
  return (
    <section className="videoDetail ">
      <iframe
        title={selectedVideo.snippet.title}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="550px"
        src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{selectedVideo.snippet.title}</h2>
      <h3>{selectedVideo.snippet.channelTitle}</h3>
      <pre className="videoDescription">
        {selectedVideo.snippet.description}
      </pre>
    </section>
  );
};

export default VideoDetail;
