import { useState } from "react";

export default function Services({ onOpenBooking }) {
  const [activeCard, setActiveCard] = useState(null);
  const [dismissedCard, setDismissedCard] = useState(null);

  const toggleCard = (index) => {
    setDismissedCard(null);
    setActiveCard((prev) => (prev === index ? null : index));
  };

  const packages = [
    {
      price: "$325",
      title: "Couples Burn",
      chairs: "Up to 6 chairs",
    },
    {
      price: "$425",
      title: "Basic Bonfire",
      chairs: "Up to 12 chairs",
      featured: true,
    },
    {
      price: "$525",
      title: "Popular Bonfire",
      chairs: "Up to 20 chairs",
    },
    {
      price: "$625",
      title: "Elite Bonfire",
      chairs: "Up to 29 chairs",
    },
  ];

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
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`package-card 
                ${pkg.featured ? "featured-package" : ""} 
                ${activeCard === index ? "active" : ""} 
                ${dismissedCard === index ? "dismissed" : ""}`}
              onMouseEnter={() => {
                if (dismissedCard !== index) {
                  setActiveCard(index);
                }
              }}
              onMouseLeave={() => {
                setActiveCard(null);
                setDismissedCard(null);
              }}
            >
              <img src="/BadassBon1.png" alt={pkg.title} />

              <button
                type="button"
                className="card-toggle"
                onClick={() => toggleCard(index)}
                aria-expanded={activeCard === index}
                aria-label={`Show details for ${pkg.title}`}
              >
                <span className="tap-hint">Tap for details</span>
              </button>

              <div className="package-content">
                <div className="package-price">{pkg.price}</div>
                <h3>{pkg.title}</h3>
                <p>{pkg.chairs}</p>
              </div>

              <div className="package-overlay">
                <button
                  type="button"
                  className="overlay-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard(null);
                    setDismissedCard(index);
                  }}
                >
                  ×
                </button>

                <h4>What’s Included</h4>
                <ul>
                  <li>Private beach bonfire setup</li>
                  <li>Comfortable seating arrangement</li>
                  <li>Tiki torches + ambient lighting</li>
                  <li>Complimentary s’mores</li>
                  <li>Full setup & cleanup</li>
                </ul>

                <button
                  type="button"
                  className="package-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking();
                  }}
                >
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}