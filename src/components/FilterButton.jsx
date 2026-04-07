import React from "react";

const FilterButton = ({ name}) => {
  return (
    <button className="px-4 py-2 border border-gray-200 text-gray-400 rounded hover:bg-gray-200 hover:text-red-700 transition cursor-pointer">
        {name}
    </button>
  );
};

export default FilterButton;
