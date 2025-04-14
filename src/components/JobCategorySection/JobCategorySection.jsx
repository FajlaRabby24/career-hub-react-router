import React from "react";
import Paragraph from "../Common/Paragraph/Paragraph";
import Title from "../Common/Title/Title";
import JobCategories from "../JobCategories/JobCategories";

const JobCategorySection = () => {
  return (
    <section className="my-28">
      <Title>Job Category List</Title>
      <Paragraph>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </Paragraph>
      <JobCategories></JobCategories>
    </section>
  );
};

export default JobCategorySection;
