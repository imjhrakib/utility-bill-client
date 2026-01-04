import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    text: "This app made paying bills so simple and fast!",
    user: "John Doe",
    avatar: "https://i.ibb.co/0Jmshvb/avatar1.png",
  },
  {
    id: 2,
    text: "I love the notifications feature. Never missed a payment again!",
    user: "Jane Smith",
    avatar: "https://i.ibb.co/7XgK0Xc/avatar1.png",
  },
  {
    id: 3,
    text: "Managing my electricity and water bills in one place is a lifesaver!",
    user: "Michael Lee",
    avatar: "https://i.ibb.co/2dSxS5C/avatar1.png",
  },
  {
    id: 4,
    text: "The dashboard is very intuitive and easy to use. Highly recommended!",
    user: "Sara Williams",
    avatar: "https://i.ibb.co/XYt1fVn/avatar1.png",
  },
];

const Reviews = () => {
  const { theme, colors } = useContext(ThemeContext);

  const sectionBg = theme === "dark" ? "#1F2225" : "#F9FAFB";
  const cardBg = theme === "dark" ? "#2A2E33" : "#FFFFFF";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-900";
  const userColor = theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <section className="py-16 px-5" style={{ backgroundColor: sectionBg }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-10 ${textColor}`}>
          What Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              style={{ backgroundColor: cardBg }}
            >
              {/* Avatar */}
              <img
                src={review.avatar}
                alt={review.user}
                className="w-12 h-12 rounded-full mb-3 object-cover shadow-sm"
              />

              {/* Quote Icon */}
              <div className="text-2xl mb-3" style={{ color: colors.primary }}>
                <FaQuoteLeft />
              </div>

              {/* Review Text */}
              <p className={`italic text-center text-sm mb-3 ${textColor}`}>
                {review.text}
              </p>

              {/* User Name */}
              <h4 className={`font-semibold text-sm ${userColor}`}>
                – {review.user}
              </h4>

              <div className="text-2xl mt-2" style={{ color: colors.primary }}>
                <FaQuoteRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
