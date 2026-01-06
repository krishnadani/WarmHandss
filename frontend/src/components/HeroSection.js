function HeroSection({ onHeroDonate, onNeedHelp }) {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center"
      style={{
        backgroundColor: "#FDF6E9",
        minHeight: "90vh",
      }}
    >
      <div className="container text-center">
        {/* HEADLINE */}
        <h1
          className="fw-bold"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: "1.1",
          }}
        >
          <span>Warm</span> {/* IMAGE PILL */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "240px",
              height: "120px",
              borderRadius: "80px",
              overflow: "hidden",
              verticalAlign: "middle",
              margin: "0 12px",
              backgroundColor: "#EEE", // fallback
            }}
          >
            <img
              src="/hero.avif"
              alt="WarmHands Support"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // 🔑 key fix
                objectPosition: "center", // 🔑 key fix
              }}
            />
          </span>{" "}
          <span>Hands</span>
          <br />
          <span>is Support</span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-muted mt-4 fs-5">
          Bringing warmth, care, and hope to people when they need it the most.
        </p>

        {/* CTA BUTTONS */}
        <div className="d-flex justify-content-center align-items-center gap-4 mt-5">
          <button
            className="btn text-white px-4"
            style={{
              backgroundColor: "#15803D",
              borderRadius: "999px",
            }}
            onClick={onHeroDonate}
          >
            DONATE
          </button>

          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-dark px-4 rounded-pill"
              onClick={onNeedHelp}
            >
              I NEED HELP →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
