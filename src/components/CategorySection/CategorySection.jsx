import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router";

const categories = [
  {
    id: 1,
    name: "Electricity",
    image: "https://i.ibb.co/4n6sNwKY/electricity.jpg",
  },
  {
    id: 2,
    name: "Gas",
    image: "https://i.ibb.co/HLFTvSmD/gas.jpg",
  },
  {
    id: 3,
    name: "Water",
    image: "https://i.ibb.co/4nFY3B6F/water.jpg",
  },
  {
    id: 4,
    name: "Internet",
    image: "https://i.ibb.co/SDT99Jhw/internet.jpg",
  },
];

const CategorySection = () => {
  const { theme, colors } = useContext(ThemeContext);
  const cardBg = theme === "dark" ? "#2A2E33" : "#F9FAFB";
  const borderColor = theme === "dark" ? "#33383F" : "#E5E7EB";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-900";
  const navigate = useNavigate();
  return (
    <div className="mt-16 px-5 mb-16">
      <h2 className={`text-4xl font-bold text-center mb-10 ${textColor}`}>
        Our Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => navigate("/bills")}
            className={`rounded-2xl shadow-lg hover:shadow-2xl transform border  hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center p-6`}
            style={{ backgroundColor: cardBg, borderColor: borderColor }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-inner">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className={`text-xl font-semibold hover:text-${colors.primary} transition-colors duration-300 ${textColor}`}
            >
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
