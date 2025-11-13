import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";

const RecentBills = ({ recentBillsPromise }) => {
  const navigate = useNavigate();
  const recentBills = use(recentBillsPromise);
  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-4xl my-6">Recent Bills</h1>
      {/*Recent Bills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-5">
        {recentBills.slice(0, 6).map((bill) => (
          <div
            key={bill._id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={bill.image}
              alt={bill.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-bold whitespace-nowrap overflow-hidden">
              {bill.title}
            </h2>
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
  );
};

export default RecentBills;
