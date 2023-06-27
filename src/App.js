import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NextVideo from "./components/NextVideo/NextVideo";
import videoDetails from "./assets/data/video-details.json";
import axios from "axios";
import VideoContent from "./components/VideoContent/VideoContent";
import Video from "./components/Video/Video";
import HomePage from "./pages/HomePage/HomePage";
import VideosPage from "./pages/VideosPage/VideosPage";

const url = "https://project-2-api.herokuapp.com/videos";
const apiKey = "3e01eaff-cb5c-46b6-817b-e65193e6634a";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  // useEffect(() => {
  //   axios
  //     .get(`${url}/videos/${id}?api_key=${apiKey}`)
  //     .then((response) => setCurrentVideo(response.data)); //;
  // }, [id]);

  function updateCurrentVideo(id) {
    setCurrentVideo(videoDetails.find((i) => i.id === id));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                currentVideo={currentVideo}
                videos={currentVideo}
                Setter={updateCurrentVideo}
              />
            }
          />
          <Route path="/videos/:id" element={<VideosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
