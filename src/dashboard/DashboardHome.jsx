import React from "react";
import { Link } from "react-router";

const DashboardHome = () => {
  return (
    <div className="p-10 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#438A7A]">
        TrustBill Dashboard
      </h2>

      <div className="flex flex-col gap-4">
        {/* Home */}
        <Link
          to="/"
          className="px-6 py-3 bg-[#438A7A] text-white rounded-lg text-center hover:bg-[#35715f] transition"
        >
          Home
        </Link>

        {/* My Pay Bills */}
        <Link
          to="/dashboard/myPayBills"
          className="px-6 py-3 bg-[#2C7A7B] text-white rounded-lg text-center hover:bg-[#1e5b5c] transition"
        >
          My Pay Bills
        </Link>

        {/* Statistics */}
        <Link
          to="/dashboard/statistics"
          className="px-6 py-3 bg-[#63C4C9] text-white rounded-lg text-center hover:bg-[#48aab0] transition"
        >
          Statistics
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
