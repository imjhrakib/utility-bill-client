import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BsLightningCharge, BsListCheck, BsBell } from "react-icons/bs";

const features = [
  {
    id: 1,
    title: "Fast Payments",
    description:
      "Pay your electricity, water, gas, or internet bills instantly with secure transactions.",
    icon: <BsLightningCharge size={36} />,
  },
  {
    id: 2,
    title: "Manage Easily",
    description:
      "Track all your bills, payment history, and usage in one organized dashboard.",
    icon: <BsListCheck size={36} />,
  },
  {
    id: 3,
    title: "Timely Notifications",
    description:
      "Get reminders for upcoming due dates so you never miss a payment.",
    icon: <BsBell size={36} />,
  },
];

const Features = () => {
  const { theme, colors } = useContext(ThemeContext);
  const cardBg = theme === "dark" ? "#2A2E33" : "#F9FAFB";
  const titleColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 ${titleColor}`}>Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
              style={{ backgroundColor: cardBg }}
            >
              <div
                className="mb-4 p-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.primary + "33" }} // subtle primary color bg
              >
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-semibold mb-2 ${titleColor}`}>
                {feature.title}
              </h3>
              <p className={`text-center ${textColor}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
