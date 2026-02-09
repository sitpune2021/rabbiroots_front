import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProductBreadcrumbs = ({ itemName }) => {
  return (
    <div className="bg-white border-b border-gray-100 sticky top-[72px] md:top-[68px] z-40 shadow-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center text-sm text-gray-500">
        <Link
          to="/"
          className="hover:text-green-600 transition-colors flex items-center gap-1"
        >
          <HomeIcon sx={{ fontSize: 16 }} /> Home
        </Link>
        <ChevronRightIcon
          sx={{ fontSize: 14, mx: 1 }}
          className="text-gray-400"
        />
        <Link to="/" className="hover:text-green-600 transition-colors">
          Categories
        </Link>
        <ChevronRightIcon
          sx={{ fontSize: 14, mx: 1 }}
          className="text-gray-400"
        />
        <span className="text-gray-900 font-medium truncate max-w-[200px]">
          {itemName}
        </span>
      </div>
    </div>
  );
};

export default ProductBreadcrumbs;
