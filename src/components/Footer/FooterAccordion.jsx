import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FooterAccordion = ({ title, icon: Icon, isOpen, toggle, children }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm mb-3">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="flex items-center gap-2">
          {Icon && <Icon sx={{ color: "#16a34a", fontSize: 20 }} />}
          {title}
        </span>
        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      {isOpen && <div className="px-4 pb-4 animate-fadeIn">{children}</div>}
    </div>
  );
};

export default FooterAccordion;
