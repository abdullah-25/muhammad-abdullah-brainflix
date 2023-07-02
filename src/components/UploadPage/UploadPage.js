import upload from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import confetti from "https://esm.run/canvas-confetti@1";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-use-history";
export default function UploadPage() {
  const history = useHistory();

  //wait for 2 seconds then redirect user to home page
  function delayAndGo(e, path) {
    e.preventDefault();

    //display confetti on screen
    confetti({
      particleCount: 150,
      spread: 60,
    });

    setTimeout(() => history.push(path), 2000);
  }

  return (
    <div className="upload-container">
      <hr className="upload-container__top-divider" />
      <div className="upload-container__heading">UPLOAD VIDEO</div>
      <hr className="upload-container__heading-divider" />
      <div className="upload-container__upload">
        <div className="upload-container__upload__thumbnail-container">
          <div className="upload-container__upload__thumbnail-container--heading">
            VIDEO THUMBNAIL
          </div>
          <img
            className="upload-container__upload__thumbnail-container--img"
            src={upload}
            alt="thumbail"
          />
        </div>
        <div className="upload-container__upload__input">
          <div className="upload-container__upload__input--title">
            <div className="upload-container__upload__input--title__title">
              TITLE YOUR VIDEO
            </div>
            <form>
              <input
                type="text"
                name="title"
                placeholder="Add a title to your video"
                className="upload-container__upload__input--title__title-form"
              ></input>
            </form>
          </div>
          <div className="upload-container__upload__input--description">
            <div className="upload-container__upload__input--description__title">
              ADD A VIDEO DESCRIPTION
            </div>
            <form>
              <input
                type="text"
                name="description"
                placeholder="Add a description to your video"
                className="upload-container__upload__input--description__description-form"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <hr className="upload-container__bottom-divider" />
      <div className="upload-container__publish">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={(e) => delayAndGo(e, "/")}
          className="upload-container__publish--link"
        >
          <button className="upload-container__publish--btn">PUBLISH</button>
        </Link>

        <Link to={`/`} style={{ textDecoration: "none" }}>
          <div className="upload-container__publish--cancel">CANCEL</div>
        </Link>
      </div>
    </div>
  );
}
