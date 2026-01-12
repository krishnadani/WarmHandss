import { useState } from "react";

function CauseStory({ story, onBack }) {
  const API_BASE = (process.env.REACT_APP_API_URL || "http://localhost:5000").replace(/\/$/, "");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleDonate = async () => {
    if (!amount || amount < 50) {
      setError("Minimum donation amount is ₹50");
      return;
    }

    try {
      // 1. Create Razorpay order from backend
      const orderRes = await fetch(`${API_BASE}/api/donations/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        }
      );

      if (!orderRes.ok) {
        const text = await orderRes.text().catch(() => "");
        console.error("Order creation failed:", orderRes.status, text);
        setError("Payment initiation failed: unable to create order");
        return;
      }

      const orderData = await orderRes.json();

      // 2. Configure Razorpay options
      if (!process.env.REACT_APP_RAZORPAY_KEY_ID) {
        console.error("Missing REACT_APP_RAZORPAY_KEY_ID");
        setError("Payment initiation failed: payment key missing");
        return;
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: "INR",
        name: "WarmHands",
        description: story.title,
        order_id: orderData.id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch(`${API_BASE}/api/donations/verify`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  cause: story.title,
                  amount: amount,
                }),
              }
            );

            if (!verifyRes.ok) {
              const text = await verifyRes.text().catch(() => "");
              console.error("Payment verify failed:", verifyRes.status, text);
              setError("Payment verification failed");
              return;
            }

            const data = await verifyRes.json();

            setSuccess(true);
            setAmount("");
          } catch (err) {
            console.error(err);
            setError("Payment verification failed");
          }
        },

        theme: {
          color: "#15803D",
        },
      };

      // 3. Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      setError("Payment initiation failed");
    }
  };

  return (
    <section className="container my-5 py-5">
      {/* Back */}
      <button
        onClick={onBack}
        className="btn mb-4"
        style={{ color: "#16A34A" }}
      >
        ← Back
      </button>

      {/* Image */}
      <img
        src={story.image}
        alt={story.title}
        className="img-fluid rounded mb-4"
        style={{
          maxHeight: "400px",
          objectFit: "cover",
          width: "100%",
        }}
      />

      {/* Content */}
      <h2 className="fw-bold mb-2">{story.title}</h2>
      <p className="text-muted mb-3">Target Amount: ₹{story.target}</p>

      <p className="fs-5 text-muted mb-4">{story.description}</p>

      {/* SUCCESS MESSAGE */}
      {success && (
        <div className="alert alert-success">
          💚 Thank you for your support!
        </div>
      )}

      {/* DONATION BOX */}
      <div className="card p-4" style={{ maxWidth: "420px" }}>
        <label className="fw-semibold mb-2">Enter Donation Amount (₹)</label>

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Minimum ₹50"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        {error && <small className="text-danger mb-2 d-block">{error}</small>}

        <button
          className="btn text-white w-100 fw-semibold mt-2"
          style={{ backgroundColor: "#15803D" }}
          onClick={handleDonate}
        >
          Donate Now
        </button>

        <p className="text-muted small mt-3 mb-0 text-center">
          Secure payments via GPay, Apple Pay, PayPal & UPI
        </p>
      </div>
    </section>
  );
}

export default CauseStory;
