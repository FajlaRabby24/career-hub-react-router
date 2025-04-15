import React from "react";
import FeturedSection from "../../components/FeturedSection/FeturedSection";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import JobCategorySection from "../../components/JobCategorySection/JobCategorySection";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <main className="max-w-7xl mx-auto my-28">
        <JobCategorySection></JobCategorySection>
        <FeturedSection></FeturedSection>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
