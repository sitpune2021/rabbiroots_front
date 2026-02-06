import React from "react";

function Heading({ title }) {
  return (
    <div className="flex items-center gap-3 py-4">
      {/* Accent bar */}
      <span className="h-8 w-[3px] rounded-full bg-emerald-500"></span>

      {/* Text */}
      <h2
        className="
          text-[22px] 
          md:text-[26px]
          font-bold
          text-black-900
          dark:text-black
          antialiased
          tracking-tight
        "
      >
        {title}
      </h2>
    </div>
  );
}

export default Heading;
