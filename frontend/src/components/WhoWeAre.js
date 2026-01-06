function WhoWeAre() {
  return (
    <section id="who-we-are" className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 text-center">
          {/* Section Tag */}
          <span
            className="px-3 py-1 rounded-pill fw-semibold"
            style={{
              backgroundColor: "#DCFCE7",
              color: "#16A34A",
              fontSize: "0.85rem",
            }}
          >
            Who We Are
          </span>

          {/* Heading */}
          <h2 className="fw-bold mt-4 display-6">
            Building Compassion Through Action
          </h2>

          {/* Description */}
          <p className="text-muted mt-4 fs-5">
            <strong>WarmHands</strong> is a community-driven donation and support
            platform dedicated to helping individuals and families during
            challenging times. We believe that small acts of kindness, when
            combined, can create a meaningful and lasting impact.
          </p>

          <p className="text-muted fs-5">
            Our mission is to connect donors, volunteers, and support seekers
            through a secure and transparent digital platform. By using
            technology with empathy at its core, WarmHands makes it easier to
            give help, receive support, and build stronger, more caring
            communities.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default WhoWeAre;
