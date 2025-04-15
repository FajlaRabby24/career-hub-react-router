import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router";
import Button from "../Common/Button/Button";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SecondaryHro from "../SecondaryHero/SecondaryHero";

const JobDetails = () => {
  const navigate = useNavigate();
  const details = useLoaderData();
  const {
    job_description,
    job_responsibility,
    company_name,
    educational_requirements,
    experiences,
    job_title,
    salary,
    contact_information,
  } = details;
  return (
    <>
      <Navbar></Navbar>
      <SecondaryHro>Job Details</SecondaryHro>
      <main className="max-w-7xl mx-auto  my-20">
        <button className="btn btn-primary mb-4" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="flex gap-8">
          <div className="w-[70%] flex flex-col gap-5">
            <p>
              <strong>Job Description: </strong>
              <span className="text-[#757575] font-medium ">
                {job_description}
              </span>
            </p>
            <p>
              <strong>Job Responsivility: </strong>
              <span className="text-[#757575] font-medium">
                {job_responsibility}
              </span>
            </p>
            <div>
              <strong>Education Requirements: </strong>
              <p className="text-[#757575] font-medium">
                {educational_requirements}
              </p>
            </div>
            <div>
              <strong>Experiences: </strong>
              <p className="text-[#757575] font-medium">{experiences}</p>
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-7 ">
            <div className="bg-gradient-to-br from-[#f2f3ff] to-[#f4f1ff] rounded-lg px-4 py-3">
              <h3 className="text-xl font-semibold mb-4">Job Details</h3>
              <hr className="text-gray-300" />
              <p className="mt-4 flex items-center">
                {" "}
                <MdAttachMoney size={20} color="#7E90FE" />{" "}
                <strong>Company name:</strong>{" "}
                <span className="text-[#757575] font-medium">
                  {company_name}
                </span>
              </p>
              <p className="mt-2 flex items-center">
                {" "}
                <MdAttachMoney size={20} color="#7E90FE" />{" "}
                <strong>Salay:</strong>{" "}
                <span className="text-[#757575] font-medium">
                  {salary} Per month
                </span>
              </p>
              <p className="flex items-center mb-4 mt-2">
                {" "}
                <FaFileAlt size={15} color="#7E90FE" />{" "}
                <strong>Job Title:</strong>{" "}
                <span className="text-[#757575] font-medium">{job_title}</span>
              </p>
              <hr className="text-gray-300" />
              <h3 className="text-xl font-semibold mt-4 mb-4">
                Contact Information
              </h3>
              <div className="flex flex-col gap-2">
                {contact_information.map((info, index) => (
                  <p key={index}>
                    <strong> {Object.keys(info)}:</strong>{" "}
                    <span className="text-[#757575] font-medium">
                      {Object.values(info)}
                    </span>
                  </p>
                ))}
              </div>
            </div>
            <Button>Apply Now</Button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default JobDetails;
