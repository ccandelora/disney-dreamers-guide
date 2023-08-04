import React from "react";

export default function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4 mouse-text text-white">
            <img
              src="/disney-dreamers-guide-low-resolution-logo-white-on-transparent-background.png"
              alt="Disney Dreamer's Guide"
              height="75"
            />
          </span>
        </a>

        <ul className="nav nav-pills">
        <li className="nav-item home">
            <a href="/" className="nav-link text-white home">
              Home
            </a>
          </li>
          
          <li className="nav-item">
            <a href="/" className="nav-link text-white articles">
              Articles
            </a>
          </li>
          <li className="nav-item wait-times">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle nav-link wait-times text-white"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Current Wait Times
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item nav-link magickingdom" href="/magic-kingdom-queue-times">
                    Magic Kingdom Wait TImes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item nav-link epcot" href="epcot-queue-times">
                    Epcot
                  </a>
                </li>
                <li>
                  <a className="dropdown-item nav-link hollywood" href="hollywood-studios-queue-times">
                    Hollywood Studios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item nav-link animal" href="animal-kingdom-queue-times">
                    Animal Kingdom
                  </a>
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </header>
    </div>
  );
}
