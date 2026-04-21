import { useState } from "react";

const PACKAGE_PRICES = {
  "The Cozy Bonfire": 429,
  "The Sunset Circle": 529,
  "The Shoreline Social": 729,
  "The Bonfire Bash": 969,
};

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    packageName: "",
    guestCount: "",
    location: "",
    notes: "",
    policyAccepted: false,
    permitAccepted: false,
    paymentOption: "deposit",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.policyAccepted || !formData.permitAccepted) {
      alert("Please agree to the booking terms before continuing.");
      return;
    }

    if (!formData.packageName) {
      alert("Please select a package.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          eventDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          packageName: formData.packageName,
          packagePrice: PACKAGE_PRICES[formData.packageName],
          guestCount: formData.guestCount,
          location: formData.location,
          notes: formData.notes,
          paymentOption: formData.paymentOption,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong starting checkout.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-grid">
        <div className="booking-field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="booking-field">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Best number to reach you"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="booking-grid">
        <div className="booking-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="booking-field">
          <label>Preferred Date</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="booking-grid">
        <div className="booking-field">
          <label>Preferred Time</label>
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a time</option>
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
          <select
            name="packageName"
            value={formData.packageName}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a package</option>
            <option>The Cozy Bonfire</option>
            <option>The Sunset Circle</option>
            <option>The Shoreline Social</option>
            <option>The Bonfire Bash</option>
          </select>
        </div>
      </div>

      <div className="booking-grid">
        <div className="booking-field">
          <label>Guest Count</label>
          <input
            type="number"
            min="1"
            name="guestCount"
            placeholder="How many guests?"
            value={formData.guestCount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="booking-field">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Destin, 30A, Rosemary, etc."
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="booking-field">
        <label>Anything else we should know?</label>
        <textarea
          rows="5"
          name="notes"
          placeholder="Special requests, celebration details, preferred beach access, etc."
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <div className="booking-policy-box">
        <h3>Booking & Cancellation Policy</h3>
        <ul>
          <li>Beach location is subject to permit availability.</li>
          <li>Your requested date is not guaranteed until payment is completed.</li>
          <li>Deposits are applied toward your final booking total.</li>
          <li>Final confirmation and event details will be sent by phone or text.</li>
        </ul>
      </div>

      <div className="booking-payment-options">
        <label className="booking-radio">
          <input
            type="radio"
            name="paymentOption"
            value="deposit"
            checked={formData.paymentOption === "deposit"}
            onChange={handleChange}
          />
          <span>Reserve with deposit</span>
        </label>

        <label className="booking-radio">
          <input
            type="radio"
            name="paymentOption"
            value="full"
            checked={formData.paymentOption === "full"}
            onChange={handleChange}
          />
          <span>Pay in full</span>
        </label>
      </div>

      <label className="booking-checkbox">
        <input
          type="checkbox"
          name="permitAccepted"
          checked={formData.permitAccepted}
          onChange={handleChange}
        />
        <span>
          I understand beach location is subject to permit approval and availability.
        </span>
      </label>

      <label className="booking-checkbox">
        <input
          type="checkbox"
          name="policyAccepted"
          checked={formData.policyAccepted}
          onChange={handleChange}
        />
        <span>
          I have read and agree to the booking and cancellation policy.
        </span>
      </label>

      <div className="booking-note">
        Secure your requested date online and we’ll personally confirm the details by phone or text.
      </div>

      <button type="submit" className="booking-submit" disabled={loading}>
        {loading
          ? "Redirecting..."
          : formData.paymentOption === "full"
          ? "Continue to Full Payment"
          : "Reserve with Deposit"}
      </button>
    </form>
  );
}