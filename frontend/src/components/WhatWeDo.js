import { useEffect, useState } from "react";

function WhatWeDo({ onDonateClick }) {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setShowCards(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="what-we-do" className="container my-5 py-5">
      {/* SECTION HEADER */}
      <div className="text-center mb-5">
        <span
          className="px-3 py-1 rounded-pill fw-semibold"
          style={{
            backgroundColor: "#DCFCE7",
            color: "#16A34A",
            fontSize: "0.85rem",
          }}
        >
          What We Do
        </span>

        <h2 className="fw-bold mt-4 display-6">
          Providing Hope And Help <br /> During Challenging Times
        </h2>

        <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
          <span className="fw-semibold text-muted">Learn more</span>
          <span
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "1px solid #16A34A",
              color: "#16A34A",
            }}
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </span>
        </div>
      </div>

      {/* ACTION CARDS */}
      {showCards && (
        <div className="row g-4">
          {/* CARD 1 — DONATION */}
          <div className="col-md-4">
            <div className="action-card">
              <h5 className="fw-bold">Make a Donation</h5>

              <p className="text-muted">
                Contribute today to help fund treatments, research, and essential
                support services for those in need.
              </p>

              <div className="learn-more">
                <span>LEARN MORE</span>
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>

              {/* PAYMENT OPTIONS */}
              <div
                className="d-flex justify-content-between align-items-center mt-3 pt-3"
                style={{ borderTop: "1px solid #eee" }}
              >
                <span className="text-muted small">Payment Options</span>

                <div className="d-flex align-items-center gap-3">
                  <img
                    src="/payment-icons/apple-pay-icon.svg"
                    alt="Apple Pay"
                    height="18"
                    style={{ opacity: 0.9 }}
                  />

                  <img
                    src="/payment-icons/google-pay-acceptance-mark-icon.svg"
                    alt="Google Pay"
                    height="18"
                    style={{ opacity: 0.9 }}
                  />

                  <img
                    src="/payment-icons/paypal-color-icon.svg"
                    alt="PayPal"
                    height="18"
                    style={{ opacity: 0.9 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 — SUPPORT */}
          <div className="col-md-4">
            <div className="action-card">
              <h5 className="fw-bold">Get Support</h5>

              <p className="text-muted">
                Access vital resources, financial aid, and counseling for
                individuals and families during difficult times.
              </p>

              <div className="tags">
                <span># Financial Aid</span>
                <span># Therapy</span>
              </div>

              <div className="learn-more">
                <span>LEARN MORE</span>
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
          </div>

          {/* CARD 3 — VOLUNTEER */}
          <div className="col-md-4">
            <div className="action-card">
              <h5 className="fw-bold">Become a Volunteer</h5>

              <p className="text-muted">
                Join our team of volunteers to support communities, assist with
                outreach, and make a real impact.
              </p>

              <div className="avatars">
                <img src="https://i.pravatar.cc/30?img=1" alt="" />
                <img src="https://i.pravatar.cc/30?img=2" alt="" />
                <img src="https://i.pravatar.cc/30?img=3" alt="" />
                <span className="small text-muted ms-2">Join Our Team</span>
              </div>

              <div className="learn-more">
                <span>LEARN MORE</span>
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WhatWeDo;
