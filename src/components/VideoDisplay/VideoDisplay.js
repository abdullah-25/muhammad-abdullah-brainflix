import "./VideoDisplay.scss";
import profilePic from "../../assets/images/Mohan-muruge.jpg";
import addComment from "../../assets/icons/add_comment.svg";

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
  // console.log(comments.map((comment) => comment.id));

  if (!comments) {
    console.log(currentVideo);
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }

  return (
    <div>
      <video controls width="300" height="300" poster={image}>
        <source src={video}></source>
      </video>
      <div>
        <div>{title}</div>
        <div>{channel}</div>
        <div>{timestamp}</div>
        <div>{views}</div>
        <div>{likes}</div>
        <hr />
      </div>
      <div>{description}</div>
      <br></br>
      <div>
        <img
          src={profilePic}
          alt="profile-pic"
          class="header__search-container--profile-pic"
        />
        <div>JOIN THE CONVERSATION</div>
        <input
          name="search"
          type="search"
          className="header__search-container--search"
          placeholder="Add a new comment"
        />
        <button className="header__search-container--btn">
          <img
            src={addComment}
            alt="upload-logo"
            className="header__search-container--btn__upload"
          />
          COMMENT
        </button>
        <hr />
        <div>
          {comments.map((comment) => (
            <div>
              <div>{comment.name}</div>
              <div>{comment.comment}</div>
              <div>{comment.timestamp}</div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
