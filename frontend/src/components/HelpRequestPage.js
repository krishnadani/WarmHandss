import { useState } from "react";

function HelpRequestPage({ onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.reason) newErrors.reason = "Please select a reason for help";
    if (!formData.details.trim())
      newErrors.details = "Please describe your situation";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("/api/help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        console.error("Help request failed:", response.status, text);
        alert("Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        reason: "",
        details: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Help request exception:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="container my-5 py-5">
      <button onClick={onBack} className="btn mb-4" style={{ color: "#16A34A" }}>
        ← Back
      </button>

      <div className="text-center mb-4">
        <span
          className="px-3 py-1 rounded-pill fw-semibold"
          style={{ backgroundColor: "#DCFCE7", color: "#16A34A", fontSize: "0.85rem" }}
        >
          Request Help
        </span>

        <h2 className="fw-bold mt-4 display-6">Tell Us How We Can Help</h2>
        <p className="text-muted mt-3">
          Fill out this form and our team will review your request with care.
        </p>
      </div>

      {success && (
        <div className="alert alert-success text-center">
          ✅ Your request has been submitted successfully.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input
              name="name"
              className="form-control mb-1"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}

            <input
              name="phone"
              className="form-control mb-1 mt-3"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}

            <select
              name="reason"
              className="form-select mb-1 mt-3"
              value={formData.reason}
              onChange={handleChange}
            >
              <option value="">Reason for Help</option>
              <option value="Medical Support">Medical Support</option>
              <option value="Education">Education</option>
              <option value="Food & Essentials">Food & Essentials</option>
              <option value="Emergency Assistance">Emergency Assistance</option>
            </select>
            {errors.reason && <small className="text-danger">{errors.reason}</small>}

            <textarea
              name="details"
              rows="4"
              className="form-control mb-1 mt-3"
              placeholder="Describe your situation"
              value={formData.details}
              onChange={handleChange}
            ></textarea>
            {errors.details && (
              <small className="text-danger">{errors.details}</small>
            )}

            <button
              type="submit"
              className="btn text-white w-100 fw-semibold mt-4"
              style={{ backgroundColor: "#15803D" }}
            >
              Submit Request
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default HelpRequestPage;
