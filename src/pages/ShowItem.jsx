import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { createUnifiedProducts } from "../Data/ProductsItems.js";
import Loader from "../components/UI/Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice.js";
import RelatedProduct from "./RelatedProduct";

import ProductBreadcrumbs from "../components/Product/ProductBreadcrumbs";
import ImageGallery from "../components/Product/ImageGallery";
import ProductHighlights from "../components/Product/ProductHighlights";
import ProductDescription from "../components/Product/ProductDescription";
import ProductInfo from "../components/Product/ProductInfo";

function ShowItem() {
  const { id } = useParams();
  const initialShown = sessionStorage.getItem("appInitialized") === "true";
  const [loading, setLoading] = useState(() => (initialShown ? false : true));
  const [addSuccess, setAddSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20 md:pb-8">
      <ProductBreadcrumbs itemName={item.name} />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-3 md:space-y-6">
            <ImageGallery
              item={item}
              gallery={gallery}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
            />
            <ProductHighlights item={item} />
            <ProductDescription item={item} />
          </div>

          <div className="lg:col-span-5">
            <ProductInfo
              item={item}
              quantity={quantity}
              increase={increase}
              decrease={decrease}
              handleAddToCart={handleAddToCart}
              addSuccess={addSuccess}
            />
          </div>
        </div>

        <RelatedProduct related={related} />
      </div>
    </div>
  );
}

export default ShowItem;
