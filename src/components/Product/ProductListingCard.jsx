import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ProductListingCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2 md:p-3 hover:shadow-md transition-shadow duration-200 relative group">
      {product.discount && (
        <div className="absolute top-1 md:top-2 left-1 md:left-2 bg-orange-500 text-white text-xs font-bold px-1.5 md:px-2 py-0.5 rounded z-10">
          {product.discount}
        </div>
      )}

      <div className="aspect-square mb-1 md:mb-2 flex items-center justify-center bg-gray-50 rounded overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2"
        />
      </div>

      <div className="flex items-center gap-0.5 text-gray-600 text-xs mb-1">
        <AccessTimeIcon sx={{ fontSize: 12 }} />
        <span className="font-semibold text-xs">{product.deliveryTime}</span>
      </div>

      <h3 className="text-xs font-medium text-gray-900 mb-1 line-clamp-2 h-8">
        {product.name}
      </h3>

      <p className="text-xs text-gray-600 mb-1 md:mb-2">{product.packInfo}</p>

      <div className="flex items-center justify-between gap-1">
        <div>
          <span className="text-xs md:text-sm font-bold text-gray-900">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <p className="text-xs text-gray-500 line-through">
              ₹{product.originalPrice}
            </p>
          )}
        </div>

        <button className="bg-white border-2 border-green-600 text-green-600 text-xs font-semibold px-2 md:px-3 py-1 rounded hover:bg-green-600 hover:text-white transition-all duration-200">
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductListingCard;
