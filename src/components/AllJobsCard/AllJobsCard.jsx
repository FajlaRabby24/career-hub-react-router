import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router";
import Button from "../Common/Button/Button";

const AllJobsCard = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="flex justify-between items-center border border-[#e3e2e2] rounded-lg px-4 py-3">
      <div className="flex gap-8 items-center">
        <div className="bg-[#f4f4f4] flex items-center justify-between px-10 py-20  rounded-lg">
          <img className="max-w-[117px]" src={logo} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-1">{job_title}</h2>
          <p className="text-xl font-semibold mb-4 text-gray-500">
            {company_name}
          </p>
          <div className="flex gap-5 mb-3">
            <button className="btn btn-outline btn-accent">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline btn-accent">{job_type}</button>
          </div>
          <p className="flex items-center gap-8 mb-4">
            <span className="flex items-center">
              <CiLocationOn /> {location}
            </span>{" "}
            <span className="flex items-center">
              <MdAttachMoney /> Salary: {salary}
            </span>
          </p>
        </div>
      </div>
      <Link to={`/jobs/${id}/details`}>
        <Button>View Details</Button>
      </Link>
    </div>
  );
};

export default AllJobsCard;
