import React from "react";

function ProductDesign({ item }) {
  return (
    <div>
      <div className="w-full h-full bg-white rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300 overflow-hidden flex flex-col group">
        {/* Image Container */}
        <div className="relative bg-[#f8f8f8] p-3 md:p-4 flex items-center justify-center h-36 md:h-32">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            {item.deliveryTime}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-3 md:p-4 flex-1 flex flex-col">
          <p className="font-semibold text-xs md:text-sm text-gray-800 line-clamp-2 min-h-[32px] md:min-h-[40px] mb-1">
            {item.name}
          </p>
          <span className="font-medium text-[10px] md:text-xs text-gray-500 mb-2">
            {item.size}
          </span>

          {/* Price and Add Button */}
          <div className="w-full flex items-center justify-between mt-auto pt-2">
            <div>
              <span className="text-[10px] text-gray-400 block -mb-1">MRP</span>
              <h4 className="font-bold text-sm md:text-base text-gray-900">
                ₹ {item.price}
              </h4>
            </div>
            <button className="bg-white border border-green-500 text-green-600 py-1 px-3 md:py-1.5 md:px-4 rounded-lg text-[10px] md:text-xs font-bold cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-200 active:scale-95">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDesign;
