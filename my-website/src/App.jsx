
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Services from "./components/Services";
import BookingModal from "./components/BookingModal";
import BookingForm from "./components/BookingForm";
import ReelShowcase from "./components/ReelShowcase";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";

function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="logo">Badass Bonfires</div>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>

      </button>

<div className={`nav-links ${menuOpen ? "open" : ""}`}>
  <button
    className="menu-close"
    onClick={() => setMenuOpen(false)}
    aria-label="Close navigation menu"
  >
    ×
  </button>

  <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
  <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
  <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

  <button
    className="nav-cta"
    onClick={() => {
      setMenuOpen(false);
      onOpenBooking();
    }}
  >
    Book Now
  </button>
</div>
    </nav>
  );
}

function HomePage() {
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
          <h1>Luxury Beach Bonfire Experience starting from $325</h1>
          <p>On the Emerald Coast</p>
          <button
            className="hero-btn"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Your Experience
          </button>
        </div>
      </main>

      

      <Services onOpenBooking={() => setIsBookingOpen(true)} />
<ReelShowcase />
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

      

      <section className="content-section" id="about">
        <div className="section-card">
          <h2>About</h2>
          <p>Styled beach bonfires designed for unforgettable nights.</p>
        </div>
      </section>
    </div>
  );
}

function GalleryPage() {
  return <Gallery />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}