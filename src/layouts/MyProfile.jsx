import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const DEFAULT_IMAGE = "https://i.ibb.co/jPZ79VDq/Online-Shoping-29.jpg";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // update user info in firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      await updateProfile(user, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-start p-6 pt-20 transition-colors ${
        isDark ? "bg-[#0F0F12]" : "bg-gray-100"
      }`}
    >
      <div
        className={`rounded-2xl p-8 w-full max-w-md shadow-lg ${
          isDark ? "bg-[#17191A] text-gray-200" : "bg-white text-gray-800"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-[#438A7A]">
          Account Profile
        </h2>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={formData.photoURL?.trim() ? formData.photoURL : DEFAULT_IMAGE}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-[#438A7A] object-cover shadow-md"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none ${
                isDark
                  ? "bg-[#0F0F12] border-gray-700 text-white focus:border-primary"
                  : "bg-white border-gray-300 text-black focus:border-primary"
              }`}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              disabled
              className={`w-full px-4 py-2 rounded-lg border cursor-not-allowed ${
                isDark
                  ? "bg-[#0F0F12] border-gray-700 text-gray-400"
                  : "bg-gray-100 border-gray-300 text-gray-600"
              }`}
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm mb-1">Profile Image URL</label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none ${
                isDark
                  ? "bg-[#0F0F12] border-gray-700 text-white focus:border-primary"
                  : "bg-white border-gray-300 text-black focus:border-primary"
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#438A7A] hover:opacity-90 text-white font-semibold transition"
          >
            Update Profile
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default MyProfile;
