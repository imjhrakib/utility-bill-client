import React, { useContext } from "react";
import { BsEnvelope, BsPhone, BsGeoAlt, BsGlobe } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
  const { colors, theme } = useContext(ThemeContext);

  return (
    <div
      className="flex justify-center items-center min-h-screen px-4"
      style={{ backgroundColor: colors[theme].bg }}
    >
      <div
        className={`shadow-lg rounded-lg p-8 w-full max-w-md text-left border ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
        style={{
          backgroundColor: theme === "dark" ? "#1F2225" : "#FFFFFF",
          color: theme === "dark" ? colors.dark.text : "#1f2937",
        }}
      >
        <h2 className="text-2xl font-bold text-[#438A7A] mb-6 text-center">
          Contact TrustBill
        </h2>
        <p className="mb-6 text-center">
          For any inquiries, support, or questions about your utility bills,
          reach out directly:
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <BsEnvelope className="text-[#438A7A] w-5 h-5" />
            <span>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:jhrakib.dev@gmail.com"
                className="text-[#438A7A] hover:underline"
              >
                jhrakib.dev@gmail.com
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <BsPhone className="text-[#438A7A] w-5 h-5" />
            <span>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+880123456789"
                className="text-[#438A7A] hover:underline"
              >
                +880 123 456 789
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <BsGeoAlt className="text-[#438A7A] w-5 h-5" />
            <span>
              <strong>Address:</strong> 123 TrustBill St, Dhaka, Bangladesh
            </span>
          </div>

          <div className="flex items-center gap-3">
            <BsGlobe className="text-[#438A7A] w-5 h-5" />
            <span>
              <strong>Website:</strong>{" "}
              <a
                href="https://utility-bill-management.firebaseapp.com/"
                target="_blank"
                className="text-[#438A7A] hover:underline"
                rel="noreferrer"
              >
                TrustBill
              </a>
            </span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() =>
              (window.location.href = "mailto:jhrakib.dev@gmail.com")
            }
            className="mt-6 px-6 py-3 bg-[#438A7A] text-white rounded-lg hover:bg-[#3A7669] transition font-medium"
          >
            Email Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
