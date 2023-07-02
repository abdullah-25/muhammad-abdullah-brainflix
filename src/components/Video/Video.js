import "./Video.scss";

export default function Video({ currentVideo }) {
  return (
    <div className="video-container">
      <video
        className="video-container__video"
        controls
        poster={currentVideo.image}
      ></video>
      ;
    </div>
  );
}
