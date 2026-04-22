import { useState } from "react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    package: "",
    guests: "",
    location: "",
    notes: "",
    paymentOption: "deposit",
    permitAccepted: false,
    policyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permitAccepted || !formData.policyAccepted) {
      alert("Please accept the permit and cancellation policy.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/create-checkout", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error processing booking.");
    }

    setLoading(false);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      
      {/* BASIC INFO */}
      <div className="booking-grid">
        <div className="booking-field">
          <label>Name</label>
          <input
            name="name"
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>

        <div className="booking-field">
          <label>Phone</label>
          <input
            name="phone"
            onChange={handleChange}
            required
            placeholder="Best number to reach you"
          />
        </div>
      </div>

      <div className="booking-grid">
        <div className="booking-field">
          <label>Email</label>
          <input
            name="email"
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="booking-field">
          <label>Preferred Date</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="booking-grid">
        <div className="booking-field">
          <label>Preferred Time</label>
          <select name="time" onChange={handleChange} required>
            <option value="">Select a time</option>
            <option>5:30 PM</option>
            <option>6:00 PM</option>
            <option>6:30 PM</option>
            <option>7:00 PM</option>
            <option>7:30 PM</option>
            <option>8:00 PM</option>
          </select>
        </div>

        <div className="booking-field">
          <label>Package</label>
          <select name="package" onChange={handleChange} required>
            <option value="">Select a package</option>
            <option>Couples Burn ($325)</option>
            <option>Basic Bonfire ($425)</option>
            <option>Popular Bonfire ($525)</option>
            <option>Elite Bonfire ($625)</option>
          </select>
        </div>
      </div>

      <div className="booking-grid">
        <div className="booking-field">
          <label>Guest Count</label>
          <input
            name="guests"
            type="number"
            min="1"
            onChange={handleChange}
            placeholder="How many guests?"
          />
        </div>

        <div className="booking-field">
          <label>Location</label>
          <input
            name="location"
            onChange={handleChange}
            placeholder="Destin, 30A, Rosemary, etc."
          />
        </div>
      </div>

      <div className="booking-field">
        <label>Anything else we should know?</label>
        <textarea
          name="notes"
          rows="4"
          onChange={handleChange}
          placeholder="Special requests, celebrations, preferred beach access, etc."
        />
      </div>

      {/* PAYMENT OPTIONS */}
      <div className="booking-payment">
        <h3>Select Payment Option</h3>

        <label className="payment-option">
          <input
            type="radio"
            name="paymentOption"
            value="deposit"
            checked={formData.paymentOption === "deposit"}
            onChange={handleChange}
          />
          <span>
            Reserve with <strong>$160 Permit Deposit</strong>
          </span>
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="paymentOption"
            value="full"
            checked={formData.paymentOption === "full"}
            onChange={handleChange}
          />
          <span>Pay in Full Now</span>
        </label>
      </div>

      {/* POLICY BOX */}
      <div className="booking-policy-box">
        <h4>Permit & Booking Policy</h4>
        <ul>
          <li>A $160 deposit is required to reserve your bonfire date.</li>
          <li>This deposit covers the required beach fire permit.</li>
          <li>Once the permit has been pulled, the $160 deposit is non-refundable.</li>
          <li>Permits are typically secured about 2 weeks before your event, or sooner if required.</li>
          <li>The remaining balance will be confirmed separately unless paid in full.</li>
        </ul>
      </div>

      {/* REQUIRED CHECKBOXES */}
      <label className="booking-checkbox">
        <input
          type="checkbox"
          name="permitAccepted"
          checked={formData.permitAccepted}
          onChange={handleChange}
          required
        />
        <span>
          I understand the $160 payment is a permit deposit required to reserve my bonfire date.
        </span>
      </label>

      <label className="booking-checkbox">
        <input
          type="checkbox"
          name="policyAccepted"
          checked={formData.policyAccepted}
          onChange={handleChange}
          required
        />
        <span>
          I understand that once the permit has been pulled, the $160 deposit becomes non-refundable.
        </span>
      </label>

      {/* SUBMIT BUTTON */}
      <button type="submit" className="booking-submit" disabled={loading}>
        {loading
          ? "Redirecting..."
          : formData.paymentOption === "full"
          ? "Continue to Full Payment"
          : "Reserve with $160 Deposit"}
      </button>

      {/* NOTE */}
      <div className="booking-note">
        Secure your requested date with a permit deposit or pay in full now. We’ll confirm all details personally by phone or text.
      </div>

    </form>
  );
}