import React from "react";

const Reviews = () => {
  return (
    <section className="py-20  px-5 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded shadow">
            <p className="italic">
              “This app made paying bills so simple and fast!”
            </p>
            <h4 className="mt-4 font-semibold">– John Doe</h4>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <p className="italic">
              “I love the notifications feature. Never missed a payment again!”
            </p>
            <h4 className="mt-4 font-semibold">– Jane Smith</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
