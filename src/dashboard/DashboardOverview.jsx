import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardOverview = () => {
  const { theme, colors } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetch(
        `https://utility-bill-server.vercel.app/myBills?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setBills(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);

  if (loading) return <p className="text-center py-8">Loading dashboard...</p>;
  if (!bills.length)
    return <p className="text-center py-8">No paid bills found.</p>;

  const cardBg = theme === "dark" ? "#2A2E33" : "#F9FAFB";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-900";
  const borderColor = theme === "dark" ? "#33383F" : "#E5E7EB";

  const barData = [{ name: "Paid Bills", count: bills.length }];

  const lineData = bills.map((b) => ({ name: b.date, amount: b.amount }));

  const pieData = [{ name: "Paid", value: bills.length }];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className={`text-3xl sm:text-4xl font-bold mb-8 ${textColor}`}>
        Dashboard Overview
      </h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div
          className="rounded-2xl shadow p-6 flex flex-col items-center"
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
          }}
        >
          <p className="text-xl font-bold" style={{ color: colors.primary }}>
            {user?.displayName || "User"}
          </p>
          <p className={textColor}>User Name</p>
        </div>
        <div
          className="rounded-2xl shadow p-6 flex flex-col items-center"
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
          }}
        >
          <p className="text-xl font-bold" style={{ color: colors.primary }}>
            {bills.length}
          </p>
          <p className={textColor}>Total Paid Bills</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div
          className="p-4 rounded-2xl shadow"
          style={{ backgroundColor: cardBg }}
        >
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
            Paid Bills Overview
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis
                dataKey="name"
                stroke={theme === "dark" ? "#E5E7EB" : "#1F2937"}
              />
              <YAxis stroke={theme === "dark" ? "#E5E7EB" : "#1F2937"} />
              <Tooltip />
              <Bar dataKey="count" fill={colors.primary} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          className="p-4 rounded-2xl shadow"
          style={{ backgroundColor: cardBg }}
        >
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
            Paid Bill Trends
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis
                dataKey="name"
                stroke={theme === "dark" ? "#E5E7EB" : "#1F2937"}
              />
              <YAxis stroke={theme === "dark" ? "#E5E7EB" : "#1F2937"} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke={colors.primary} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className="p-4 rounded-2xl shadow md:col-span-2"
          style={{ backgroundColor: cardBg }}
        >
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
            Paid Bills Pie
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              >
                <Cell fill={colors.primary} />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
