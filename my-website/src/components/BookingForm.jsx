export default function BookingForm() {
  return (
    <form className="booking-form">
      <div className="booking-grid">
        <div className="booking-field">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>

        <div className="booking-field">
          <label>Phone</label>
          <input type="tel" placeholder="Best number to reach you" />
        </div>
      </div>

      <div className="booking-grid">
        <div className="booking-field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="booking-field">
          <label>Preferred Date</label>
          <input type="date" />
        </div>
      </div>

      <div className="booking-grid">
        <div className="booking-field">
          <label>Preferred Time</label>
          <select defaultValue="">
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
          <select defaultValue="">
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
          <input type="number" min="1" placeholder="How many guests?" />
        </div>

        <div className="booking-field">
          <label>Location</label>
          <input type="text" placeholder="Destin, 30A, Rosemary, etc." />
        </div>
      </div>

      <div className="booking-field">
        <label>Anything else we should know?</label>
        <textarea
          rows="5"
          placeholder="Special requests, celebration details, preferred beach access, etc."
        ></textarea>
      </div>

      <div className="booking-note">
        This is a request only — we’ll personally confirm your bonfire by phone
        or text.
      </div>

      <button type="submit" className="booking-submit">
        Request Booking
      </button>
    </form>
  );
}