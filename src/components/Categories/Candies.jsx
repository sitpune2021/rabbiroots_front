import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { createUnifiedProducts } from "../../Data/ProductsItems.js";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import Heading from "../Common/Heading.jsx";
import ProductDesign from "../Common/ProductDesign.jsx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";

function Candies() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const allProducts = createUnifiedProducts().filter(
    (product) =>
      product.category === "ProductOne" || product.category === "ProductTwo",
  );

  return (
    <div className="w-full py-6 md:py-6 px-4 md:px-22 max-lg:px-8">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <Heading title="Candies & Gums" />
        <Link
          to="/productlisting"
          className="md:hidden text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1"
        >
          View All <i className="ri-arrow-right-line"></i>
        </Link>
      </div>

      <div className="w-full relative">
        <button
          ref={prevRef}
          className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-xl hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
          style={{ left: "-12px" }}
          aria-label="Previous"
        >
          <i className="ri-arrow-left-s-line text-xl md:text-2xl"></i>
        </button>
        <button
          ref={nextRef}
          className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-xl hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
          style={{ right: "-12px" }}
          aria-label="Next"
        >
          <i className="ri-arrow-right-s-line text-xl md:text-2xl"></i>
        </button>

        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          modules={[Pagination, Navigation, FreeMode]}
          freeMode={{
            enabled: true,
            sticky: false,
          }}
          simulateTouch={true}
          allowTouchMove={true}
          touchRatio={1}
          resistance={true}
          resistanceRatio={0.85}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2.5,
              spaceBetween: 12,
            },
            400: {
              slidesPerView: 2.5,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full mySwiper flex items-center justify-between pb-2"
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

export default Candies;
