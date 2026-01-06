function WhyTrustUs() {
  return (
    <section className="container my-5 py-5">
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
          Why Trust Us ?
        </span>

        <h2 className="fw-bold mt-4 display-6">
          Built on Transparency <br /> and Compassion
        </h2>

        <p className="text-muted mt-3 fs-5">
          WarmHands is designed with honesty, security, and care at its core.
          Every contribution and action is handled responsibly.
        </p>
      </div>

      {/* Trust Points */}
      <div className="row g-4">
        {/* Point 1 */}
        <div className="col-md-3">
          <div className="text-center p-4 h-100 border rounded-4 bg-white">
            <h5 className="fw-bold">Transparent Process</h5>
            <p className="text-muted mt-2">
              Donations and support activities are handled openly and
              responsibly.
            </p>
          </div>
        </div>

        {/* Point 2 */}
        <div className="col-md-3">
          <div className="text-center p-4 h-100 border rounded-4 bg-white">
            <h5 className="fw-bold">Secure Payments</h5>
            <p className="text-muted mt-2">
              Trusted payment gateways ensure safe and secure transactions.
            </p>
          </div>
        </div>

        {/* Point 3 */}
        <div className="col-md-3">
          <div className="text-center p-4 h-100 border rounded-4 bg-white">
            <h5 className="fw-bold">Community-Driven</h5>
            <p className="text-muted mt-2">
              Powered by volunteers, donors, and people who genuinely care.
            </p>
          </div>
        </div>

        {/* Point 4 */}
        <div className="col-md-3">
          <div className="text-center p-4 h-100 border rounded-4 bg-white">
            <h5 className="fw-bold">Purpose-Focused</h5>
            <p className="text-muted mt-2">
              Built with the mission to help people, not for profit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTrustUs;
