import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { BsBrightnessHigh } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser, setUser, logOut } = useContext(AuthContext);
  const { theme, toggleTheme, colors } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
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
        <>
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
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#438A7A] font-semibold border-b-2 p-1 rounded-b-sm"
                  : "hover:text-[#438A7A]"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
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

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const navBg = theme === "dark" ? "#2A2E33" : "#F9FAFB";
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md transition-colors"
      style={{ backgroundColor: navBg }}
    >
      <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 h-16">
        {/* Mobile Dropdown */}
        <div className="flex items-center gap-2">
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

          <NavLink to="/" className="text-xl font-bold text-[#438A7A]">
            TrustBill
          </NavLink>
        </div>

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
            <div ref={dropdownRef} className="flex items-center gap-4">
              <img
                onClick={() => setProfileOpen(!profileOpen)}
                src={user?.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer hover:ring-2 hover:ring-[#438A7A] transition"
              />

              {profileOpen && (
                <div
                  className="absolute right-2 top-14 mt-2 w-52 rounded-xl shadow-lg border border-gray-200 z-50"
                  style={{ backgroundColor: colors[theme].bgNav }}
                >
                  {/* Profile */}
                  <Link to="/profile" onClick={() => setProfileOpen(false)}>
                    <p className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800 border-b border-gray-200 hover:bg-teal-50 transition">
                      <span>
                        <img
                          src={user?.photoURL || "/avatar.png"}
                          className="w-9 h-9 rounded-full object-cover ring-2  ring-[#438A7A]"
                          alt="User"
                        />
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: colors[theme].text }}
                      >
                        {user?.displayName || "User"}
                      </span>
                    </p>
                  </Link>

                  {/* Dashboard */}
                  <NavLink
                    to="/dashboard"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-100 hover:text-teal-700 transition"
                  >
                    Dashboard
                  </NavLink>

                  {/* Logout */}
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
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
