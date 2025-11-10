import React from "react";
import HeroSection from "../components/Headers/HeroSection";
import CategorySection from "../components/CategorySection/CategorySection";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
      <Features></Features>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
