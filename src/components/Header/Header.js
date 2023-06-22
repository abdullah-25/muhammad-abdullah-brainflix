import logo from "../../assets/logo/BrainFlix-logo.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="header__search-container">
        <input
          name="search"
          type="search"
          className="header__search-container--search"
          placeholder="Search"
        />
        <img
          src={profilePic}
          alt="profile-pic"
          class="header__search-container--profile-pic"
        />
        <button className="header__search-container--btn">
          <img
            src={upload}
            alt="upload-logo"
            className="header__search-container--btn__upload"
          />
          UPLOAD
        </button>
      </div>
    </header>
  );
}
