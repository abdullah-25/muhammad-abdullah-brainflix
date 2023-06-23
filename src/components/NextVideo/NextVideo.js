import "./NextVideo.scss";

export default function NextVideo({ videos, currentVideo, Setter }) {
  const inactiveVideos = videos.filter((v) => {
    return v.id !== currentVideo.id;
  });

  return (
    <div>
      {inactiveVideos.map((movie) => {
        const { id, title, channel, image } = movie;
        return (
          <div
            key={id}
            onClick={() => {
              console.log(movie);
            }}
          >
            <img src={image} />
            <div>{title}</div>
            <div>{channel}</div>
          </div>
        );
      })}
    </div>
  );
}
