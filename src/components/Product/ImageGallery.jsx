import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ImageGallery = ({
  item,
  gallery,
  selectedImageIndex,
  setSelectedImageIndex,
}) => {
  const mainImgRef = useRef(null);
  const [zoomActive, setZoomActive] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({
    backgroundSize: "",
    backgroundPosition: "",
  });
  const [lensPos, setLensPos] = useState({ left: 0, top: 0, size: 100 });

  const ZOOM_SCALE = 2.5;
  const gallerySrc = (gallery && gallery[selectedImageIndex]) || item.image;

  const onMouseMove = (e) => {
    if (!mainImgRef.current) return;
    const rect = mainImgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
      setZoomActive(false);
      return;
    }

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const bgSize = `${Math.round(rect.width * ZOOM_SCALE)}px ${Math.round(rect.height * ZOOM_SCALE)}px`;
    const bgPos = `${percentX}% ${percentY}%`;

    setZoomStyle({ backgroundSize: bgSize, backgroundPosition: bgPos });

    const LENS_SIZE = 100;
    setLensPos({
      left: Math.max(0, Math.min(x - LENS_SIZE / 2, rect.width - LENS_SIZE)),
      top: Math.max(0, Math.min(y - LENS_SIZE / 2, rect.height - LENS_SIZE)),
      size: LENS_SIZE,
    });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 md:gap-4">
      {/* Thumbnails */}
      {gallery.length > 1 && (
        <div className="flex lg:flex-col gap-2 md:gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[500px] scrollbar-hide py-1 md:py-2 lg:py-0 px-1 lg:px-0">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`relative flex-shrink-0 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg md:rounded-xl border-2 overflow-hidden transition-all duration-200 ${
                selectedImageIndex === idx
                  ? "border-green-500 ring-2 ring-green-100"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image */}
      <div className="flex-1 relative group z-20">
        <div className="relative bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm overflow-hidden aspect-square lg:aspect-[4/3] flex items-center justify-center p-4 md:p-8">
          <div
            ref={mainImgRef}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setZoomActive(true)}
            onMouseLeave={() => setZoomActive(false)}
            className="relative w-full h-full flex items-center justify-center cursor-crosshair"
          >
            <motion.img
              key={gallerySrc}
              initial={{ opacity: 0.8, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={gallerySrc}
              alt={item.name}
              className="max-w-full max-h-full object-contain"
            />

            {zoomActive && (
              <div
                className="absolute border border-green-500/30 bg-green-500/10 backdrop-blur-[1px] rounded-lg pointer-events-none hidden lg:block"
                style={{
                  left: lensPos.left,
                  top: lensPos.top,
                  width: lensPos.size,
                  height: lensPos.size,
                }}
              />
            )}
          </div>

          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-3 right-3 md:top-4 md:right-4 p-2 md:p-3 bg-white rounded-full shadow-md border border-gray-100 hover:scale-110 transition-transform active:scale-95 z-10"
          >
            {isWishlisted ? (
              <FavoriteIcon className="text-red-500" />
            ) : (
              <FavoriteBorderIcon className="text-gray-400" />
            )}
          </button>
        </div>

        {zoomActive && (
          <div
            className="absolute hidden lg:block z-50 overflow-hidden rounded-2xl shadow-2xl border border-gray-100 bg-white"
            style={{
              left: "105%",
              top: 0,
              width: "500px",
              height: "500px",
              backgroundImage: `url(${gallerySrc})`,
              backgroundSize: zoomStyle.backgroundSize,
              backgroundPosition: zoomStyle.backgroundPosition,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
