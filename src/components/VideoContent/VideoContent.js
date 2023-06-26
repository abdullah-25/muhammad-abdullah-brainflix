import "./VideoContent.scss";
import profilePic from "../../assets/images/Mohan-muruge.jpg";
import addComment from "../../assets/icons/add_comment.svg";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

export default function VideoContent({ currentVideo }) {
  const { title, channel, comments, description, likes, timestamp, views } =
    currentVideo;

  return (
    <div class="display">
      <div class="display__title">{title}</div>
      <hr class="display__first-hr" />
      <div class="display__details">
        <div class="display__details--name-date">
          <div class="display__details--name-date__channel">By {channel}</div>
          <div class="display__details--name-date__timestamp">
            {new Date(timestamp).toLocaleDateString()}
          </div>
        </div>
        <div class="display__details--views-likes">
          <div class="display__details--views-likes__views">
            <img
              src={viewsIcon}
              class="display__details--views-likes__views--icon"
            />
            {views}
          </div>
          <div class="display__details--views-likes__likes">
            <img
              src={likesIcon}
              class="display__details--views-likes__likes--icon"
            />
            {likes}
          </div>
        </div>
      </div>
      <hr class="display__details--hr" />

      <div class="display__description">{description}</div>

      <div class="display__comments-section">
        <div class="display__comments-section--count"> 3 Comments</div>
        <div class="display__comments-section--outer">
          <img
            src={profilePic}
            alt="profile-pic"
            class="display__comments-section--avatar"
          />
          <div class="display__comments-section--comment-input">
            <div class="display__comments-section--comment-input--title">
              JOIN THE CONVERSATION
            </div>
            <div class="display__comments-section--comment-input--container">
              <input
                name="text"
                type="text"
                className="display__comments-section--addcomment"
                placeholder="Add a new comment"
              />
              <button className="display__comments-section--btn">
                <img
                  src={addComment}
                  alt="upload-logo"
                  className="display__comments-section--btn__upload"
                />
                COMMENT
              </button>
            </div>
          </div>
        </div>

        <div class="display__comments-section--comments">
          {comments.map((comment) => (
            <div class="display__comments-section--comment">
              <hr class="display__comments-section--hr" />
              <div class="display__comments-section--outer-container">
                <img class="display__comments-section--comment--image" />
                <div class="display__comments-section--inner-container">
                  <div class="display__comments-section--comment--namecontainer">
                    <div>{comment.name}</div>
                    <div class="display__comments-section--comment--namecontainer--date">
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                  <div class="display__comments-section--comment--text">
                    {comment.comment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr class="last-hr" />
      </div>
    </div>
  );
}
