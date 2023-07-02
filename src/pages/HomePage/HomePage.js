import Video from "../../components/Video/Video";
import VideoContent from "../../components/VideoContent/VideoContent";
import NextVideo from "../../components/NextVideo/NextVideo";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const url = "https://project-2-api.herokuapp.com/videos";
const videosURL = "https://project-2-api.herokuapp.com";
const apiKey = "3e01eaff-cb5c-46b6-817b-e65193e6634a";

export default function HomePage() {
  const [videoAPI, setVideosAPI] = useState([]);
  const [currentVideoAPI, setCurrentVideoAPI] = useState([]);
  const params = useParams();

  let { id } = params;
  useEffect(() => {
    // Fetching the list of videos from the API
    axios.get(`${url}?api_key=${apiKey}`).then((response) => {
      // Set the videosAPI state with the response data
      setVideosAPI(response.data);

      if (!id) {
        // If no video ID is provided, make another API call with the ID of the first video in the response data
        console.log("no id... make axios call with", response.data[0].id);
        axios
          .get(`${videosURL}/videos/${response.data[0].id}?api_key=${apiKey}`)
          .then((response) => setCurrentVideoAPI(response.data));
      }
    });
  }, [id]);

  useEffect(() => {
    if (id) {
      // If a video ID is provided, make an API call to fetch the video data using the ID
      axios
        .get(`${videosURL}/videos/${id}?api_key=${apiKey}`)
        .then((response) => setCurrentVideoAPI(response.data));
    }
  }, [id]);

  // Check if the videosAPI and currentVideoAPI arrays are empty
  if (videoAPI.length === 0) {
    return <h1>loading..</h1>;
  }
  if (currentVideoAPI.length === 0) {
    return <h1>loading..</h1>;
  }

  return (
    <>
      <Video currentVideo={currentVideoAPI} />
      <div className="outerdiv">
        <VideoContent currentVideo={currentVideoAPI} />
        <NextVideo videos={videoAPI} currentVideo={currentVideoAPI} />
      </div>
    </>
  );
}
