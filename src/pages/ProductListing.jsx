import React, { useState } from "react";
import ProductListingSidebar from "../components/Product/ProductListingSidebar";
import ProductListingCard from "../components/Product/ProductListingCard";
import { products, categories } from "../Data/productListingData";

function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const renderCategoryContent = (categoryIndex) => {
    switch (categoryIndex) {
      case 0:
        return {
          title: "Buy Cigar Online",
          description: "Explore our Cigar products",
        };
      case 1:
        return {
          title: "Buy Pan Masala Online",
          description: "Premium pan masala products for you",
        };
      case 2:
        return {
          title: "Buy Health & Wellness Supplements Online",
          description: "Get the best health and wellness supplements",
        };
      case 3:
        return {
          title: "Buy Protein and Workout Supplements Online",
          description: "Premium protein and workout supplements for fitness",
        };
      case 4:
        return {
          title: "Buy Masks & Sanitizers Online",
          description: "Shop for masks and sanitizers for health protection",
        };
      default:
        return {
          title: "Welcome to Our Store",
          description: "Select a category to browse products",
        };
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col py-3 md:py-6 px-3 md:px-22 max-lg:px-8 shadow-sm bg-gray-100">
      <div className="flex gap-2 md:gap-4 p-1 md:p-6 flex-1 overflow-hidden flex-row">
        <ProductListingSidebar products={products} />

        <main className="flex-1 shadow-lg p-3 md:p-6 bg-white rounded-lg overflow-y-auto">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
            {renderCategoryContent(selectedCategory).title}
          </h1>
          <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
            {renderCategoryContent(selectedCategory).description}
          </p>
          <hr className="mb-4 md:mb-6" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
            {products.map((product) => (
              <ProductListingCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductListing;
