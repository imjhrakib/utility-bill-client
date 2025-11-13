import React from "react";
import HeroSection from "../components/Headers/HeroSection";
import CategorySection from "../components/CategorySection/CategorySection";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";
import { Helmet } from "react-helmet-async";
import RecentBills from "./RecentBills";
const recentBillsPromise = fetch(
  "https://utility-bill-server.vercel.app/bills"
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || TrustBill</title>
      </Helmet>
      <HeroSection></HeroSection>
      <RecentBills recentBillsPromise={recentBillsPromise}></RecentBills>
      <CategorySection></CategorySection>
      <Features></Features>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
