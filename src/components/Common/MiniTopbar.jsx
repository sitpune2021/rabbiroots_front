import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/b1.avif";
import Img2 from "../../assets/b2.avif";
import Img3 from "../../assets/b3.avif";
import Img4 from "../../assets/b4.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const bannerImages = [Img1, Img2, Img3, Img4];

function MiniTopbar() {
  return (
    <div>
      <div className="md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {bannerImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Link to={"/productlisting"}>
                <div className="relative py-4 w-full aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img
                    src={img}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link to={"/productlisting"} className="hidden md:block">
        <div className="w-[100%] flex items-center gap-4 px-5 overflow-hidden max-lg:px-0 ">
          <img
            src={Img1}
            alt="Banner 1"
            className="w-[30%] h-full object-cover cursor-pointer rounded-xl hover:shadow-lg transition-all duration-300"
          />
          <img
            src={Img2}
            alt="Banner 2"
            className="w-[30%] h-full object-cover cursor-pointer rounded-xl hover:shadow-lg transition-all duration-300"
          />
          <img
            src={Img3}
            alt="Banner 3"
            className="w-[30%] h-full object-cover cursor-pointer rounded-xl hover:shadow-lg transition-all duration-300"
          />
        </div>
      </Link>
    </div>
  );
}

export default MiniTopbar;
