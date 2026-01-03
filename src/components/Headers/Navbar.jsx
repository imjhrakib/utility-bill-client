import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import Swal from "sweetalert2";
import { ThemeContext } from "../../provider/ThemeContext";
import { BsBrightnessHigh } from "react-icons/bs";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const { theme, toggleTheme, colors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser().then(() => {
          setUser(null);
          navigate("/");
        });
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-[#438A7A] font-semibold border-b-2 p-1 rounded-b-sm"
              : "hover:text-[#438A7A]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/bills"}
          className={({ isActive }) =>
            isActive
              ? "text-[#438A7A] font-semibold border-b-2 p-1 rounded-b-sm"
              : "hover:text-[#438A7A]"
          }
        >
          Bills
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/myPayBills"}
            className={({ isActive }) =>
              isActive
                ? "text-[#438A7A] font-semibold border-b-2 p-1 rounded-b-sm"
                : "hover:text-[#438A7A]"
            }
          >
            My Pay Bills
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-[#438A7A] font-semibold border-b-2 p-1 rounded-b-sm"
              : "hover:text-[#438A7A]"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-[#438A7A] font-semibold border-b-2 p-1 rounded-b-sm"
              : "hover:text-[#438A7A]"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md transition-colors"
      style={{ backgroundColor: colors[theme].bgNav }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 lg:px-20 h-16">
        {/* Mobile Dropdown */}
        <div className="lg:hidden dropdown">
          <label tabIndex={0} className="btn btn-ghost p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-4 shadow rounded-box w-52 mt-2 bg-white dark:bg-gray-800 text-black dark:text-gray-200"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <NavLink to={"/"} className="text-xl font-bold text-[#438A7A]">
          TrustBill
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8 items-center">{links}</ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200/20 transition"
            title="Toggle Theme"
          >
            <BsBrightnessHigh size={20} />
          </button>

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center gap-4">
              <NavLink to={"/profile"}>
                <img
                  src={user.photoURL || "/default-profile.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
                />
              </NavLink>
              <button
                onClick={handleLogOut}
                className="px-4 py-2 rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink to={"/login"}>
                <button className="px-4 py-2 rounded-md bg-[#438A7A] text-white hover:bg-[#3A7669] transition">
                  Login
                </button>
              </NavLink>
              <NavLink to={"/register"}>
                <button className="px-4 py-2 rounded-md border border-[#438A7A] text-[#438A7A] hover:bg-[#438A7A] hover:text-white transition">
                  Register
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
