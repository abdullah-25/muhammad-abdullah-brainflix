export default function VideoDisplay({ currentVideo }) {
  const {
    id,
    title,
    image,
    channel,
    comments,
    description,
    duration,
    likes,
    timestamp,
    video,
    views,
  } = currentVideo;

  return (
    <div>
      <video controls width="300" height="300" poster={image}>
        <source src={video}></source>
      </video>
    </div>
  );
}
