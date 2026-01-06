function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#EEF6F8",
        padding: "4rem 0 2rem",
        marginTop: "4rem",
      }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* BRAND INFO */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-2" style={{ color: "#0F172A" }}>
              WarmHands
            </h5>
            <p
              className="fw-semibold mb-2"
              style={{ color: "#16A34A", fontStyle: "italic" }}
            >
              A small act can create big change.
            </p>
            <p className="text-muted">
              Building trust through transparent support and compassionate
              action. We focus on impact, clarity, and care.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-decoration-none text-dark">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#what-we-do"
                  className="text-decoration-none text-dark"
                >
                  What We Do
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#who-we-are"
                  className="text-decoration-none text-dark"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="https://github.com/krishnadani" className="text-dark fs-5">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/krishnagdani/" className="text-dark fs-5">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/krishnadanii/" className="text-dark fs-5">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center mt-5 text-muted">
          © 2026 WarmHands. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
