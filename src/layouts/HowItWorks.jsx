import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMobileAlt, FaFileInvoiceDollar, FaBell } from "react-icons/fa";

const steps = [
  { id: 1, icon: <FaFileInvoiceDollar />, title: "Select Bill" },
  { id: 2, icon: <FaMobileAlt />, title: "Make Payment" },
  { id: 3, icon: <FaBell />, title: "Get Confirmation" },
];

const HowItWorks = () => {
  const { theme, colors } = useContext(ThemeContext);
  const cardBg = theme === "dark" ? "#2A2E33" : "#F9FAFB";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-900";

  return (
    <section className="py-16 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-10 ${textColor}`}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-6"
              style={{ backgroundColor: cardBg }}
            >
              <div className="text-4xl mb-4" style={{ color: colors.primary }}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
