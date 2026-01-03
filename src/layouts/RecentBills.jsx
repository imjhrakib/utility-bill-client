import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import BillCard from "../components/BillCard";

const RecentBills = ({ recentBillsPromise }) => {
  const navigate = useNavigate();
  const recentBills = use(recentBillsPromise);
  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-4xl my-6">Recent Bills</h1>
      {/*Recent Bills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-5">
        {recentBills.slice(0, 6).map((bill) => (
          <BillCard bill={bill} key={bill._id}></BillCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBills;
