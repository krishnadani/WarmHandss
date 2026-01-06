function DonateCausesPage({ onBack, onViewStory }) {
  return (
    <section className="container my-5 py-5">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="btn mb-4"
        style={{ color: "#16A34A" }}
      >
        ← Back
      </button>

      {/* Header */}
      <h2 className="fw-bold text-center mb-5" style={{ color: "#15803D" }}>
        Donate to a Cause
      </h2>

      <div className="row g-5 justify-content-center">
        {/* CAUSE 1 */}
        <div className="col-md-5">
          <div className="card h-100 shadow-sm">
            <img
              src="/child.jpg"
              alt="Child Cancer"
              className="card-img-top"
              style={{ height: "220px", objectFit: "cover" }}
            />

            <div className="card-body d-flex flex-column">
              <div>
                <h5 className="fw-bold">Support Child's Cancer Treatment</h5>
                <p className="text-muted mb-2">Target: ₹20,000</p>
                <p className="text-muted small">
                  Help a child receive life-saving cancer treatment and care.
                </p>
              </div>

              <div className="mt-auto">
                <button
                  className="btn btn-success w-100"
                  onClick={() =>
                    onViewStory({
                      title: "Support Child's Cancer Treatment",
                      target: 20000,
                      image: "/child.jpg",
                      description:
                        "Aarav is a 6-year-old child bravely fighting cancer. His family is facing immense financial challenges. Your contribution helps cover treatment, medicines, and hospital care.",
                    })
                  }
                >
                  View Story
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CAUSE 2 */}
        <div className="col-md-5">
          <div className="card h-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
              alt="Education Support"
              className="card-img-top"
              style={{ height: "220px", objectFit: "cover" }}
            />

            <div className="card-body d-flex flex-column">
              <div>
                <h5 className="fw-bold">Support Two Poor Kids' Education</h5>
                <p className="text-muted mb-2">Target: ₹60,000</p>
                <p className="text-muted small">
                  Help children continue their education with books and fees.
                </p>
              </div>

              <div className="mt-auto">
                <button
                  className="btn btn-success w-100"
                  onClick={() =>
                    onViewStory({
                      title: "Support Two Poor Kids' Education",
                      target: 60000,
                      image:
                        "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
                      description:
                        "Riya and Aman come from disadvantaged families but dream of studying. Donations help cover school fees, uniforms, and books.",
                    })
                  }
                >
                  View Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateCausesPage;
