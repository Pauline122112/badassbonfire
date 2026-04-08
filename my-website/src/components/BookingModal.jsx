import BookingForm from "./BookingForm";

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <p className="booking-eyebrow">Reserve Your Date</p>
        <h2>Check Availability</h2>
        <p className="booking-subtext">
          Choose your preferred details below and we’ll call or text to confirm
          everything personally.
        </p>

        <BookingForm />
      </div>
    </div>
  );
}