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
    <div className="site-shell">
      
      <main className="hero">
        <img
          src="/BadassBon1.png"
          alt="Beach bonfire"
          className="hero-bg"
        />

        <div className="overlay"></div>

        {/* NAVBAR goes here */}
        <Navbar />

        <div className="hero-content">
          <h1>Luxury Beach Bonfire Experiences</h1>
          <p>On the Emerald Coast</p>
          <button className="hero-btn">Book Your Experience</button>
        </div>
      </main>

      <section className="content-section" id="about">
        <div className="section-card">
          <h2>About</h2>
          <p>Styled beach bonfires designed for unforgettable nights.</p>
        </div>
      </section>

      <section className="content-section" id="services">
        <div className="section-card">
          <Services />
        </div>
      </section>

    </div>
  );
}