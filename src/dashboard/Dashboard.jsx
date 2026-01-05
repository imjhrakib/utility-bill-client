import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router";

import {
  AiOutlineBarChart,
  AiOutlineDashboard,
  AiOutlineHome,
} from "react-icons/ai";
import { MdPayments } from "react-icons/md";

import { FiSun, FiMoon } from "react-icons/fi";

import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [clickNav, setClickNav] = useState(false);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav
          className={`navbar w-full z-50 fixed flex justify-between items-center px-2 ${
            isDark ? "bg-[#2A2E33] text-gray-200" : "bg-base-300 text-[#438A7A]"
          }`}
        >
          <div className="flex items-center">
            {/* Sidebar toggle button */}
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
              onClick={() => setClickNav(!clickNav)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>

            {/* Dashboard title */}
            <div className="px-4 text-lg font-semibold">
              <span className="mr-5">Trust Bill Control Panel</span>
              <button
                className="btn btn-square btn-ghost "
                onClick={toggleTheme}
                aria-label="Toggle Theme"
              >
                {isDark ? <FiSun size={20} /> : <FiMoon size={22} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <div className="p-4 mt-14">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div
          className={`flex min-h-full flex-col items-start transition-all duration-300 ${
            isDark ? "bg-[#17191A] text-gray-200" : "bg-base-200 text-slate-800"
          } is-drawer-close:w-18 is-drawer-open:w-64`}
        >
          <ul className="menu w-full grow font-semibold">
            {/* My Profile */}
            <li>
              <Link
                to={"/profile"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Profile"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className={`rounded-full border border-blue-600 cursor-pointer transition-all duration-300
                      ${clickNav ? "w-10 h-10" : "w-8 h-8"}`}
                  />
                  {clickNav && (
                    <span className="text-xl font-semibold transition-all duration-300">
                      {user?.displayName}
                    </span>
                  )}
                </div>
              </Link>
            </li>

            {/* Home */}
            <li>
              <Link
                to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <AiOutlineHome size={24} className="text-sky-600" />
                <span className="is-drawer-close:hidden">Home</span>
              </Link>
            </li>

            {/* Dashboard Home */}
            <li>
              <Link
                to={"/dashboard"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard Home"
              >
                <AiOutlineDashboard size={24} className="text-indigo-600" />
                <span className="is-drawer-close:hidden">Dashboard Home</span>
              </Link>
            </li>

            {/* My Pay Bills */}
            <li>
              <Link
                to={"/dashboard/myPayBills"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Pay Bills"
              >
                <MdPayments size={24} className="text-indigo-600" />
                <span className="is-drawer-close:hidden">My Pay Bills</span>
              </Link>
            </li>

            {/* Statistics */}
            <li>
              <Link
                to={"/dashboard/statistics"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Statistics"
              >
                <AiOutlineBarChart size={24} className="text-indigo-600" />
                <span className="is-drawer-close:hidden">Statistics</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
