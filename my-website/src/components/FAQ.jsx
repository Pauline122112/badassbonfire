import { useState } from "react"
import { useNavigate } from "react-router-dom"

const faqItems = [
  {
    question: "What’s included in the bonfire experience?",
    answer:
      "Our experiences are designed to feel effortless from the moment you arrive. Each setup includes a fully prepared beach bonfire, comfortable seating, ambient lighting, and a styled layout ready for your evening. We take care of setup, fire management, and cleanup so you can simply relax and enjoy.",
  },
  {
    question: "How much do your bonfire experiences cost?",
    answer:
      "Our beach bonfire experiences start at $429. Final pricing may vary depending on group size, location, and any add-ons or upgrades you choose for your setup.",
  },
  {
    question: "Can I customize my bonfire setup?",
    answer:
      "Absolutely. We offer upgrades and add-ons to help tailor the experience to your group, whether you’re planning a romantic evening, a family gathering, or a celebration with friends.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking as early as possible, especially during peak season. Sunset time slots are the most popular and tend to fill quickly. Last-minute bookings may be available depending on our schedule.",
  },
  {
    question: "Where do your bonfires take place?",
    answer:
      "We host bonfire experiences on approved beaches along the Emerald Coast, including Destin and surrounding areas. Locations are chosen based on availability, weather, and local regulations.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "If weather conditions are unsafe or unsuitable, we’ll work with you to reschedule your experience to the next available date. We monitor conditions closely so your evening stays as smooth and stress-free as possible.",
  },
  {
    question: "Can we bring our own food and drinks?",
    answer:
      "Yes, you’re welcome to bring your own food and beverages. Many guests like to bring snacks, drinks, or picnic-style items to make the evening even more personal.",
  },
  {
    question: "Do you handle setup and cleanup?",
    answer:
      "Yes. We handle everything from setup to cleanup. Your bonfire will be ready when you arrive, and once the experience is over, we take care of the rest.",
  },
  {
    question: "How do I reserve my date?",
    answer:
      "Booking is simple. Just head to the reservation page, choose your preferred date, and submit your request. Once confirmed, we’ll take care of the details from there.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const navigate = useNavigate()

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-page">
        <button
            className="faq-back"onClick={() => navigate(-1)}> ← Back
    </button>
      <div className="faq-hero">
        <p className="faq-eyebrow">Frequently Asked Questions</p>
        <h1>Everything You Need to Know</h1>
        <p className="faq-intro">
          From what’s included to how booking works, here are the details behind
          your Badass Bonfires experience.
        </p>
      </div>

      <div className="faq-container">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`faq-item ${isOpen ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className="faq-answer-wrap"
              >
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}