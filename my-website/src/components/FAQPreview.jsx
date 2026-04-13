import { useState } from "react";
import { Link } from "react-router-dom";

const previewItems = [
  {
    question: "What’s included in the bonfire experience?",
    answer:
      "Each experience includes a fully prepared beach bonfire, comfortable seating, ambient lighting, and a styled setup ready when you arrive. We handle setup, fire management, and cleanup so you can relax and enjoy.",
  },
  {
    question: "How much do bonfire experiences start at?",
    answer:
      "Our beach bonfire experiences start at $429. Final pricing may vary depending on group size, location, and any custom upgrades.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "If conditions are unsafe, we’ll work with you to reschedule to the next available date. We monitor weather closely to keep your experience smooth and stress-free.",
  },
  {
    question: "How do I reserve my date?",
    answer:
      "Simply click ‘Check Availability’ or ‘Book Now,’ choose your preferred date, and submit your request. We’ll confirm everything and handle the rest.",
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-preview">
      <div className="faq-preview-header">
        <p className="faq-eyebrow">Before You Book</p>
        <h2>Quick Answers</h2>
        <p className="faq-preview-intro">
          A few things to know before reserving your beach bonfire experience.
        </p>
      </div>

      <div className="faq-preview-container">
        {previewItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </button>

              <div className="faq-answer-wrap">
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="faq-preview-footer">
        <Link to="/faq" className="faq-link">
          View all FAQs →
        </Link>
      </div>
    </section>
  );
}