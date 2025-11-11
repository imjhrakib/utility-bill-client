import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const bills = [
  {
    id: 1,
    title: "Electricity Bill - October",
    category: "electricity",
    location: "Dhaka",
    amount: 120,
    date: "2025-10-05",
    image: "https://i.ibb.co/7r0Zg9p/electricity.jpg",
    description: "Pay your October electricity bill on time.",
  },
  {
    id: 2,
    title: "Water Bill - October",
    category: "water",
    location: "Chittagong",
    amount: 45,
    date: "2025-10-10",
    image: "https://i.ibb.co/HPbPNqS/water.jpg",
    description: "Water supply charges for October.",
  },
  {
    id: 3,
    title: "Gas Bill - October",
    category: "gas",
    location: "Khulna",
    amount: 70,
    date: "2025-10-12",
    image: "https://i.ibb.co/4mGt8XJ/gas.jpg",
    description: "Gas usage charges for October.",
  },
  {
    id: 4,
    title: "Internet Bill - October",
    category: "internet",
    location: "Sylhet",
    amount: 60,
    date: "2025-10-15",
    image: "https://i.ibb.co/d4WbZ0V/internet.jpg",
    description: "High-speed internet charges for October.",
  },
  {
    id: 5,
    title: "Electricity Bill - November",
    category: "electricity",
    location: "Rajshahi",
    amount: 130,
    date: "2025-11-05",
    image: "https://i.ibb.co/7r0Zg9p/electricity.jpg",
    description: "Pay your November electricity bill on time.",
  },
  {
    id: 6,
    title: "Water Bill - November",
    category: "water",
    location: "Barisal",
    amount: 50,
    date: "2025-11-07",
    image: "https://i.ibb.co/HPbPNqS/water.jpg",
    description: "Water supply charges for November.",
  },
];

const BillsDetails = () => {
  const id = 5; // Example bill ID
  const { user } = useContext(AuthContext);

  const bill = bills.find((b) => b.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.displayName || "",
    address: "",
    phone: "",
    additionalInfo: "",
  });

  if (!bill) return <h2 className="p-6 text-xl font-bold">Bill not found</h2>;

  const currentMonth = new Date().getMonth();
  const billMonth = new Date(bill.date).getMonth();
  const canPay = currentMonth === billMonth;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePay = (e) => {
    e.preventDefault();
    toast.success("✅ Bill paid successfully!");
    setShowModal(false);

    console.log({
      billId: bill.id,
      email: user.email,
      amount: bill.amount,
      username: formData.username,
      address: formData.address,
      phone: formData.phone,
      date: new Date().toLocaleDateString(),
      additionalInfo: formData.additionalInfo,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{bill.title}</h1>
      <img src={bill.image} alt={bill.title} className="w-full max-w-md mb-4" />
      <p>
        <strong>Category:</strong> {bill.category}
      </p>
      <p>
        <strong>Location:</strong> {bill.location}
      </p>
      <p>
        <strong>Amount:</strong> ${bill.amount}
      </p>
      <p>
        <strong>Description:</strong> {bill.description}
      </p>

      <button
        onClick={() => setShowModal(true)}
        className={`mt-4 py-2 px-4 rounded text-white ${
          canPay
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!canPay}
      >
        {canPay ? "Pay Bill" : "Pay Only Current Month Bills"}
      </button>

      {/* Scrollable Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded shadow-lg w-full max-w-lg h-[80vh] overflow-y-auto p-6 mx-2">
            <h2 className="text-xl font-bold mb-4">Pay Bill</h2>
            <form onSubmit={handlePay} className="space-y-3">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full border p-2 rounded bg-gray-100"
                />
              </div>
              <div>
                <label>Bill ID</label>
                <input
                  type="text"
                  value={bill.id}
                  readOnly
                  className="w-full border p-2 rounded bg-gray-100"
                />
              </div>
              <div>
                <label>Amount</label>
                <input
                  type="text"
                  value={bill.amount}
                  readOnly
                  className="w-full border p-2 rounded bg-gray-100"
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>Additional Info</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 rounded border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 rounded bg-blue-500 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default BillsDetails;
