function GetInvolved({ onDonateClick }) {
  return (
    <section
      id="get-involved"
      className="container my-5 py-5"
      style={{ backgroundColor: "#F0FDF4", borderRadius: "24px" }}
    >
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
          Get Involved
        </span>

        <h2 className="fw-bold mt-4 display-6">
          Together, We Can <br /> Make a Difference
        </h2>

        <p className="text-muted mt-3 fs-5">
          There are many ways you can support WarmHands and help bring hope,
          care, and warmth to people in need.
        </p>
      </div>

      {/* Involvement Options */}
      <div className="row g-4">
        {/* Option 1 */}
        <div className="col-md-4">
          <div className="p-4 h-100 border rounded-4 bg-white">
            <h5 className="fw-bold">Donate</h5>
            <p className="text-muted">
              Make a financial contribution to directly support our programs and
              outreach efforts.
            </p>

            <div
              className="d-flex align-items-center gap-2"
              style={{ cursor: "pointer" }}
              onClick={onDonateClick}
            >
              <span className="fw-semibold text-success">Donate now</span>
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>
        </div>

        {/* Option 2 */}
        <div className="col-md-4">
          <div className="p-4 h-100 border rounded-4 bg-white">
            <h5 className="fw-bold">Volunteer</h5>
            <p className="text-muted">
              Join our volunteer network and help us with events, outreach, and
              community support.
            </p>

            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold text-success">Join us</span>
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>
        </div>

        {/* Option 3 */}
        <div className="col-md-4">
          <div className="p-4 h-100 border rounded-4 bg-white">
            <h5 className="fw-bold">Spread the Word</h5>
            <p className="text-muted">
              Help us reach more people by sharing our mission and initiatives
              within your community.
            </p>

            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold text-success">Share</span>
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
