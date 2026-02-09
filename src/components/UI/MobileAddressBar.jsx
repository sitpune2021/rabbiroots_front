import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MobileAddressBar = ({ city, onClick }) => {
  return (
    <div
      className="md:hidden w-full bg-[#f8f9fa] h-8 flex items-center px-4 gap-1.5 border-b border-gray-200/50 cursor-pointer active:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      <LocationOnIcon sx={{ fontSize: 10, color: "#16a34a" }} />
      <div className="flex items-center gap-1 overflow-hidden">
        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter flex-shrink-0">
          Delivering to
        </span>
        <span className="text-[10px] font-black text-gray-800 truncate tracking-tight uppercase">
          {city}
        </span>
      </div>
      <div className="ml-auto">
        <span className="text-[8px] text-green-600 font-bold tracking-tighter">
          CHANGE
        </span>
      </div>
    </div>
  );
};

export default MobileAddressBar;
