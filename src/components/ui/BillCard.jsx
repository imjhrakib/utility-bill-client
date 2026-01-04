import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";

const BillCard = ({ bill }) => {
  const navigate = useNavigate();
  const { theme, colors } = useContext(ThemeContext);

  // Colors based on theme
  const bgColor = theme === "dark" ? "#2A2E33" : "#F9FAFB";
  const borderColor = theme === "dark" ? "#33383F" : "#E5E7EB";
  const titleColor = theme === "dark" ? "text-white" : "text-gray-900";
  const labelColor = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const valueColor = theme === "dark" ? "text-gray-200" : "text-gray-800";

  return (
    <div
      key={bill._id}
      className={`p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col border`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {/* Image */}
      <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
        <img
          src={bill.image}
          alt={bill.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title */}
      <h2
        className={`text-xl sm:text-2xl font-semibold mb-2 truncate ${titleColor}`}
      >
        {bill.title}
      </h2>

      {/* Details */}
      <div className={`text-sm sm:text-base space-y-1 mb-4`}>
        <p className={`${labelColor}`}>
          <span className={`font-medium ${valueColor}`}>Category:</span>{" "}
          {bill.category}
        </p>
        <p className={`${labelColor}`}>
          <span className={`font-medium ${valueColor}`}>Location:</span>{" "}
          {bill.location}
        </p>
        <p className={`${labelColor}`}>
          <span className={`font-medium ${valueColor}`}>Amount:</span> $
          {bill.amount}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate(`/bills/${bill._id}`)}
        className="mt-auto w-full py-2 rounded-xl font-medium shadow-lg transition bg-[#438A7A] hover:bg-[#3A7669] text-white duration-300"
      >
        See Details
      </button>
    </div>
  );
};

export default BillCard;
