import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import JobCategorySection from "../../components/JobCategorySection/JobCategorySection";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <main className="max-w-7xl mx-auto">
        <JobCategorySection></JobCategorySection>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
