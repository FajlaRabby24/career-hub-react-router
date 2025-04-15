import React from "react";
import { useLoaderData } from "react-router";
import AllJobsCard from "../AllJobsCard/AllJobsCard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SecondaryHero from "../SecondaryHero/SecondaryHero";

const AllJobs = () => {
  const jobsData = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <SecondaryHero>All Jobs</SecondaryHero>
      <main className="flex flex-col gap-10 max-w-7xl mx-auto my-28">
        {jobsData.map((job) => (
          <AllJobsCard key={job.id} job={job}></AllJobsCard>
        ))}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AllJobs;
