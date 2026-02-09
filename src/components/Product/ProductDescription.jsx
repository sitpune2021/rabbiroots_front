import React from "react";

const ProductDescription = ({ item }) => {
  return (
    <div className="mt-4 md:mt-8 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">
        Product Details
      </h3>
      <div className="text-xs md:text-sm text-gray-600 leading-relaxed space-y-2 md:space-y-3">
        <p>
          {item.description ||
            item.short ||
            "Experience the best quality with our premium selection. Carefully sourced and packed with care."}
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 md:space-y-2 text-gray-500">
          <li>Premium Quality</li>
          <li>Freshly Sourced</li>
          <li>Best Market Price</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
