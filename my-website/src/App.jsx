import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Badass Bonfires</div>
      <div className="nav-links">
        <a href="#">Experiences</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
        <button className="nav-cta">Book Now</button>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div>
      {/* HERO */}
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

      {/* SECTIONS BELOW */}
      <section id="about">About section</section>
      <section id="services">Services section</section>
      <section id="gallery">Gallery section</section>
      <section id="reviews">Reviews section</section>
      <section id="contact">Contact section</section>
    </div>
  );
}