import Video from "../../components/Video/Video";
import VideoContent from "../../components/VideoContent/VideoContent";
import NextVideo from "../../components/NextVideo/NextVideo";
import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://project-2-api.herokuapp.com/videos";
const apiKey = "3e01eaff-cb5c-46b6-817b-e65193e6634a";

export default function HomePage({ currentVideo, videos, Setter }) {
  const [videoAPI, setVideosAPI] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}?api_key=${apiKey}`)
      .then((response) => setVideosAPI(response.data)); //;
  }, []);

  if (videoAPI.length === 0) {
    return <h1>loading..</h1>;
  }

  return (
    <>
      <Video currentVideo={currentVideo} />
      <div className="outerdiv">
        <VideoContent currentVideo={currentVideo} />

        <NextVideo
          videos={videoAPI}
          currentVideo={currentVideo}
          Setter={Setter}
        />
      </div>
    </>
  );
}
