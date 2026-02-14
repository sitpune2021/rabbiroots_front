import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Heading from "../Common/Heading.jsx";
import {
  fetchCategories,
  selectCategories,
  selectCategoriesLoading,
  selectCategoriesError,
} from "../../features/CategorySlice";

function Category() {
  const dispatch = useDispatch();
  const location = useLocation();

  const categories = useSelector(selectCategories);
  const loading = useSelector(selectCategoriesLoading);
  const error = useSelector(selectCategoriesError);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (location.pathname !== "/") {
    return null;
  }

  if (loading) {
    return (
      <div className="w-full mx-auto py-8 flex justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="w-full  py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Category Grid - 10 columns on large screens, 2 rows */}
        <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-3 md:gap-4">
          {categories.slice(0, 20).map((item) => (
            <Link
              to={`/productlisting?category=${item.slug}`}
              key={item.id}
              className="group"
            >
              <div className="flex flex-col items-center cursor-pointer">
                {/* Image Container - Rounded square with soft shadow */}
                <div className="w-full aspect-square bg-white rounded-2xl p-3 md:p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <img
                    src={
                      item.images?.image ||
                      item.images?.icon ||
                      item.image ||
                      "/placeholder.png"
                    }
                    alt={item.name || "Category"}
                    className="w-full h-full object-contain mix-blend-multiply"
                    onError={(e) => {
                      e.target.src = "/placeholder.png";
                    }}
                  />
                </div>

                {/* Category Name */}
                <p className="mt-2 text-xs md:text-sm font-medium text-gray-700 text-center group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
