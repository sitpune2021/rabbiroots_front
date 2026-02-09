import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartItem = ({ item, onRemove, onAdd }) => {
  return (
    <div className="p-4 bg-white border-b border-gray-100 mt-3 rounded-xl">
      <div className="flex items-start gap-3">
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-cover rounded"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-normal text-gray-800 text-[12px]">{item.name}</h3>
          <p className="text-gray-600 text-sm">{item.size}</p>
          <p className="font-semibold text-gray-800 mt-1 text-[11px]">
            {item.price}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-green-500 rounded-md py-1">
          <button
            onClick={onRemove}
            className="w-8 h-8 text-white flex items-center justify-center font-bold"
          >
            <RemoveIcon sx={{ fontSize: 16 }} />
          </button>
          <span className="w-4 text-center font-bold text-white">
            {item.quantity}
          </span>
          <button
            onClick={onAdd}
            className="w-8 h-8 text-white flex items-center justify-center font-bold"
          >
            <AddIcon sx={{ fontSize: 16 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
