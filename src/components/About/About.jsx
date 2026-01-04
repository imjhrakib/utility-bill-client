import React, { useContext } from "react";
import {
  AiOutlineWallet,
  AiOutlineDashboard,
  AiOutlineCheckCircle,
  AiOutlineSafetyCertificate,
  AiOutlineClockCircle,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { NavLink } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";

const About = () => {
  const { theme, colors } = useContext(ThemeContext);

  const features = [
    {
      icon: (
        <AiOutlineDashboard size={40} className="mx-auto mb-3 text-[#438A7A]" />
      ),
      title: "Intuitive Dashboard",
      desc: "Manage all your utility bills in one place with clear insights.",
    },
    {
      icon: (
        <AiOutlineWallet size={40} className="mx-auto mb-3 text-[#438A7A]" />
      ),
      title: "Secure Payments",
      desc: "Pay your bills safely with multiple trusted payment options.",
    },
    {
      icon: (
        <AiOutlineCheckCircle
          size={40}
          className="mx-auto mb-3 text-[#438A7A]"
        />
      ),
      title: "Automatic Tracking",
      desc: "Get reminders and track due dates to avoid missed payments.",
    },
  ];

  const whyChoose = [
    {
      icon: (
        <AiOutlineSafetyCertificate size={30} className="text-[#438A7A] mr-3" />
      ),
      title: "Reliable & Safe",
      desc: "Your data and payments are protected with industry-standard security.",
    },
    {
      icon: <AiOutlineClockCircle size={30} className="text-[#438A7A] mr-3" />,
      title: "Time Saving",
      desc: "Quickly manage all your bills without juggling multiple apps.",
    },
    {
      icon: <AiOutlineUsergroupAdd size={30} className="text-[#438A7A] mr-3" />,
      title: "User Friendly",
      desc: "Designed for everyone, whether tech-savvy or not.",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 pb-0 pt-30"
      style={{ backgroundColor: colors[theme].bg, color: colors[theme].text }}
    >
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        About TrustBill
      </h1>
      <p className="text-lg md:text-xl max-w-3xl text-center mb-12 leading-relaxed text-gray-400">
        TrustBill is a modern utility management platform that simplifies bill
        tracking and payments. Stay organized, save time, and manage all your
        utilities from a single, intuitive dashboard.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition border ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
            style={{
              backgroundColor: theme === "dark" ? "#1F2225" : "#FFFFFF",
            }}
          >
            {feature.icon}
            <h2 className="text-2xl font-semibold text-center mb-2">
              {feature.title}
            </h2>
            <p className="text-center text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl w-full mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className={`flex items-start p-4 rounded-xl shadow-lg hover:shadow-2xl transition border ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              } flex-1`}
              style={{
                backgroundColor: theme === "dark" ? "#1F2225" : "#FFFFFF",
              }}
            >
              {item.icon}
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8">
        <NavLink
          to={"/bills"}
          className="px-8 py-3 rounded-full bg-[#438A7A] text-white font-semibold hover:bg-[#3A7669] transition"
        >
          Get Started
        </NavLink>
      </div>
    </section>
  );
};

export default About;
