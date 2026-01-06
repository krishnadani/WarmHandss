function NewsEvents() {
  return (
    <section id="news-events" className="container my-5 py-5">
      {/* Section Header */}
      <div className="text-center mb-5">
        <span
          className="px-3 py-1 rounded-pill fw-semibold"
          style={{
            backgroundColor: "#DCFCE7",
            color: "#16A34A",
            fontSize: "0.85rem",
          }}
        >
          News & Events
        </span>

        <h2 className="fw-bold mt-4 display-6">
          Latest Updates From <br /> WarmHands
        </h2>
      </div>

      {/* News Cards */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <small className="text-muted">Mar 2026 · Event</small>
              <h5 className="fw-bold mt-2">
                Community Donation Drive Successfully Completed
              </h5>
              <p className="text-muted">
                WarmHands organized a donation drive that helped over 500
                families with essential supplies and support.
              </p>

              <div className="d-flex align-items-center gap-2 mt-3">
                <span className="fw-semibold text-success">Read more</span>
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <small className="text-muted">Feb 2026 · News</small>
              <h5 className="fw-bold mt-2">
                WarmHands Partners With Local NGOs
              </h5>
              <p className="text-muted">
                New partnerships aim to expand outreach programs and improve
                access to financial and emotional support.
              </p>

              <div className="d-flex align-items-center gap-2 mt-3">
                <span className="fw-semibold text-success">Read more</span>
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <small className="text-muted">Jan 2026 · Event</small>
              <h5 className="fw-bold mt-2">
                Volunteer Orientation Program Announced
              </h5>
              <p className="text-muted">
                WarmHands invites volunteers to join training sessions focused
                on community outreach and care initiatives.
              </p>

              <div className="d-flex align-items-center gap-2 mt-3">
                <span className="fw-semibold text-success">Read more</span>
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsEvents;
