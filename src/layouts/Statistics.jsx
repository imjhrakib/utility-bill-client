import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const stats = [
  { id: 1, value: "10K+", label: "Users" },
  { id: 2, value: "50K+", label: "Bills Processed" },
  { id: 3, value: "98%", label: "On-time Payments" },
  { id: 4, value: "24/7", label: "Support" },
];

const Statistics = () => {
  const { theme, colors } = useContext(ThemeContext);

  const cardBg = theme === "dark" ? "#2A2E33" : "#F9FAFB";
  const borderColor = theme === "dark" ? "#33383F" : "#E5E7EB";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-900";

  return (
    <div className="mt-16 px-5 mb-16">
      <h2 className={`text-4xl font-bold text-center mb-10 ${textColor}`}>
        TrustBill by the Numbers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`rounded-2xl shadow-lg hover:shadow-2xl transform border hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-6`}
            style={{ backgroundColor: cardBg, borderColor: borderColor }}
          >
            <p
              className="text-3xl sm:text-4xl font-bold mb-2"
              style={{ color: colors.primary }}
            >
              {stat.value}
            </p>
            <p className={`text-center text-sm sm:text-base ${textColor}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
