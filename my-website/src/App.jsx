import "./App.css";
import Services from "./components/Services";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Badass Bonfires</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
        <button className="nav-cta">Book Now</button>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div>
      <main className="hero">
        <img src="/BadassBon1.png" alt="Beach bonfire" className="hero-bg" />
        <div className="overlay"></div>
        <Navbar />
        <div className="hero-content">
          <h1>Luxury Beach Bonfire Experiences</h1>
          <p>On the Emerald Coast</p>
          <button>Book Your Experience</button>
        </div>
      </main>

      <section id="about">About section</section>
      <Services />
      <section id="gallery">Gallery section</section>
      <section id="reviews">Reviews section</section>
      <section id="contact">Contact section</section>
    </div>
  );
}