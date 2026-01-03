import React, { useContext, useState } from "react";
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
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/bills"}>Bills</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to={"/myPayBills"}>My Pay Bills</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div
        className={`navbar fixed top-0 left-0 z-50 text-gray-200 shadow-sm px-4 md:px-10 lg:px-20`}
        style={{ backgroundColor: colors[theme].bg }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            TrustBill
          </NavLink>
        </div>

        <div className="navbar-end flex gap-10">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
          </div>
          <div
            onClick={toggleTheme}
            className="cursor-pointer p-2 rounded hover:bg-gray-200/10"
          >
            <BsBrightnessHigh size={18} />
          </div>

          <div>
            {user ? (
              <div className="flex gap-3.5">
                <li className="flex">
                  <NavLink to={"/profile"}>
                    <img
                      src={user?.photoURL || "/default-profile.png"} // fallback if no photo
                      alt="Profile"
                      className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
                    />
                  </NavLink>
                </li>
                <NavLink>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline btn-error"
                  >
                    LogOut
                  </button>
                </NavLink>
              </div>
            ) : (
              <div className="flex gap-2.5">
                {/* Login button - solid */}
                <NavLink to={"/login"}>
                  <button className="px-4 py-2 rounded-md bg-[#438A7A] text-white hover:bg-[#3A7669] transition font-medium">
                    Login
                  </button>
                </NavLink>

                {/* Register button - outline */}
                <NavLink to={"/register"}>
                  <button className="px-4 py-2 rounded-md border border-[#438A7A] text-[#438A7A] hover:bg-[#438A7A] hover:text-white transition font-medium">
                    Register
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
