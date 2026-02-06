import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, clearSearch } from "../../features/SearchSlice.js";

function Search() {
  const products = ["Ghee", "Curd", "Water", "Milk", "Sugar", "Oil"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, []);

  const dispatch = useDispatch();
  const { term, items } = useSelector((state) => state.search);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSelect = () => {
    dispatch(clearSearch());
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-2 md:gap-3 bg-gray-50 md:bg-white border border-gray-200 rounded-xl px-4 py-2 md:py-2.5 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition-all duration-200 group shadow-sm md:shadow-none">
        <i className="ri-search-line text-gray-400 md:text-gray-500 group-focus-within:text-green-600 text-lg md:text-xl"></i>
        <input
          type="text"
          placeholder={`Search for ${products[index]}...`}
          className="w-full bg-transparent border-none outline-none text-sm md:text-base font-medium text-gray-800 placeholder:text-gray-400"
          onChange={handleChange}
          value={term}
        />
        {term && (
          <button
            onClick={() => dispatch(clearSearch())}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex-shrink-0"
          >
            <i className="ri-close-circle-fill text-lg md:text-xl"></i>
          </button>
        )}
      </div>

      {term && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:shadow-lg rounded-2xl md:rounded-lg mt-2 max-h-[30rem] overflow-y-auto z-50 border border-gray-100">
          {items.length === 0 ? (
            <div className="p-6 md:p-3 text-center">
              <i className="ri-search-line text-4xl md:text-2xl text-gray-300 mb-2 block md:hidden"></i>
              <p className="text-gray-500 font-medium md:font-normal">
                No results found
              </p>
            </div>
          ) : (
            items.map((item) => (
              <Link to={`/showitem/${item.globalId}`} key={item.globalId}>
                <div
                  className="p-4 md:p-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 md:hover:bg-gray-100 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0 group"
                  onClick={handleSelect}
                >
                  <div className="flex items-center gap-3">
                    <i className="ri-shopping-bag-line text-green-600 text-lg md:text-base group-hover:scale-110 transition-transform duration-200"></i>
                    <span className="text-gray-800 font-medium md:font-normal text-sm md:text-base group-hover:text-green-600 transition-colors duration-200">
                      {item.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
