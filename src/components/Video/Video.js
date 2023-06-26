import "./Video.scss";

export default function Video({ currentVideo }) {
  return (
    <div>
      <video class="video" controls poster={currentVideo.image}></video>;
    </div>
  );
}
