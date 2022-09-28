import React, { useState } from "react";
import { useEffect } from "react";
import "./app.scss";
import VideoList from "./components/videoList/VideoList";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCrA6O54OFVaVbnqkr8Dt0FA8OEMwl4If0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="app">
      <SearchBar />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
