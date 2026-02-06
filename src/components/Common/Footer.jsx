import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white md:bg-white text-gray-700 py-8 md:py-10 px-4 sm:px-8 md:px-16 lg:px-22 border-t border-gray-200">
      <div className="w-full mx-auto max-w-7xl">
        {/* Mobile Accordion Layout */}
        <div className="md:hidden space-y-3">
          {/* Useful Links - Mobile Accordion */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleSection("useful")}
              className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <i className="ri-links-line text-green-600"></i>
                Useful Links
              </span>
              <i
                className={`ri-arrow-${openSection === "useful" ? "up" : "down"}-s-line text-xl transition-transform duration-200`}
              ></i>
            </button>
            {openSection === "useful" && (
              <ul className="px-4 pb-4 space-y-3 animate-fadeIn">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Partner - Mobile Accordion */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleSection("partner")}
              className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <i className="ri-handshake-line text-green-600"></i>
                Partner
              </span>
              <i
                className={`ri-arrow-${openSection === "partner" ? "up" : "down"}-s-line text-xl transition-transform duration-200`}
              ></i>
            </button>
            {openSection === "partner" && (
              <ul className="px-4 pb-4 space-y-3 animate-fadeIn">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Partner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Franchise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Seller
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Warehouse
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Deliver
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Recipes & Bistro - Mobile Accordion */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleSection("recipes")}
              className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <i className="ri-restaurant-line text-green-600"></i>
                Recipes & Bistro
              </span>
              <i
                className={`ri-arrow-${openSection === "recipes" ? "up" : "down"}-s-line text-xl transition-transform duration-200`}
              ></i>
            </button>
            {openSection === "recipes" && (
              <ul className="px-4 pb-4 space-y-3 animate-fadeIn">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Recipes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Bistro
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    District
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Categories - Mobile Accordion */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleSection("categories")}
              className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <i className="ri-grid-line text-green-600"></i>
                Categories
              </span>
              <i
                className={`ri-arrow-${openSection === "categories" ? "up" : "down"}-s-line text-xl transition-transform duration-200`}
              ></i>
            </button>
            {openSection === "categories" && (
              <div className="px-4 pb-4 animate-fadeIn">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Vegetables & Fruits
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Dairy & Breakfast
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Cold Drinks & Juices
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Instant & Frozen Food
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Bakery & Biscuits
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Sweet Tooth
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Dry Fruits & Masala
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Sauces & Spreads
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Paan Corner
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Organic & Premium
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Pharma & Wellness
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Cleaning Essentials
                  </a>
                </div>
                <a
                  href="#"
                  className="inline-block mt-4 text-sm font-semibold text-green-600 hover:text-green-700"
                >
                  See all categories <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            )}
          </div>

          {/* More Categories - Mobile Accordion */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleSection("more")}
              className="w-full flex items-center justify-between p-4 text-left font-bold text-base text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <i className="ri-more-line text-green-600"></i>
                More Categories
              </span>
              <i
                className={`ri-arrow-${openSection === "more" ? "up" : "down"}-s-line text-xl transition-transform duration-200`}
              ></i>
            </button>
            {openSection === "more" && (
              <ul className="px-4 pb-4 space-y-3 animate-fadeIn">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Munchies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Tea, Coffee & Health Drinks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Atta, Rice & Dal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Chicken, Meat & Fish
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Baby Care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Home & Office
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Pet Care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    Fashion & Accessories
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden md:flex w-full flex-col gap-10 md:gap-8 md:flex-row md:items-start md:justify-between">
          {/* Useful Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Partner Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 md:invisible">Partner</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Franchise
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Seller
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Warehouse
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Deliver
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Recipes & Bistro Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 md:invisible">
              Recipes & Bistro
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bistro
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  District
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="mb-8 md:mb-0 w-full sm:w-auto md:w-[340px]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <h3 className="text-lg font-bold">Categories</h3>
              <a
                href="#"
                className="text-green-500 text-sm hover:underline mt-2 sm:mt-0"
              >
                see all
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Vegetables & Fruits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cold Drinks & Juices
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Bakery & Biscuits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Dry Fruits, Masala & Oil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Paan Corner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pharma & Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Ice Creams & Frozen Desserts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Beauty & Cosmetics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Electronics & Electricals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Toys & Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Rakhi Gifts
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Dairy & Breakfast
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instant & Frozen Food
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sweet Tooth
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sauces & Spreads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Organic & Premium
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cleaning Essentials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Personal Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Magazines
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* More Categories Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 md:invisible">
              More Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Munchies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tea, Coffee & Health Drinks
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Atta, Rice & Dal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chicken, Meat & Fish
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Baby Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Home & Office
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pet Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fashion & Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  E-Gift Cards
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 md:my-8 border-gray-200" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-5 md:space-y-0">
          <p className="text-center md:text-left text-xs md:text-sm">
            © RabbiRoots Commerce Private Limited, 2024-2025
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 md:bg-transparent px-5 py-3 md:px-0 md:py-0 rounded-full md:rounded-none">
              <span className="font-semibold text-gray-800 text-sm">
                Download App
              </span>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                <i className="ri-apple-fill text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                <i className="ri-google-play-fill text-2xl"></i>
              </a>
            </div>
            <div className="flex gap-5 md:gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-blue-600 transition-all duration-200 hover:scale-110"
              >
                <i className="ri-facebook-circle-fill text-2xl"></i>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110"
              >
                <i className="ri-twitter-x-fill text-2xl"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-pink-600 transition-all duration-200 hover:scale-110"
              >
                <i className="ri-instagram-line text-2xl"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-700 transition-all duration-200 hover:scale-110"
              >
                <i className="ri-linkedin-box-fill text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 text-xs text-gray-500 text-center md:text-left leading-relaxed px-2 md:px-0">
          <p>
            "RabbiRoots" is owned & managed by "RabbiRoot Commerce Private
            Limited" and is not related, linked or interconnected in whatsoever
            manner or nature, to "GROFFR.COM" which is a real estate services
            business operated by "Redstone Consultancy Services Private
            Limited".
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
