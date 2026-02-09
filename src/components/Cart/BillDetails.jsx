import React from "react";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const BillDetails = ({
  subtotal,
  deliveryCharge,
  handlingCharge,
  smallCartCharge,
  grandTotal,
}) => {
  const formatCurrency = (amount) =>
    amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });

  return (
    <div className="p-4 bg-white border-b border-gray-100 rounded-xl mt-3">
      <h3 className="font-bold text-gray-800 mb-3">Bill details</h3>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <ReceiptIcon sx={{ fontSize: 16, color: "gray" }} />
            <span className="text-gray-700">Items total</span>
          </div>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <LocalShippingIcon sx={{ fontSize: 16, color: "gray" }} />
            <span className="text-gray-700">Delivery charge</span>
            <InfoOutlinedIcon sx={{ fontSize: 14, color: "lightgray" }} />
          </div>
          <span className="font-medium">{formatCurrency(deliveryCharge)}</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <ShoppingBagIcon sx={{ fontSize: 16, color: "gray" }} />
            <span className="text-gray-700">Handling charge</span>
            <InfoOutlinedIcon sx={{ fontSize: 14, color: "lightgray" }} />
          </div>
          <span className="font-medium">{formatCurrency(handlingCharge)}</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <ShoppingBagIcon sx={{ fontSize: 16, color: "gray" }} />
            <span className="text-gray-700">Small cart charge</span>
            <InfoOutlinedIcon sx={{ fontSize: 14, color: "lightgray" }} />
          </div>
          <span className="font-medium">{formatCurrency(smallCartCharge)}</span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-200">
        <span className="font-bold text-gray-800">Grand total</span>
        <span className="font-bold text-gray-800">
          {formatCurrency(grandTotal)}
        </span>
      </div>
    </div>
  );
};

export default BillDetails;
