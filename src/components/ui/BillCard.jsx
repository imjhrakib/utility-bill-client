import React from "react";

const BillCard = ({ bill }) => {
  return (
    <div
      key={bill._id}
      className="bg-[#1F1F1F] p-4 rounded shadow hover:shadow-lg transition"
    >
      <img
        src={bill.image}
        alt={bill.title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h2 className="text-xl text-white font-bold whitespace-nowrap overflow-hidden">
        {bill.title}
      </h2>
      <p className="text-gray-600 font-bold">Category: {bill.category}</p>
      <p>Location: {bill.location}</p>
      <p>Amount: ${bill.amount}</p>
      <button
        onClick={() => navigate(`/bills/${bill._id}`)}
        className="mt-2 w-full py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        See Details
      </button>
    </div>
  );
};

export default BillCard;
