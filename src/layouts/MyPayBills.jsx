import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyPayBills = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBill, setSelectedBill] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    amount: "",
    address: "",
    phone: "",
    date: "",
  });

  // Fetch bills for current user
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    fetch(`https://utility-bill-server.vercel.app/myBills?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBills(data);
        setLoading(false);
      });
  }, [user]);

  const totalBills = bills.length;
  const totalAmount = bills.reduce(
    (sum, bill) => sum + parseFloat(bill.amount),
    0
  );

  // Handle form changes for update
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Open update modal
  const openUpdateModal = (bill) => {
    setSelectedBill(bill);
    setFormData({
      username: bill.username,
      amount: bill.amount,
      address: bill.address,
      phone: bill.phone,
      date: bill.date,
    });
    setShowUpdateModal(true);
  };

  // Submit update
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(
      `https://utility-bill-server.vercel.app/myBills/${selectedBill._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBills(bills.map((b) => (b._id === data._id ? data : b)));
        }
        setShowUpdateModal(false);
      });
  };

  // Delete bill
  const handleDelete = () => {
    fetch(
      `https://utility-bill-server.vercel.app/myBills/${selectedBill._id}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setBills(bills.filter((b) => b._id !== selectedBill._id));
      setShowDeleteModal(false);
    });
  };

  const downloadReport = () => {
    const doc = new jsPDF();

    // Title
    doc.text("My Bills Report", 14, 15);

    const tableColumn = [
      "Username",
      "Email",
      "Amount",
      "Address",
      "Phone",
      "Date",
    ];
    const tableRows = bills.map((b) => [
      b.username,
      b.email,
      b.amount,
      b.address,
      b.phone,
      b.date,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [22, 160, 133] },
    });

    doc.save("my_bills_report.pdf");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">
        Total Bills Paid: {totalBills} | Total Amount: ৳{totalAmount}
      </h2>
      <button onClick={downloadReport} className="btn btn-primary mb-4">
        Download Report
      </button>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center border">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">Username</th>
              <th className="border border-gray-300 px-2 py-1">Email</th>
              <th className="border border-gray-300 px-2 py-1">Amount</th>
              <th className="border border-gray-300 px-2 py-1">Address</th>
              <th className="border border-gray-300 px-2 py-1">Phone</th>
              <th className="border border-gray-300 px-2 py-1">Date</th>
              <th className="border border-gray-300 px-2 py-1">Update</th>
              <th className="border border-gray-300 px-2 py-1">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill._id}>
                <td className="border border-gray-300 px-2 py-1">
                  {bill.username}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {bill.email}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {bill.amount}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {bill.address}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {bill.phone}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {bill.date}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <button
                    className="btn btn-soft btn-accent"
                    onClick={() => openUpdateModal(bill)}
                  >
                    Update
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <button
                    className="btn btn-soft btn-warning"
                    onClick={() => {
                      setSelectedBill(bill);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded w-96">
            <h2 className="font-bold mb-2">Update Bill</h2>
            <form onSubmit={handleUpdate} className="space-y-2">
              <input
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                className="input w-full"
              />
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="input w-full"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="input w-full"
              />
              <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date"
                type="date"
                className="input w-full"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowUpdateModal(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded w-96">
            <h2 className="font-bold mb-2">Delete Bill?</h2>
            <p>Are you sure you want to delete this bill?</p>
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button onClick={handleDelete} className="btn btn-error">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPayBills;
