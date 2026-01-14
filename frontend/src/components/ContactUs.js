import { useState } from "react";

function ContactUs({ onBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Contact submit failed:", res.status, text);
        setError("Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      setError("");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Contact submit exception:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="container my-5 py-5">
      <button onClick={onBack} className="btn mb-4" style={{ color: "#16A34A" }}>
        ← Back
      </button>

      <h2 className="fw-bold mb-4">Contact Us</h2>

      {success && <div className="alert alert-success">✅ Message sent successfully</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input
          className="form-control mb-3"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="btn text-white w-100 fw-semibold"
          style={{ backgroundColor: "#15803D" }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
