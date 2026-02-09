import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CartFooter = ({ grandTotal }) => {
  const formattedGrandTotal = grandTotal.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="hidden md:block w-[90%] rounded-md absolute bottom-4 left-0 m-auto right-0 bg-green-600 p-2 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="pl-2">
          <p className="text-white text-sm font-bold">{formattedGrandTotal}</p>
          <p className="text-white text-[10px] opacity-90">TOTAL</p>
        </div>
        <button className="text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-1 hover:bg-green-700 transition-colors">
          Login to Proceed
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
