import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-gray-100 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-2xl font-semibold mb-2">Fast Payments</h3>
            <p>Pay your bills instantly with secure and quick transactions.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-2xl font-semibold mb-2">Manage Easily</h3>
            <p>Keep track of all your bills and payments in one place.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-2xl font-semibold mb-2">Notifications</h3>
            <p>Get timely reminders for due payments so you never miss one.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
