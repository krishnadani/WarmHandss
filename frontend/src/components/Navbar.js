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
      className={`navbar navbar-expand-lg ${
        showNavbar ? "navbar-visible" : "navbar-hidden"
      }`}
      style={{ backgroundColor: "#F0FDF4" }}
    >
      <div className="container-fluid px-5">
        {/* LOGO + BRAND */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src="/logo.jpg"
            alt="WarmHands Logo"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              opacity: 0.8, // blends softly
              mixBlendMode: "multiply", // removes box feel
            }}
          />
          <span
            className="fw-bold"
            style={{
              color: "#16A34A",
              fontSize: "1.1rem",
              letterSpacing: "0.5px",
            }}
          >
            WarmHands
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#warmhandsNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="warmhandsNav"
        >
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#who-we-are">
                WHO WE ARE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#what-we-do">
                WHAT WE DO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#news-events">
                NEWS & EVENTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-semibold text-dark"
                href="#get-involved"
              >
                GET INVOLVED
              </a>
            </li>
          </ul>

          {/* CTA BUTTONS */}
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn d-flex align-items-center justify-content-center"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid #16A34A",
                backgroundColor: "transparent",
                color: "#16A34A",
                fontSize: "1rem",
              }}
              onClick={onContactClick}
              aria-label="Contact Us"
            >
              <i className="fa-solid fa-phone"></i>
            </button>

            <button
              className="btn fw-semibold text-white px-4"
              style={{
                height: "44px",
                borderRadius: "999px",
                backgroundColor: "#15803D",
                border: "1px solid #15803D",
              }}
              onClick={onDonateClick}
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
