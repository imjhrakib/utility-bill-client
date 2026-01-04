import React from "react";

const Statistics = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">TrustBill by the Numbers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="text-4xl font-bold text-[#438A7A]">10K+</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Users</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#438A7A]">50K+</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Bills Processed
          </p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#438A7A]">98%</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            On-time Payments
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
