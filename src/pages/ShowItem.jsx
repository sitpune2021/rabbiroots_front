import React, { useEffect, useState, useMemo, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { createUnifiedProducts } from "../Data/ProductsItems.js";
import Loader from "../components/UI/Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice.js";
import {
  Truck,
  Shield,
  Repeat,
  Star,
  ChevronRight,
  Home,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RelatedProduct from "./RelatedProduct";
function ShowItem() {
  const { id } = useParams();
  const initialShown = sessionStorage.getItem("appInitialized") === "true";
  const [loading, setLoading] = useState(() => (initialShown ? false : true));
  const [addSuccess, setAddSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const mainImgRef = useRef(null);
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({
    backgroundSize: "",
    backgroundPosition: "",
  });
  const [lensPos, setLensPos] = useState({ left: 0, top: 0 });
  const [isWishlisted, setIsWishlisted] = useState(false);

  const ZOOM_SCALE = 2.5;
  const dispatch = useDispatch();

  const allProducts = createUnifiedProducts();
  const item = allProducts.find(
    (product) =>
      String(product.globalId) === String(id) ||
      Number(product.globalId) === Number(id),
  );

  useEffect(() => {
    if (initialShown) return;
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("appInitialized", "true");
      } catch (e) {}
    }, 700);
    return () => clearTimeout(timer);
  }, [initialShown]);

  useEffect(() => {
    if (item) document.title = `${item.name} • RabbiRoot`;
    return () => (document.title = "RabbiRoot");
  }, [item]);

  useEffect(() => setSelectedImageIndex(0), [item]);

  const related = useMemo(
    () => allProducts.filter((p) => p.globalId !== item?.globalId).slice(0, 12),
    [allProducts, item],
  );

  if (!item && !loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Item Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          We couldn't find the product you're looking for.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  if (loading) return <Loader />;

  const formatPrice = (price) => {
    if (typeof price === "string" && price.includes("₹")) return price;
    if (typeof price === "number") return `₹${price}`;
    return price;
  };

  const handleAddToCart = () => {
    if (!item) return;
    dispatch(addToCart({ ...item, quantity }));
    setAddSuccess(true);
    setTimeout(() => setAddSuccess(false), 2000);
  };

  const increase = () => setQuantity((q) => Math.min(99, q + 1));
  const decrease = () => setQuantity((q) => Math.max(1, q - 1));

  const gallery =
    item?.images && item.images.length ? item.images : [item.image];
  const gallerySrc = (gallery && gallery[selectedImageIndex]) || item.image;

  // Zoom Logic
  const onMouseMove = (e) => {
    if (!mainImgRef.current) return;
    const rect = mainImgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Bounds check
    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
      setZoomActive(false);
      return;
    }

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const bgSize = `${Math.round(rect.width * ZOOM_SCALE)}px ${Math.round(
      rect.height * ZOOM_SCALE,
    )}px`;
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
    <div className="min-h-screen bg-[#F8F9FA] pb-20 md:pb-8">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] md:top-[68px] z-40 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center text-sm text-gray-500">
          <Link
            to="/"
            className="hover:text-green-600 transition-colors flex items-center gap-1"
          >
            <Home size={16} /> Home
          </Link>
          <ChevronRight size={14} className="mx-2 text-gray-400" />
          <Link
            to="/"
            className="hover:text-green-600 transition-colors"
          >
            Categories
          </Link>
          <ChevronRight size={14} className="mx-2 text-gray-400" />
          <span className="text-gray-900 font-medium truncate max-w-[200px]">
            {item.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12">
          {/* Left Column: Images */}
          <div className="lg:col-span-7 space-y-3 md:space-y-6">
            <div className="flex flex-col-reverse lg:flex-row gap-3 md:gap-4">
              {/* Thumbnails (Vertical on desktop, Horizontal on mobile) */}

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

                    {/* Lens */}
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

                  {/* Wishlist Button */}
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-3 right-3 md:top-4 md:right-4 p-2 md:p-3 bg-white rounded-full shadow-md border border-gray-100 hover:scale-110 transition-transform active:scale-95 z-10"
                  >
                    <Heart
                      size={18}
                      className={`md:w-5 md:h-5 transition-colors ${
                        isWishlisted
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>

                {/* Zoom Portal/Preview */}
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

            {/* Highlights / Features */}
            {item.featureImages && item.featureImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-8">
                {item.featureImages.slice(0, 4).map((feat, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
                  >
                    <img
                      src={feat.image}
                      alt=""
                      className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2 md:mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 text-xs md:text-sm">
                      {feat.title}
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="mt-4 md:mt-8 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">
                Product Details
              </h3>
              <div className="text-xs md:text-sm text-gray-600 leading-relaxed space-y-2 md:space-y-3">
                <p>
                  {item.description ||
                    item.short ||
                    "Experience the best quality with our premium selection. Carefully sourced and packed with care."}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 md:space-y-2 text-gray-500">
                  <li>Premium Quality</li>
                  <li>Freshly Sourced</li>
                  <li>Best Market Price</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm border border-gray-100 lg:sticky lg:top-24">
              {/* Header */}
              <div className="mb-4 md:mb-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-green-700 font-bold text-[10px] md:text-xs uppercase tracking-wider mb-2 md:mb-3 bg-green-50 w-fit px-2 md:px-3 py-1 rounded-full border border-green-100">
                  <Clock size={10} className="md:w-3 md:h-3" />
                  {item.deliveryTime || "10 MINS"}
                </div>
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
                  {item.name}
                </h1>
                <div className="flex items-center gap-3 md:gap-4 mt-2 md:mt-3">
                  <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg gap-1 border border-green-100">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="md:w-3.5 md:h-3.5"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-green-800 ml-1">
                      4.8
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 font-medium">
                    235 Reviews
                  </span>
                </div>
              </div>

              <div className="h-px bg-gray-100 my-4 md:my-6" />

              {/* Price & Size */}
              <div className="flex items-end justify-between mb-4 md:mb-8">
                <div>
                  <p className="text-xs md:text-sm text-gray-500 font-medium mb-1">
                    Price
                  </p>
                  <div className="flex items-baseline gap-2 md:gap-3">
                    <span className="text-2xl md:text-4xl font-extrabold text-gray-900">
                      {formatPrice(item.price)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm md:text-lg text-gray-400 line-through decoration-2">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                    (Inclusive of all taxes)
                  </p>
                </div>
                {item.discount && (
                  <div className="bg-red-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl font-bold text-xs md:text-sm shadow-lg shadow-red-200">
                    {item.discount} OFF
                  </div>
                )}
              </div>

              {/* Quantity & Add */}
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-8">
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded-xl md:rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3 md:gap-4">
                    <button
                      onClick={decrease}
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200 hover:border-green-500 hover:text-green-600 transition-all active:scale-95"
                    >
                      <Minus size={16} className="md:w-5 md:h-5" />
                    </button>
                    <span className="text-lg md:text-xl font-bold text-gray-900 w-6 md:w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={increase}
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200 hover:border-green-500 hover:text-green-600 transition-all active:scale-95"
                    >
                      <Plus size={16} className="md:w-5 md:h-5" />
                    </button>
                  </div>
                  <div className="text-right pr-3 md:pr-4">
                    <p className="text-[10px] md:text-xs text-gray-500">
                      Total
                    </p>
                    <p className="font-bold text-sm md:text-base text-gray-900">
                      {typeof item.price === "number"
                        ? `₹${item.price * quantity}`
                        : item.price}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={addSuccess}
                  className={`w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 ${
                    addSuccess
                      ? "bg-green-700 text-white cursor-default"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-green-200"
                  }`}
                >
                  {addSuccess ? (
                    <>
                      <ShoppingBag
                        size={18}
                        className="md:w-6 md:h-6 animate-bounce"
                      />
                      Added to Cart!
                    </>
                  ) : (
                    <>Add to Cart</>
                  )}
                </motion.button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 py-4 md:py-6 border-t border-gray-100">
                <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                    <Truck size={16} className="md:w-5 md:h-5" />
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-700">
                    Superfast Delivery
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <Shield size={16} className="md:w-5 md:h-5" />
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-700">
                    Secure Payment
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                    <Repeat size={16} className="md:w-5 md:h-5" />
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-700">
                    Easy Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProduct related={related} />
      </div>
    </div>
  );
}

export default ShowItem;
