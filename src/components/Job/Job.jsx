import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router";
import Button from "../Common/Button/Button";
import OutlineBtn from "../Common/OutlineBtn/OutlineBtn";

const Job = ({ job }) => {
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
    <div className="border  border-[#ccc] rounded-lg px-4 py-5">
      <img className="w-1/3 mb-4" src={logo} alt="" />
      <h2 className="text-xl font-semibold mb-2">{job_title}</h2>
      <p className="text-lg font-semibold">{company_name}</p>
      <div className="flex gap-4 my-3">
        <OutlineBtn>{remote_or_onsite}</OutlineBtn>
        <OutlineBtn>{job_type}</OutlineBtn>
      </div>
      <p className="flex items-center gap-8 mb-4">
        <span className="flex items-center">
          <CiLocationOn /> {location}
        </span>{" "}
        <span className="flex items-center">
          <MdAttachMoney /> Salary: {salary}
        </span>
      </p>
      <Link to={`/jobs/${id}/details`}>
        <Button>Details</Button>
      </Link>
    </div>
  );
};

export default Job;
