import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router";

const slides = [
  {
    id: 1,
    title: "Pay Your Electricity Bills Instantly",
    description: "Fast, secure, and convenient payment anytime, anywhere.",
    image: "https://i.ibb.co/4n6sNwKY/electricity.jpg",
    cta: "Pay Now",
  },
  {
    id: 2,
    title: "Manage Your Water Bills Online",
    description:
      "Track your usage and pay your water bills in just a few clicks.",
    image: "https://i.ibb.co/4nFY3B6F/water.jpg",
    cta: "Pay Water Bill",
  },
  {
    id: 3,
    title: "Internet & Gas Bills Made Easy",
    description: "One platform to pay all your utility bills hassle-free.",
    image: "https://i.ibb.co/HLFTvSmD/gas.jpg",
    cta: "Pay Now",
  },
];

const HeroSection = () => {
  return (
    <section className="mx-auto rounded-xl overflow-hidden shadow-xl pt-20 h-[80vh] relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[70vh]">
              {/* Background image with gradient overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40" />
              </div>

              {/* Overlay text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 drop-shadow-md">
                  {slide.description}
                </p>
                <NavLink
                  to={"/bills"}
                  className="px-6 py-3 bg-[#438A7A] hover:bg-[#3A7669] text-white rounded-lg text-lg font-medium shadow-lg transition"
                >
                  Pay Now
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
