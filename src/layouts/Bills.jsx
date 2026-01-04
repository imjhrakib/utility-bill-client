import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import BillCard from "../components/ui/BillCard";

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
    <div className="pt-20">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredBills.map((bill) => (
            <BillCard bill={bill} key={bill._id}></BillCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bills;
