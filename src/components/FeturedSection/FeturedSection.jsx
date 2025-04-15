import React, { useEffect, useState } from "react";
import Paragraph from "../Common/Paragraph/Paragraph";
import Title from "../Common/Title/Title";
import Job from "../Job/Job";

const FeturedSection = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-24">
      <Title>Featured Jobs</Title>
      <Paragraph>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </Paragraph>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeturedSection;
