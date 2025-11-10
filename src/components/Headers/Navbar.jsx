import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser().then(() => {
      setUser(null);
      navigate("/");
      console.log("signOut successfully");
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
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 lg:px-20">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow"
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
            <ul className="menu menu-horizontal px-1">{links}</ul>
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
                <NavLink to={"/login"}>
                  <button className="btn btn-outline btn-success">Login</button>
                </NavLink>
                <NavLink to={"/register"}>
                  <button className="btn btn-outline btn-primary">
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
