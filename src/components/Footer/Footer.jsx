import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0F1F1C] via-[#142B26] to-[#0F1F1C] text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
        {/* Logo & Description */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-[#6BB7A8]">TrustBill</h2>
          <p className="text-sm leading-6 text-gray-400">
            TrustBill is my personal utility bill management project. It helps
            users securely manage and pay electricity, gas, water, and internet
            bills with ease. Built as a full-stack project using MERN &
            Firebase.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[#6BB7A8]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-[#438A7A] transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/bills" className="hover:text-[#438A7A] transition">
                Bills
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#438A7A] transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-[#438A7A] transition"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                href="https://github.com/imjhrakib/utility-bill-client"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#438A7A] transition"
              >
                Project Repo
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[#6BB7A8]">
            Connect with Me
          </h3>
          <div className="flex justify-center sm:justify-start space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/imjhrakib"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/jhrakib/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/imjhrakib"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1F3F39] mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jaker Hossain Rakib. TrustBill & personal
        projects. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
