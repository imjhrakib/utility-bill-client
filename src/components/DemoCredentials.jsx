import React, { useState, useContext } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

const DemoCredentials = () => {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  return (
    <div
      className={`my-4 p-4 rounded-lg border transition-all ${
        theme === "dark"
          ? "bg-gray-800 border-gray-600 text-gray-200"
          : "bg-gray-100 border-gray-300 text-gray-800"
      }`}
    >
      {/* Header with toggle */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <p className="font-semibold text-[#438A7A]">Demo Login Credentials</p>
        {show ? <FiMinus size={18} /> : <FiPlus size={18} />}
      </div>

      {/* Content */}
      {show && (
        <div className="mt-2 space-y-1 text-sm">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <span className="select-all">test@best.com</span>
          </p>
          <p>
            <span className="font-medium">Password:</span>{" "}
            <span className="select-all">Rr@123456</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DemoCredentials;
