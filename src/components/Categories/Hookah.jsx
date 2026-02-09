import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { createUnifiedProducts } from "../../Data/ProductsItems.js";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading.jsx";
import ProductDesign from "../Common/ProductDesign.jsx";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

function Hookah() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const allProducts = createUnifiedProducts().filter(
    (product) => product.category === "ProductThere",
  );

  return (
    <div className="w-full py-6 md:py-6 px-4 md:px-22 max-lg:px-8">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <Heading title="Hookah" />
        <Link
          to="/productlisting"
          className="md:hidden text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1"
        >
          View All <ChevronRightIcon sx={{ fontSize: 18 }} />
        </Link>
      </div>

      <div className="w-full relative">
        <button
          ref={(node) => setPrevEl(node)}
          className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-40 bg-green-600 text-white rounded-full w-10 h-10 hidden md:flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
          aria-label="Previous"
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
        </button>
        <button
          ref={(node) => setNextEl(node)}
          className="absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 z-40 bg-green-600 text-white rounded-full w-10 h-10 hidden md:flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
          aria-label="Next"
        >
          <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
        </button>

        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          modules={[Pagination, Navigation, FreeMode]}
          freeMode={{
            enabled: true,
            sticky: false,
          }}
          navigation={{
            prevEl,
            nextEl,
          }}
          breakpoints={{
            300: { slidesPerView: 2.5, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
            1280: { slidesPerView: 6, spaceBetween: 30 },
          }}
          className="w-full mySwiper pb-2"
        >
          {allProducts.map((item, idx) => (
            <SwiperSlide key={item.globalId || idx} className="h-auto">
              <Link to={`/showitem/${item.globalId}`} className="block h-full">
                <ProductDesign item={item} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hookah;
