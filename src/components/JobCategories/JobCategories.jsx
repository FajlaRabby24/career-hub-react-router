import React, { useEffect, useState } from "react";
import SingleCategory from "../SingleCategory/SingleCategory";

const JobCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-6">
      {categories.map((category) => (
        <SingleCategory category={category} key={category.id}></SingleCategory>
      ))}
    </div>
  );
};

export default JobCategories;
