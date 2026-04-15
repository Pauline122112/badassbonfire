
import { Routes, Route, Link } from "react-router-dom"
import "./index.css"
import Services from "./components/Services"
import BookingModal from "./components/BookingModal"
import BookingForm from "./components/BookingForm"
import ReelShowcase from "./components/ReelShowcase"
import Gallery from "./components/Gallery"
import { useEffect, useState } from "react"
import FAQ from "./components/FAQ"
import ScrollToTop from "./components/ScrollToTop"
import "./styles/layout.css"
import "./styles/navbar.css"
import FAQPreview from "./components/FAQPreview"


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
     <div
        className="logo"
        onClick={() => {
          if (window.location.pathname !== "/") {
            window.location.href = "/";
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
  }}
>
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
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>

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

      {menuOpen && (
        <button
          className="menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          ×
        </button>
      )}
    </nav>
  );
}

function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)
  const [showMobileCta, setShowMobileCta] = useState(false)
 useEffect(() => {
  const handleScroll = () => {
    setShowTopButton(window.scrollY > 300);
    setShowMobileCta(window.scrollY > 350);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="site-shell">
      <main className="hero">
        <video
          className="hero-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/homepage.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>

        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

 <div className="hero-copy">
  <h1>
    Luxury Beach
    <br />
    Bonfire Experience
  </h1>
  <p>On the Emerald Coast</p>
</div>

<div className="hero-cta">
  <p className="price">Starting from $325</p>
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
            everything personally.</p>
        <BookingForm />

  </div>   {/* 👈 THIS WAS MISSING */}
</section>

<FAQPreview />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      

      <section className="content-section" id="about">
        <div className="section-card">
          <h2>About</h2>
          <p>With a passion for creating unforgettable moments, Badass Bonfires is a proud Veteran and locally owned business, we're dedicated to delivering elevated beach experiences along Destin and the Emerald Coast.<br></br><br></br> We take pride in every detail, offering a seamless, fully managed setup backed by our Satisfaction Guarantee—so your experience exceeds expectations from start to finish.<br></br><br></br>Our private, reservation-based experiences are designed to bring warmth, connection, and effortless luxury to any occasion. Whether it’s a relaxed evening under the stars or a celebration with friends and family, you can count on us for exceptional service, thoughtful design, and a truly memorable atmosphere.</p>
        </div>
      </section>
      <button
  className={`back-to-top ${showTopButton ? "show" : ""}`}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  aria-label="Back to top"
>
  ↑
</button>
<a href="#contact"
  className={`mobile-cta ${showMobileCta ? "show" : ""}`}
>Check Availability
</a>
    </div>
  );
}

function GalleryPage() {
  return <Gallery />;
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}