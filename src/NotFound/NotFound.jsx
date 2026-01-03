import React from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        The bill or page you are looking for doesn’t exist, might have been paid
        already, or moved to a new section.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-[#438A7A] text-white rounded-lg hover:bg-[#3A7669] transition font-medium"
      >
        Go Back to Dashboard
      </button>
    </div>
  );
};

export default NotFoundPage;
