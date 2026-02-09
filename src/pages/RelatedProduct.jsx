import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import ProductDesign from "../components/Common/ProductDesign.jsx";
import Heading from "../components/Common/Heading";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

function RelatedProduct({ related }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  if (!related || related.length === 0) return null;

  return (
    <div className="mt-8 md:mt-20">
      <div className="flex items-center justify-between mb-4 md:mb-8">
        <Heading title="Related Products" />
        <Link
          to="/"
          className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1 text-sm md:text-base"
        >
          View All <ChevronRightIcon sx={{ fontSize: 18 }} />
        </Link>
      </div>

      <div className="w-full relative px-2 md:px-0">
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
          className="w-full pb-2 swiper-visible-nav"
        >
          {related.map((item, idx) => (
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

export default RelatedProduct;
