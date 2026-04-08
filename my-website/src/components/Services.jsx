export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="packages-section">
      <div className="packages-container">
        <p className="section-eyebrow">Services</p>
        <h2>Choose Your Beach Bonfire Experience</h2>
        <p className="section-intro">
          From cozy evenings to larger group gatherings, we create styled beach
          bonfire setups that are ready when you arrive.
        </p>

        <div className="packages-grid">
          <div className="package-card">
            <img src="/BadassBon1.png" alt="bonfire" />
            <div className="package-content">
              <div className="package-price">$429</div>
              <h3>The Cozy Bonfire</h3>
              <p>Up to 6 chairs</p>
            </div>
            <div className="package-overlay">
              <h4>What’s Included</h4>
              <ul>
                <li>Private beach bonfire setup</li>
                <li>Comfortable seating arrangement</li>
                <li>Tiki torches + ambient lighting</li>
                <li>Complimentary s’mores</li>
                <li>Full setup & cleanup</li>
              </ul>
              <button className="package-button" onClick={onOpenBooking}>
                Check Availability
              </button>
            </div>
          </div>

          <div className="package-card featured-package">
            <img src="/BadassBon1.png" alt="bonfire" />
            <div className="package-content">
              <div className="package-price">$529</div>
              <h3>The Sunset Circle</h3>
              <p>Up to 12 chairs</p>
            </div>
            <div className="package-overlay">
              <h4>What’s Included</h4>
              <ul>
                <li>Private beach bonfire setup</li>
                <li>Comfortable seating arrangement</li>
                <li>Tiki torches + ambient lighting</li>
                <li>Complimentary s’mores</li>
                <li>Full setup & cleanup</li>
              </ul>
              <button className="package-button" onClick={onOpenBooking}>
                Check Availability
              </button>
            </div>
          </div>

          <div className="package-card">
            <img src="/BadassBon1.png" alt="bonfire" />
            <div className="package-content">
              <div className="package-price">$729</div>
              <h3>The Shoreline Social</h3>
              <p>Up to 20 chairs</p>
            </div>
            <div className="package-overlay">
              <h4>What’s Included</h4>
              <ul>
                <li>Private beach bonfire setup</li>
                <li>Comfortable seating arrangement</li>
                <li>Tiki torches + ambient lighting</li>
                <li>Complimentary s’mores</li>
                <li>Full setup & cleanup</li>
              </ul>
              <button className="package-button" onClick={onOpenBooking}>
                Check Availability
              </button>
            </div>
          </div>

          <div className="package-card">
            <img src="/BadassBon1.png" alt="bonfire" />
            <div className="package-content">
              <div className="package-price">$829</div>
              <h3>The Bonfire Bash</h3>
              <p>Up to 29 chairs</p>
            </div>
            <div className="package-overlay">
              <h4>What’s Included</h4>
              <ul>
                <li>Private beach bonfire setup</li>
                <li>Comfortable seating arrangement</li>
                <li>Tiki torches + ambient lighting</li>
                <li>Complimentary s’mores</li>
                <li>Full setup & cleanup</li>
              </ul>
              <button className="package-button" onClick={onOpenBooking}>
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}