import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const faqs = [
  {
    question: "What problem does TrustBill solve?",
    answer:
      "TrustBill allows users to manage and pay all utility bills from one secure platform without visiting multiple service websites.",
  },
  {
    question: "Which utility bills can I pay using TrustBill?",
    answer:
      "You can pay electricity, gas, water, and internet bills through TrustBill.",
  },
  {
    question: "Is login required to pay bills?",
    answer:
      "Yes. Login ensures secure payments, bill tracking, and access to your payment history.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. TrustBill uses secure authentication and protected routes to keep your data safe.",
  },
  {
    question: "Can I view my previous payments?",
    answer:
      "Yes. All payment history is available in your dashboard after login.",
  },
  {
    question: "What happens if a payment fails?",
    answer:
      "If a payment fails, the bill remains unpaid and you can retry the payment safely.",
  },
];

const FAQSection = () => {
  const { theme, colors } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const cardBg = theme === "dark" ? "#2A2E33" : "#F9FAFB";
  const border = theme === "dark" ? "#2A2E33" : "#E5E7EB";
  const text = theme === "dark" ? "text-gray-200" : "text-gray-900";
  const subText = theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className={`text-4xl font-bold text-center mb-10 ${text}`}>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{ backgroundColor: cardBg, borderColor: border }}
              className="rounded-xl border overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className={`w-full flex justify-between items-center p-5 text-left font-medium ${text} hover:bg-opacity-80 transition`}
              >
                {faq.question}
                <span
                  style={{ color: colors.primary }}
                  className={`text-2xl transition-transform ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {activeIndex === index && (
                <div className={`px-5 pb-5 ${subText}`}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
