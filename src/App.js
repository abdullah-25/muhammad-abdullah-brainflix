import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import NextVideo from "./components/NextVideo/NextVideo";
import videoDetails from "./assets/data/video-details.json";
import videos from "./assets/data/videos.json";
import VideoDisplay from "./components/VideoDisplay/VideoDisplay";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  function updateCurrentVideo(id) {
    setCurrentVideo(videoDetails.find((i) => i.id === id));
  }

  return (
    <div className="App">
      <Header />
      <VideoDisplay currentVideo={currentVideo} />
      <NextVideo
        videos={videos}
        currentVideo={currentVideo}
        Setter={updateCurrentVideo}
      />
    </div>
  );
}

export default App;
