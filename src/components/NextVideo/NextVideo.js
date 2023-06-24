import "./NextVideo.scss";

export default function NextVideo({ videos, currentVideo, Setter }) {
  const inactiveVideos = videos.filter((v) => {
    return v.id !== currentVideo.id;
  });

  return (
    <div>
      <div class="section-title">NEXT VIDEOS</div>
      {inactiveVideos.map((movie) => {
        const { id, title, channel, image } = movie;
        return (
          <div
            key={id}
            class="container"
            onClick={() => {
              Setter(id);
            }}
          >
            <img src={image} class="container__img" />
            <div class="container__text-container">
              <div class="container__text-container--title">{title}</div>
              <div class="container__text-container--channel">{channel}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
