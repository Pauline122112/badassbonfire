
export default function Gallery() {
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
  ]

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-inner">
        <p className="section-eyebrow">Explore the Details</p>
        <h2>Gallery</h2>
        <p className="gallery-intro">
          From intimate setups to larger gatherings, every detail is styled to
          create a seamless and unforgettable beach experience.
        </p>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div className="gallery-card" key={photo.id}>
              <img src={photo.src} alt={photo.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}