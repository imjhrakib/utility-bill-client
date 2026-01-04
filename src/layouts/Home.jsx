import React from "react";
import HeroSection from "../components/Headers/HeroSection";
import CategorySection from "../components/CategorySection/CategorySection";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";
import { Helmet } from "react-helmet-async";
import RecentBills from "./RecentBills";
import Statistics from "./Statistics";
import BtnPrimary from "../components/ui/BtnPrimary";
import { useNavigate } from "react-router";
const recentBillsPromise = fetch(
  "https://utility-bill-server.vercel.app/bills"
).then((res) => res.json());
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Home || TrustBill</title>
      </Helmet>
      <HeroSection></HeroSection>
      <RecentBills recentBillsPromise={recentBillsPromise}></RecentBills>
      <div className="flex justify-center " onClick={() => navigate("/bills")}>
        <BtnPrimary btnText={"show all"}></BtnPrimary>
      </div>
      <CategorySection></CategorySection>
      <Features></Features>
      <Reviews></Reviews>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
