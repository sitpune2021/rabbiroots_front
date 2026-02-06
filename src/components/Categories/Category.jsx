import React from "react";
import { categoryItem } from "../../Data/Category.js";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading.jsx";

function Category() {
  return (
    <div className="w-[95%] h-full px-4 md:px-[2rem] mx-auto max-lg:px-0 max-sm:px-2 py-6 md:py-3">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <Heading title="Shop by Category" />
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-6 mt-4">
        {categoryItem.map((items, idx) => (
          <Link to={"/productlisting"} key={idx}>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square bg-gradient-to-br md:bg-white rounded-2xl md:rounded-xl p-2 md:p-3 flex items-center justify-center md:shadow-md  transition-all duration-300 border-2 border-transparent hover:border-green-500 md:border-gray-100 group-hover:scale-100">
                <img
                  src={items.image}
                  alt={items.name || "Category"}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="mt-2 md:mt-3 text-xs md:text-sm font-semibold text-gray-700 text-center group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                {items.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
