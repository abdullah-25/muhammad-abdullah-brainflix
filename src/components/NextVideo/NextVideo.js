import "./NextVideo.scss";
import { Link } from "react-router-dom";

export default function NextVideo({ videos, currentVideo, Setter }) {
  const inactiveVideos = videos.filter((v) => {
    return v.id !== currentVideo.id;
  });

  return (
    <div class="section">
      <div class="section-title">NEXT VIDEOS</div>
      {inactiveVideos.map((movie) => {
        const { id, title, channel, image } = movie;
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`/videos/${id}`}
            key={id}
            class="container"
          >
            <img src={image} class="container__img" alt="thumbnail" />
            <div class="container__text-container">
              <div class="container__text-container--title">{title}</div>
              <div class="container__text-container--channel">{channel}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
