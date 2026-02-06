import React from "react";
import Logo from "../../assets/logo.png";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Search from "../UI/Search";
import Location from "../UI/Location";

import { useState } from "react";
import AuthModal from "../Auth/AuthModal";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/AuthSlice.js";
import { toggleCart } from "../../features/CartSlice.js";

function Header() {
  const [showAuth, setShowAuth] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloneToggle = () => {
    dispatch(toggleCart());
  };

  const openAuth = () => setShowAuth(true);
  const closeAuth = () => setShowAuth(false);

  const openAccountMenu = () => setShowAccountMenu((s) => !s);
  const closeAccountMenu = () => setShowAccountMenu(false);

  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  const totalPrice = useSelector((state) =>
    state.cart.items.reduce((total, item) => {
      const priceString = String(item.price); // Ensure it's a string
      const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
      return total + price * item.quantity;
    }, 0),
  );

  const formattedTotalPrice = totalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto h-16 md:h-20 px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Left: Logo & Location */}
          <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
            <Link
              to={"/"}
              className="transition-transform hover:scale-105 duration-200"
            >
              <img
                src={Logo}
                alt="logo"
                className="w-[45px] md:w-[90px] h-auto object-contain"
              />
            </Link>

            <div className="hidden lg:block border-l border-gray-200 pl-8">
              <Location />
            </div>
          </div>

          {/* Center: Search Bar (Desktop) */}
          <div className="hidden md:block flex-1 max-w-2xl px-4">
            <Search />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-6 flex-shrink-0">
            {/* Mobile Search Icon/Small Input (via Search component) */}
            <div className="md:hidden flex-1 min-w-[120px]">
              <Search />
            </div>

            {/* User Account */}
            <div className="relative flex items-center">
              {!user ? (
                <button
                  onClick={openAuth}
                  className="hidden md:block px-4 py-2 rounded-lg font-bold text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                >
                  Login
                </button>
              ) : (
                <div className="relative group">
                  <button
                    onClick={openAccountMenu}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg font-bold text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                  >
                    <i className="ri-user-3-line text-lg lg:text-xl"></i>
                    <span className="hidden lg:block text-sm font-black uppercase tracking-wider">
                      Account
                    </span>
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-200 ${showAccountMenu ? "rotate-180" : ""}`}
                    ></i>
                  </button>

                  {showAccountMenu && (
                    <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-2xl z-[100] border border-gray-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
                      <div className="px-4 py-2 border-b border-gray-50 mb-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                          Profile
                        </p>
                        <p className="text-sm font-black text-gray-800 truncate">
                          {user.name || "User"}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          navigate("/account?section=home");
                          closeAccountMenu();
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-3"
                      >
                        <i className="ri-user-line font-medium"></i>
                        <span className="text-sm font-semibold">Settings</span>
                      </button>
                      <button
                        onClick={() => {
                          navigate("/account?section=orders");
                          closeAccountMenu();
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-3"
                      >
                        <i className="ri-shopping-bag-line font-medium"></i>
                        <span className="text-sm font-semibold">My Orders</span>
                      </button>

                      <button
                        onClick={() => {
                          handleCloneToggle();
                          closeAccountMenu();
                        }}
                        className="md:hidden w-full text-left px-4 py-2.5 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-3"
                      >
                        <i className="ri-shopping-cart-2-line font-medium"></i>
                        <span className="text-sm font-semibold">My Cart</span>
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm("Logout?")) {
                            dispatch(logout());
                            navigate("/");
                          }
                          closeAccountMenu();
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-red-50 text-red-600 transition-colors flex items-center gap-3"
                      >
                        <i className="ri-logout-box-line font-medium"></i>
                        <span className="text-sm font-bold">Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Mobile Profile Icon (Visible if logged out and on mobile) */}
              {!user && (
                <button
                  onClick={openAuth}
                  className="md:hidden w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
                >
                  <i className="ri-user-line text-lg"></i>
                </button>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={handleCloneToggle}
              className="hidden md:flex bg-green-600 hover:bg-green-700 h-10 md:h-12 px-3 md:px-5 rounded-xl items-center gap-2 md:gap-3 text-white shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer "
            >
              <div className="relative">
                <i className="ri-shopping-cart-2-line text-lg md:text-xl"></i>
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-green-900 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none text-left">
                <span className="text-[10px] opacity-80 font-bold uppercase tracking-tighter">
                  My Cart
                </span>
                <span className="text-xs md:text-sm font-black">
                  {formattedTotalPrice}
                </span>
              </div>
              <span className="sm:hidden text-xs font-black">
                {formattedTotalPrice}
              </span>
            </button>
          </div>
        </div>
      </div>

      {showAuth && <AuthModal onClose={closeAuth} />}
    </>
  );
}

export default Header;
