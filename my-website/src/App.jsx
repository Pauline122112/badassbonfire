
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
      <div className="logo">
  <img src="/BadassLogo1.png" alt="Badass Bonfires logo" />
</div>

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
  {menuOpen && (
    <button
      className="menu-close"
      onClick={() => setMenuOpen(false)}
      aria-label="Close navigation menu"
    >
      ×
    </button>
  )}

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
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

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
          <p>With a passion for creating unforgettable moments, we at Badass Bonfires are dedicated to providing top-notch beach experience in Destin and its neighboring areas. As a locally owned business, we take pride in offering a Satisfaction Guarantee to ensure every experience exceeds expectations. Our services, available by appointment, are designed to bring warmth and joy to your gatherings, making any occasion truly special. From cozy nights under the stars to lively celebrations with loved ones, we are committed to delivering exceptional service that you can rely on. Let us light up your events with our expertise and commitment to customer satisfaction.</p>
        </div>
      </section>
      <button
  className={`back-to-top ${showTopButton ? "show" : ""}`}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  aria-label="Back to top"
>
  ↑
</button>
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