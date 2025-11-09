import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Pay your electricity bills instantly!",
    description: "Fast, secure, and convenient payment anytime, anywhere.",
    image: "https://i.ibb.co.com/4nFY3B6F/water.jpg",
  },
  {
    id: 2,
    title: "Manage your water bills online",
    description:
      "Track your usage and pay your water bills in just a few clicks.",
    image: "https://i.ibb.co.com/4n6sNwKY/electricity.jpg",
  },
  {
    id: 3,
    title: "Internet and gas bills made easy",
    description: "One platform to pay all your utility bills hassle-free.",
    image: "https://i.ibb.co.com/HLFTvSmD/gas.jpg",
  },
];

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6 rounded-xl shadow-lg overflow-hidden px-5">
      <Swiper
        className="rounded-2xl"
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
