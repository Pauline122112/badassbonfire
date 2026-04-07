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

function Hero() {
  return (
    <main className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://videos.pexels.com/video-files/857195/857195-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Luxury Beach Bonfire Experiences</h1>
        <p>On the Emerald Coast</p>
        <button className="cta">Book Your Experience</button>
      </div>
    </main>
  );
}

function WhyUs() {
  return (
    <section className="why">
      <h2>Effortless, Elevated, Unforgettable</h2>
      <p>
        We handle everything — setup, styling, and cleanup — so you can
        relax and enjoy the moment.
      </p>

      <div className="why-grid">
        <div>Full Setup & Cleanup</div>
        <div>Custom Styling</div>
        <div>Premium Experience</div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
    </>
  );
}

export default App;