import React from "react";
import { motion } from "framer-motion";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import ReplayIcon from "@mui/icons-material/Replay";

const ProductInfo = ({
  item,
  quantity,
  increase,
  decrease,
  handleAddToCart,
  addSuccess,
}) => {
  const formatPrice = (price) => {
    if (typeof price === "string" && price.includes("₹")) return price;
    if (typeof price === "number") return `₹${price}`;
    return price;
  };

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm border border-gray-100 lg:sticky lg:top-24">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-1.5 md:gap-2 text-green-700 font-bold text-[10px] md:text-xs uppercase tracking-wider mb-2 md:mb-3 bg-green-50 w-fit px-2 md:px-3 py-1 rounded-full border border-green-100">
          <AccessTimeIcon sx={{ fontSize: 14 }} />
          {item.deliveryTime || "10 MINS"}
        </div>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
          {item.name}
        </h1>
        <div className="flex items-center gap-3 md:gap-4 mt-2 md:mt-3">
          <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg gap-1 border border-green-100">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ fontSize: 16 }} />
              ))}
            </div>
            <span className="text-[10px] md:text-xs font-bold text-green-800 ml-1">
              4.8
            </span>
          </div>
          <span className="text-xs md:text-sm text-gray-500 font-medium">
            235 Reviews
          </span>
        </div>
      </div>

      <div className="h-px bg-gray-100 my-4 md:my-6" />

      {/* Price & Size */}
      <div className="flex items-end justify-between mb-4 md:mb-8">
        <div>
          <p className="text-xs md:text-sm text-gray-500 font-medium mb-1">
            Price
          </p>
          <div className="flex items-baseline gap-2 md:gap-3">
            <span className="text-2xl md:text-4xl font-extrabold text-gray-900">
              {formatPrice(item.price)}
            </span>
            {item.originalPrice && (
              <span className="text-sm md:text-lg text-gray-400 line-through decoration-2">
                {formatPrice(item.originalPrice)}
              </span>
            )}
          </div>
          <p className="text-[10px] md:text-xs text-gray-400 mt-1">
            (Inclusive of all taxes)
          </p>
        </div>
        {item.discount && (
          <div className="bg-red-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl font-bold text-xs md:text-sm shadow-lg shadow-red-200">
            {item.discount} OFF
          </div>
        )}
      </div>

      {/* Quantity & Add */}
      <div className="space-y-3 md:space-y-4 mb-4 md:mb-8">
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded-xl md:rounded-2xl border border-gray-100">
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={decrease}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200 hover:border-green-500 hover:text-green-600 transition-all active:scale-95"
            >
              <RemoveIcon sx={{ fontSize: 20 }} />
            </button>
            <span className="text-lg md:text-xl font-bold text-gray-900 w-6 md:w-8 text-center">
              {quantity}
            </span>
            <button
              onClick={increase}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200 hover:border-green-500 hover:text-green-600 transition-all active:scale-95"
            >
              <AddIcon sx={{ fontSize: 20 }} />
            </button>
          </div>
          <div className="text-right pr-3 md:pr-4">
            <p className="text-[10px] md:text-xs text-gray-500">Total</p>
            <p className="font-bold text-sm md:text-base text-gray-900">
              {typeof item.price === "number"
                ? `₹${item.price * quantity}`
                : item.price}
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={addSuccess}
          className={`w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 ${
            addSuccess
              ? "bg-green-700 text-white cursor-default"
              : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-green-200"
          }`}
        >
          {addSuccess ? (
            <>
              <ShoppingBagIcon className="animate-bounce" />
              Added to Cart!
            </>
          ) : (
            <>Add to Cart</>
          )}
        </motion.button>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 py-4 md:py-6 border-t border-gray-100">
        <div className="flex flex-col items-center text-center gap-1 md:gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
            <LocalShippingIcon sx={{ fontSize: 20 }} />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-gray-700">
            Superfast Delivery
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-1 md:gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <SecurityIcon sx={{ fontSize: 20 }} />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-gray-700">
            Secure Payment
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-1 md:gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
            <ReplayIcon sx={{ fontSize: 20 }} />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-gray-700">
            Easy Returns
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
