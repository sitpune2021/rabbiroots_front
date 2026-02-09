import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const CartHeader = ({ handleToggle }) => {
  return (
    <div className="flex justify-between items-center rounded-md p-4 border-b border-gray-200 max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-full bg-white mt-4">
      <h2 className="text-md font-semibold text-gray-800">My Cart</h2>
      <button
        onClick={handleToggle}
        className="text-gray-500 hover:text-gray-700 transition-colors"
      >
        <CloseIcon sx={{ fontSize: 24 }} />
      </button>
    </div>
  );
};

export default CartHeader;
