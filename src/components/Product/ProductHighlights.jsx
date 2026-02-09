import React from "react";

const ProductHighlights = ({ item }) => {
  if (!item.featureImages || item.featureImages.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-8">
      {item.featureImages.slice(0, 4).map((feat, i) => (
        <div
          key={i}
          className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
        >
          <img
            src={feat.image}
            alt=""
            className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2 md:mb-3"
          />
          <h4 className="font-semibold text-gray-900 text-xs md:text-sm">
            {feat.title}
          </h4>
          <p className="text-[10px] md:text-xs text-gray-500 mt-1">
            {feat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductHighlights;
