import upload from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import confetti from "https://esm.run/canvas-confetti@1";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-use-history";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080";

export default function UploadPage() {
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  //wait for 2 seconds then redirect user to home page
  function delayAndGo(e, path) {
    e.preventDefault();
    //grab title

    //display confetti on screen
    confetti({
      particleCount: 150,
      spread: 60,
    });

    const title = e.target.title.value;
    const description = e.target.description.value;
    setError(null);

    axios
      .post(`${baseURL}/videos`, { title, description })
      .then(() => {
        axios.get(`${baseURL}/videos`).then(({ data }) => {
          setVideos(data);
        });
      })
      .catch(({ response }) => {
        setError(`Error! ${response.data}`);
      });

    setTimeout(() => history.push(path), 2000);
  }

  return (
    <div className="upload-container">
      <form onSubmit={(e) => delayAndGo(e, "/")}>
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

              <input
                type="text"
                name="title"
                placeholder="Add a title to your video"
                className="upload-container__upload__input--title__title-form"
              ></input>
            </div>
            <div className="upload-container__upload__input--description">
              <div className="upload-container__upload__input--description__title">
                ADD A VIDEO DESCRIPTION
              </div>

              <textarea
                type="text"
                name="description"
                placeholder="Add a description to your video"
                className="upload-container__upload__input--description__description-form"
              ></textarea>
            </div>
          </div>
        </div>
        <hr className="upload-container__bottom-divider" />
        <div className="upload-container__publish">
          <div
            style={{ textDecoration: "none" }}
            className="upload-container__publish--link"
          >
            <button className="upload-container__publish--btn">PUBLISH</button>
          </div>

          <Link to={`/`} style={{ textDecoration: "none" }}>
            <div className="upload-container__publish--cancel">CANCEL</div>
          </Link>
        </div>
      </form>
    </div>
  );
}
