import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaGooglePay,
  FaAmazonPay,
} from "react-icons/fa";

const sponsors = [
  { id: 1, name: "Visa", icon: <FaCcVisa /> },
  { id: 2, name: "Mastercard", icon: <FaCcMastercard /> },
  { id: 3, name: "PayPal", icon: <FaPaypal /> },
  { id: 4, name: "Google Pay", icon: <FaGooglePay /> },
  { id: 5, name: "Amazon Pay", icon: <FaAmazonPay /> },
];

const SponsorSection = () => {
  const { theme } = useContext(ThemeContext);

  const bg = theme === "dark" ? "#1F2225" : "#F9FAFB";
  const iconColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const textColor = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const headingColor = theme === "dark" ? "text-gray-200" : "text-gray-900";

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className={`text-4xl font-bold ${headingColor}`}>
          Our Trusted Partners
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-16 animate-marquee w-max">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[160px]"
            >
              <div
                className={`text-6xl ${iconColor} hover:text-[#438A7A] transition-colors duration-300`}
              >
                {sponsor.icon}
              </div>
              <p className={`mt-2 text-sm ${textColor}`}>{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
