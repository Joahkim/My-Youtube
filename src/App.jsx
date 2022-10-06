import React, { useState } from "react";
import { useEffect } from "react";
import "./app.scss";
import VideoList from "./components/videoList/VideoList";
import SearchBar from "./components/searchBar/SearchBar";
import VideoDetail from "./components/videoDetail/VideoDetail";
import { useCallback } from "react";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onSearch = useCallback(
    (검색어) => {
      youtube
        .search(검색어)
        .then((searchedData) => {
          setVideos(searchedData);
          setSelectedVideo(null);
        })
        .catch((error) => console.log("error", error));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((initialData) => setVideos(initialData))
      .catch((error) => console.log("error", error));
  }, [youtube]);

  return (
    <div className="app">
      <SearchBar onSearch={onSearch} />
      <section className="content ">
        {selectedVideo && (
          <div className="detail ">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
        )}
        <div className="list">
          <VideoList
            videos={videos}
            selectVideo={selectVideo}
            display={selectedVideo ? "oneLine" : "twoLines"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
