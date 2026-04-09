import { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const photos = [
    { id: 15, src: "/images/smores1.jpg", alt: "S’mores and bonfire treats" },
    { id: 13, src: "/images/bon13.jpg", alt: "Signature bonfire experience" },
    { id: 14, src: "/images/catering1.jpg", alt: "Bonfire catering setup" },
    { id: 10, src: "/images/bon10.jpg", alt: "Luxury beach setup at sunset" },
    { id: 8, src: "/images/bon8.jpg", alt: "Beach bonfire details and decor" },
    { id: 1, src: "/images/bon1.jpg", alt: "Beach bonfire setup by the ocean" },
    { id: 7, src: "/images/bon7.jpg", alt: "Coastal bonfire experience" },
    { id: 5, src: "/images/bon5.jpg", alt: "Sunset beach bonfire setup" },
    { id: 11, src: "/images/bon11.jpg", alt: "Bonfire gathering by the water" },
  ];

  const goNext = () => {
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <>
      <section className="gallery-page">
        <div className="gallery-page-inner">
          <Link to="/" className="gallery-back-link">
            ← Back to Home
          </Link>

          <p className="gallery-eyebrow">Explore the Details</p>

          <h1 className="gallery-title">Gallery</h1>

          <p className="gallery-intro">
            From intimate setups to larger gatherings, every detail is styled to
            create a seamless and unforgettable beach experience.
          </p>

          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setSelectedIndex(index)}
                className="gallery-thumb-button"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="gallery-thumb-image"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="gallery-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="gallery-close-button"
            >
              ×
            </button>

            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="gallery-lightbox-image"
              onTouchStart={(e) => {
                e.target.dataset.startX = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                const startX = e.target.dataset.startX;
                const endX = e.changedTouches[0].clientX;

                if (!startX) return;

                const diff = startX - endX;

                if (diff > 50) {
                  goNext();
                } else if (diff < -50) {
                  goPrev();
                }
              }}
            />

            <div className="gallery-lightbox-controls">
              <button onClick={goPrev} className="gallery-nav-button">
                ← Previous
              </button>

              <button onClick={goNext} className="gallery-nav-button">
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}