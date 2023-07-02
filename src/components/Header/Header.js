import logo from "../../assets/logo/BrainFlix-logo.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <div className="header__logo-container">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </Link>
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
        <Link to={`/upload`} style={{ textDecoration: "none" }}>
          <button className="header__search-container--btn">UPLOAD</button>
        </Link>
      </div>
    </header>
  );
}
