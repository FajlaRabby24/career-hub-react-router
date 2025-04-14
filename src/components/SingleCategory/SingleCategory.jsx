import React from "react";

const SingleCategory = ({ category }) => {
  return (
    <div className="bg-[#faf8ff] rounded-xl py-12 pl-6">
      <img className="bg-[#efecff] rounded-lg p-3" src={category.logo} alt="" />
      <h3 className="text-lg font-semibold mt-3 mb-1">
        {category.category_name}
      </h3>
      <p className="text-gray-400 font-semibold">{category.availability}</p>
    </div>
  );
};

export default SingleCategory;
