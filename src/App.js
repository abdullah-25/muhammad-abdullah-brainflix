import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import NextVideo from "./components/NextVideo/NextVideo";
import videoDetails from "./assets/data/video-details.json";
import videos from "./assets/data/videos.json";
import VideoContent from "./components/VideoContent/VideoContent";
import Video from "./components/Video/Video";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  function updateCurrentVideo(id) {
    setCurrentVideo(videoDetails.find((i) => i.id === id));
  }

  return (
    <div className="App">
      <Header />
      <Video currentVideo={currentVideo} />
      <div className="outerdiv">
        <VideoContent currentVideo={currentVideo} />

        <NextVideo
          videos={videos}
          currentVideo={currentVideo}
          Setter={updateCurrentVideo}
        />
      </div>
    </div>
  );
}

export default App;
