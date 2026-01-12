import { useEffect, useState } from "react";

function Navbar({ onContactClick, onDonateClick }) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowNavbar(window.scrollY > 120);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        showNavbar ? "shadow-sm" : ""
      }`}
      style={{ backgroundColor: "#F0FDF4" }}
    >
      <div className="container-fluid px-3 px-lg-5">
        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src="/logo.jpg"
            alt="WarmHands Logo"
            style={{
              width: "42px",
              height: "42px",
              objectFit: "contain",
              opacity: 0.9,
            }}
          />
          <span
            className="fw-bold"
            style={{
              color: "#16A34A",
              fontSize: "1.1rem",
            }}
          >
            WarmHands
          </span>
        </a>

        {/* HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#warmhandsNav"
          aria-controls="warmhandsNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSIBLE CONTENT */}
        <div
          className="collapse navbar-collapse mt-3 mt-lg-0"
          id="warmhandsNav"
        >
          {/* NAV LINKS */}
          <ul className="navbar-nav mx-auto text-center gap-2 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#who-we-are">
                WHO WE ARE
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#what-we-do">
                WHAT WE DO
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#news-events">
                NEWS & EVENTS
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#get-involved">
                GET INVOLVED
              </a>
            </li>
          </ul>

          {/* CTA BUTTONS */}
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 mt-4 mt-lg-0">
            {/* PHONE */}
            <button
              onClick={onContactClick}
              className="btn d-flex align-items-center justify-content-center"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid #16A34A",
                backgroundColor: "transparent",
                color: "#16A34A",
              }}
              aria-label="Contact Us"
            >
              <i className="fa-solid fa-phone"></i>
            </button>

            {/* DONATE */}
            <button
              onClick={onDonateClick}
              className="btn fw-semibold text-white px-4"
              style={{
                height: "44px",
                borderRadius: "999px",
                backgroundColor: "#15803D",
              }}
            >
              DONATE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
