import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { toast, ToastContainer } from "react-toastify";

const BillsDetails = () => {
  const bill = useLoaderData();
  const { user } = useContext(AuthContext) || {};
  const { theme, colors } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.displayName || "",
    address: "",
    phone: "",
    additionalInfo: "",
  });

  const bg = theme === "dark" ? "#1F2225" : "#F9FAFB";
  const cardBg = theme === "dark" ? "#2A2E33" : "#FFFFFF";
  const border = theme === "dark" ? "#33383F" : "#E5E7EB";
  const text = theme === "dark" ? "text-gray-200" : "text-gray-900";
  const muted = theme === "dark" ? "text-gray-400" : "text-gray-600";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePay = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
      return;
    }

    toast.success("✅ Bill paid successfully!");
    setShowModal(false);

    const myBills = {
      billId: bill._id,
      email: user.email,
      amount: bill.amount,
      username: formData.username,
      address: formData.address,
      phone: formData.phone,
      date: new Date().toLocaleDateString(),
      additionalInfo: formData.additionalInfo,
    };

    fetch("https://utility-bill-server.vercel.app/myBills", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(myBills),
    });
  };

  return (
    <div className="py-10 pt-20 px-4" style={{ backgroundColor: bg }}>
      <div
        className="max-w-4xl mx-auto rounded-2xl shadow-lg border p-6"
        style={{ backgroundColor: cardBg, borderColor: border }}
      >
        <img
          src={bill.image}
          alt={bill.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h1 className={`text-3xl font-bold mb-4 ${text}`}>{bill.title}</h1>

        <div className={`space-y-2 ${muted}`}>
          <p>
            <span className="font-medium">Category:</span> {bill.category}
          </p>
          <p>
            <span className="font-medium">Location:</span> {bill.location}
          </p>
          <p>
            <span className="font-medium">Amount:</span> ${bill.amount}
          </p>
          <p>
            <span className="font-medium">Description:</span> {bill.description}
          </p>
        </div>

        {/* Pay Button */}
        <button
          onClick={() => {
            if (!user) {
              toast.error("❌ Please login to pay!");
              navigate("/login");
              return;
            }
            setShowModal(true);
          }}
          className="mt-6 w-full py-3 rounded-xl bg-[#438A7A] text-white font-medium transition hover:opacity-90"
        >
          Pay Bill
        </button>
      </div>

      {showModal &&
        user && ( // only show modal if user is logged in
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
            <div
              className="w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl p-6"
              style={{ backgroundColor: cardBg }}
            >
              <h2 className={`text-xl font-bold mb-4 ${text}`}>Pay Bill</h2>

              <form onSubmit={handlePay} className="space-y-3">
                {[
                  ["Email", user.email, true],
                  ["Bill ID", bill._id, true],
                  ["Amount", bill.amount, true],
                ].map(([label, value, readOnly], i) => (
                  <div key={i}>
                    <label className={`text-sm ${muted}`}>{label}</label>
                    <input
                      value={value}
                      readOnly={readOnly}
                      className="w-full mt-1 p-2 rounded border bg-gray-100"
                      style={{ backgroundColor: cardBg, borderColor: border }}
                    />
                  </div>
                ))}

                {["username", "address", "phone"].map((field) => (
                  <div key={field}>
                    <label className={`text-sm capitalize ${muted}`}>
                      {field}
                    </label>
                    <input
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 rounded border"
                    />
                  </div>
                ))}

                <div>
                  <label className={`text-sm ${muted}`}>Additional Info</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded border"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded border"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handlePay}
                    className="px-4 py-2 cursor-pointer rounded text-white bg-[#438A7A]"
                  >
                    Confirm Pay
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
