import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

const Bills = () => {
  const bills = useLoaderData();

  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  const filteredBills =
    category === "all"
      ? bills
      : bills.filter(
          (bill) => bill.category.toLowerCase() === category.toLowerCase()
        );

  return (
    <div>
      <Helmet>
        <title>Bills || TrustBill</title>
      </Helmet>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">All Bills</h1>
        {/* Category Filter */}
        <div className="mb-4">
          <label className="mr-2 font-semibold">Filter by Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="all">All</option>
            <option value="electricity">Electricity</option>
            <option value="water">Water</option>
            <option value="gas">Gas</option>
            <option value="internet">Internet</option>
          </select>
        </div>
        {/* Bills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBills.map((bill) => (
            <div
              key={bill._id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={bill.image}
                alt={bill.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-xl font-bold">{bill.title}</h2>
              <p>Category: {bill.category}</p>
              <p>Location: {bill.location}</p>
              <p>Amount: ${bill.amount}</p>
              <button
                onClick={() => navigate(`/bills/${bill._id}`)}
                className="mt-2 w-full py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bills;
