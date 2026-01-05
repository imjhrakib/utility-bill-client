import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const DashboardStatistics = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetch(
        `https://utility-bill-server.vercel.app/myBills?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setBills(data); // dynamic bills from server
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (!bills.length) return <p className="p-4">No bills found.</p>;

  const totalPaid = bills.reduce((acc, b) => acc + b.amount, 0);

  return (
    <div
      className={`p-4 max-w-4xl mx-auto min-h-[80vh] transition-colors duration-300 ${
        isDark ? "bg-[#17191A] text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Your Bills</h2>

      {/* Summary */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <div
          className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
            isDark
              ? "bg-green-800 text-green-100"
              : "bg-green-100 text-green-800"
          }`}
        >
          Total Paid: ৳{totalPaid}
        </div>

        <div
          className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
            isDark ? "bg-blue-800 text-blue-100" : "bg-blue-100 text-blue-800"
          }`}
        >
          Total Bills: {bills.length}
        </div>
      </div>

      {/* Bills Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-300 transition-colors duration-300">
        <table
          className={`min-w-full border-collapse transition-colors duration-300 ${
            isDark ? "text-gray-200" : "text-gray-900"
          }`}
        >
          <thead
            className={`transition-colors duration-300 ${
              isDark ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-700"
            }`}
          >
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Bill Name</th>
              <th className="py-2 px-4 border-b">Amount (৳)</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, idx) => (
              <tr
                key={bill.id}
                className={`text-center transition-colors duration-300 ${
                  idx % 2 === 0
                    ? isDark
                      ? "bg-gray-900"
                      : "bg-gray-50"
                    : isDark
                    ? "bg-gray-800"
                    : "bg-white"
                }`}
              >
                <td className="py-2 px-4 border-b">{idx + 1}</td>
                <td className="py-2 px-4 border-b">{bill.name}</td>
                <td className="py-2 px-4 border-b">{bill.amount}</td>
                <td className="py-2 px-4 border-b font-semibold text-green-600">
                  Paid
                </td>
                <td className="py-2 px-4 border-b">{bill.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardStatistics;
