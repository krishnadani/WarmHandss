import { useState } from "react";

function DonatePage({ onBack }) {
  const API_BASE = (process.env.REACT_APP_API_URL || "http://localhost:5000").replace(/\/$/, "");
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleDonate = async () => {
    if (!amount || amount < 50) {
      setError("Minimum donation amount is ₹50");
      return;
    }

    try {
      // 1️⃣ Create Razorpay order
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

      // 2️⃣ Razorpay Checkout options
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
        description: "General Donation",
        order_id: orderData.id,
        handler: async function (response) {
          try {
            // 3️⃣ Verify payment on backend
            const verifyRes = await fetch(`${API_BASE}/api/donations/verify`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  cause: "General Donation",
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
            setError("");
          } catch (err) {
            console.error(err);
            setError("Payment verification failed");
          }
        },
        theme: {
          color: "#15803D",
        },
      };

      // 4️⃣ Open Razorpay
      // Ensure checkout script and window.Razorpay are available
      if (!window.Razorpay) {
        console.error("Razorpay script not loaded or blocked");
        setError("Payment initiation failed: payment script unavailable");
        return;
      }

      const razorpay = new window.Razorpay(options);
      // On some mobile browsers the popup may be blocked if not in a direct user gesture.
      // We attempt to open checkout immediately — if it fails, log for diagnostics.
      try {
        razorpay.open();
      } catch (openErr) {
        console.error("Razorpay open error:", openErr);
        setError("Payment initiation failed");
      }
    } catch (err) {
      console.error(err);
      setError("Payment initiation failed");
    }
  };

  return (
    <section className="container my-5 py-5">
      <button
        onClick={onBack}
        className="btn mb-4"
        style={{ color: "#16A34A" }}
      >
        ← Back
      </button>

      <h2 className="fw-bold mb-4">Quick Donate</h2>

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Enter amount (₹50+)"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      {error && <small className="text-danger">{error}</small>}
      {success && (
        <div className="alert alert-success mt-2">
          💚 Thank you for your donation!
        </div>
      )}

      <button
        className="btn text-white w-100 mt-3"
        style={{ backgroundColor: "#15803D" }}
        onClick={handleDonate}
      >
        Donate Now
      </button>
    </section>
  );
}

export default DonatePage;
