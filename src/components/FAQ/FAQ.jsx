import { useState } from "react";
import faqData from "../../data/faqs.json";
import "./FAQ.css";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        <span>Got Questions?</span> We've got answers
      </h2>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={faq.id}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>

              <span className="faq-icon">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
