import { useState } from "react";
import "./index.css";
import Services from "./components/Services";
import BookingModal from "./components/BookingModal";
import BookingForm from "./components/BookingForm";

function Navbar({ onOpenBooking }) {
  return (
    <nav className="navbar">
      <div className="logo">Badass Bonfires</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
        <button className="nav-cta" onClick={onOpenBooking}>
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="site-shell">
      <main className="hero">
        <img
          src="/BadassBon1.png"
          alt="Beach bonfire"
          className="hero-bg"
        />
        <div className="overlay"></div>

        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

        <div className="hero-content">
          <h1>Luxury Beach Bonfire Experience</h1>
          <p>On the Emerald Coast</p>
          <button
            className="hero-btn"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Your Experience
          </button>
        </div>
      </main>

      <section className="content-section" id="about">
        <div className="section-card">
          <h2>About</h2>
          <p>Styled beach bonfires designed for unforgettable nights.</p>
        </div>
      </section>

      <Services onOpenBooking={() => setIsBookingOpen(true)} />

      <section className="content-section" id="contact">
        <div className="section-card booking-section">
          <p className="booking-eyebrow">Reserve Your Date</p>
          <h2>Check Availability</h2>
          <p className="booking-subtext">
            Choose your preferred details below and we’ll call or text to confirm
            everything personally.
          </p>

          <BookingForm />
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}