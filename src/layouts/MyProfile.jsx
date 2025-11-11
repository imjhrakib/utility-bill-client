import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // update user info in firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });
      toast.success("✅ Profile updated successfully!");
    } catch (err) {
      toast.error(`❌ ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <Helmet>
        <title>myProfile</title>
      </Helmet>

      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          My Profile
        </h2>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={
              formData.photoURL ||
              "https://i.ibb.co/jPZ79VDq/Online-Shoping-29.jpg"
            }
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover shadow-lg"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Email (read-only) */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-black cursor-not-allowed"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Profile Picture URL
            </label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 text-black focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
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
