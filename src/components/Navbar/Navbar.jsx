import React from "react";
import { NavLink } from "react-router";
import Button from "../Common/Button/Button";

const Navbar = () => {
  return (
    <nav className=" bg-[#f9f8ff]">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 ">
            <NavLink to={"/statistics"} className={"font-semibold"}>
              Statistics
            </NavLink>
            <NavLink to={"/applied-jobs"} className={"font-semibold"}>
              Applied Jobs
            </NavLink>
            <NavLink to={"/blogs"} className={"font-semibold"}>
              Blogs
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Button>Start Applying</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
