import React from "react";

function Heading() {
  return (
    <div>
      <div className="navbar-fixed white purple-text text-darken-2">
        <nav>
          <div className="white purple-text text-darken-2 nav-wrapper">
            <a
              href="#!"
              className="white purple-text text-darken-2 brand-logo logo"
            >
              <i className="material-icons">description</i>
              <span className="hero-text">Notes</span>
            </a>
            <div className="search">
              <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons purple-text search-icon">search</i>
                </label>
                <i className="material-icons close-icon">close</i>
              </div>
            </div>
            <ul className="white purple-text text-darken-2 right hide-on-med-and-down">
              <li>
                <a href="https://github.com/Adyasha8105/Notess" className="purple-text text-darken-2">
                  <i className="material-icons">info</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Heading;
