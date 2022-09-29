import React, { useState } from "react";
import { useEffect } from "react";
import "./app.scss";
import VideoList from "./components/videoList/VideoList";
import SearchBar from "./components/searchBar/SearchBar";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const onSearch = (검색어) => {
    youtube
      .search(검색어)
      .then((searchedData) => setVideos(searchedData))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((initialData) => setVideos(initialData))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="app">
      <SearchBar onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
