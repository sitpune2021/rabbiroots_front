import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Search from "../UI/Search";
import Location from "../UI/Location";
import Acount from "./Profile.jsx";
import { useState } from "react";
import AuthModal from "../Auth/AuthModal";
import { useNavigate } from "react-router-dom";
import { toggleCart } from "../../features/CartSlice.js";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import MobileAddressBar from "../UI/MobileAddressBar";

function Header() {
  const [showAuth, setShowAuth] = useState(false);
  const [city, setCity] = useState("Mumbai, 400001");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloneToggle = () => {
    dispatch(toggleCart());
  };

  const openAuth = () => setShowAuth(true);
  const closeAuth = () => setShowAuth(false);

  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  const totalPrice = useSelector((state) =>
    state.cart.items.reduce((total, item) => {
      const priceString = String(item.price);
      const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
      return total + price * item.quantity;
    }, 0),
  );

  const formattedTotalPrice = totalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto h-16 md:h-20 px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
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

            <Location
              city={city}
              setCity={setCity}
              open={isLocationModalOpen}
              setOpen={setIsLocationModalOpen}
              className="hidden lg:flex border-l border-gray-200 pl-8"
            />
          </div>

          <div className="hidden md:block flex-1 max-w-2xl px-4">
            <Search />
          </div>

          <div className="flex items-center gap-2 md:gap-6 flex-shrink-0">
            <div className="md:hidden flex-1 min-w-[120px]">
              <Search />
            </div>

            <Acount openAuth={openAuth} />

            <button
              onClick={handleCloneToggle}
              className="hidden md:flex bg-green-600 hover:bg-green-700 h-10 md:h-12 px-3 md:px-5 rounded-xl items-center gap-2 md:gap-3 text-white shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer "
            >
              <div className="relative">
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: { xs: 20, md: 24 } }}
                />
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
        {/* Mobile Address Bar - Slim 16-20px bar */}
        <MobileAddressBar
          city={city}
          onClick={() => setIsLocationModalOpen(true)}
        />
      </div>

      {showAuth && <AuthModal onClose={closeAuth} />}
    </>
  );
}

export default Header;
