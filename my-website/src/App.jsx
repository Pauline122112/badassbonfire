import './App.css'

function App() {
  return (
    <>
      <header className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/bonfire-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <nav className="navbar">
          <div className="logo">Badass Bonfires</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#packages">Packages</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Destin • 30A • Panama City Beach</p>
          <h1>Luxury Beach Bonfire Experiences on the Emerald Coast</h1>
          <p className="hero-text">
            We create unforgettable beach bonfire nights with full setup,
            styling, and cleanup so you can just show up and enjoy.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#contact">Book Now</a>
            <a className="btn btn-secondary" href="#packages">View Packages</a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="container">
            <h2>Beach nights done right</h2>
            <p>
              Badass Bonfires creates curated beach bonfire setups for couples,
              families, friend groups, birthdays, bachelorettes, and special
              celebrations across the Florida panhandle.
            </p>
          </div>
        </section>

        <section className="section alt" id="packages">
          <div className="container">
            <h2>Packages</h2>
            <div className="card-grid">
              <div className="card">
                <h3>The Cozy Fire</h3>
                <p>Perfect for couples and smaller groups.</p>
                <p className="price">Starting at $425</p>
              </div>
              <div className="card">
                <h3>The Sunset Circle</h3>
                <p>Our most popular setup for families and friends.</p>
                <p className="price">Starting at $525</p>
              </div>
              <div className="card">
                <h3>The Bonfire Bash</h3>
                <p>Great for celebrations and larger parties.</p>
                <p className="price">Custom pricing</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              <img src="/bonfire-1.jpg" alt="Beach bonfire setup" />
              <img src="/bonfire-2.jpg" alt="Bonfire seating setup" />
              <img src="/bonfire-3.jpg" alt="Evening beach bonfire" />
              <img src="/bonfire-4.jpg" alt="Guests around a beach bonfire" />
            </div>
          </div>
        </section>

        <section className="section alt" id="contact">
          <div className="container">
            <h2>Ready to book?</h2>
            <p>
              Tell us your date, beach location, and group size and we’ll help
              create the perfect bonfire experience.
            </p>
            <div className="hero-buttons">
              <a className="btn btn-primary" href="mailto:hello@badassbonfires.com">
                Email Us
              </a>
              <a className="btn btn-secondary" href="tel:+18505551234">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App