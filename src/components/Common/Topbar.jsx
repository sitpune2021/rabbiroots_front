import React from "react";
import TopbarImg from "../../assets/topbar.webp";
import { Link } from "react-router-dom";
import MiniTopbar from "./MiniTopbar";

function Topbar() {

  return (
    <div className="w-full py-3 md:py-2 px-2 md:px-22 max-lg:px-4 flex flex-col gap-4 max-lg:mt-[6rem] max-sm:mt-[4rem]">
      {/* Desktop Top Banner */}
      <Link to={"/productlisting"} className="hidden md:block">
        <img
          src={TopbarImg}
          alt="topbar"
          className="w-full my-2 h-full object-cover cursor-pointer rounded-xl transition-shadow duration-300"
        />
      </Link>

      <MiniTopbar />
    </div>
  );
}

export default Topbar;
