import BookingForm from "./BookingForm";

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="booking-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h2>Check Availability</h2>
        <p className="booking-subtext">
          Choose your preferred details below and we’ll call or text to confirm
          everything personally.
        </p>

        <BookingForm />

        <a href="tel:8507061325" className="call-button">
          <span className="call-text">
            <span>Prefer to book by phone?</span>
            <span className="call-now">CALL NOW</span>
          </span>
        </a>
      </div>
    </div>
  );
}