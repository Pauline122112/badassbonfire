export default function ReelShowcase() {
  const reels = [
    {
      id: 1,
      src: "/videos/badassReel1.mp4",
      title: "Beach Setup",
    },
    {
      id: 2,
      src: "/videos/badassReel2.mp4",
      title: "Bonfire Experience",
    },
    {
      id: 3,
      src: "/videos/badassReel3.mp4",
      title: "Luxury Coastal Nights",
    },
  ];

  return (
    <section className="reel-showcase" id="gallery">
      <div className="reel-showcase-inner">
        <p className="section-eyebrow">See the Experience</p>
        <h2>Bonfires in Motion</h2>
        <p className="reel-intro">
          A closer look at the atmosphere, setup, and unforgettable moments we
          create on the Emerald Coast.
        </p>

        <div className="reel-grid">
          {reels.map((reel) => (
            <div className="reel-card" key={reel.id}>
              <div className="reel-frame">
                <video
                  src={reel.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="reel-video"
                />
              </div>
              <p className="reel-title">{reel.title}</p>
            </div>325
          ))}
        </div>
      </div>
    </section>
  );
}