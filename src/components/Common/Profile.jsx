import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/AuthSlice.js";
import { useNavigate } from "react-router-dom";
import { toggleCart } from "../../features/CartSlice.js";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SecurityIcon from "@mui/icons-material/Security";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Profile({ openAuth }) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const openAccountMenu = () => setShowAccountMenu((s) => !s);
  const closeAccountMenu = () => setShowAccountMenu(false);

  const handleCloneToggle = () => {
    dispatch(toggleCart());
  };

  return (
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
            <AccountCircleIcon sx={{ fontSize: 24 }} />
            <span className="hidden lg:block text-sm font-black uppercase tracking-wider">
              Account
            </span>
            <KeyboardArrowDownIcon
              className={`transition-transform duration-200 ${showAccountMenu ? "rotate-180" : ""}`}
            />
          </button>

          {showAccountMenu && (
            <div className="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-2xl z-[100] border border-gray-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="px-4 py-2 border-b border-gray-50 mb-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Profile
                </p>
                <p className="text-sm font-black text-gray-800 truncate">
                  {user.name || "User"}
                </p>
              </div>

              <div className="px-1 space-y-0.5">
                <button
                  onClick={() => {
                    navigate("/account?section=home");
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-3 rounded-lg"
                >
                  <SettingsIcon sx={{ fontSize: 20 }} />
                  <span className="text-sm font-semibold">Settings</span>
                </button>

                <button
                  onClick={() => {
                    navigate("/account/addresses");
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-3 rounded-lg"
                >
                  <HomeWorkIcon sx={{ fontSize: 20 }} />
                  <span className="text-sm font-semibold">My Addresses</span>
                </button>

                <button
                  onClick={() => {
                    navigate("/account/orders");
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-3 rounded-lg"
                >
                  <Inventory2Icon sx={{ fontSize: 20 }} />
                  <span className="text-sm font-semibold">My Orders</span>
                </button>

                <button
                  onClick={() => {
                    navigate("/account/giftcards");
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-3 rounded-lg"
                >
                  <CardGiftcardIcon sx={{ fontSize: 20 }} />
                  <span className="text-sm font-semibold">E-Gift Cards</span>
                </button>

                <button
                  onClick={() => {
                    navigate("/account/privacy");
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-3 rounded-lg"
                >
                  <SecurityIcon sx={{ fontSize: 20 }} />
                  <span className="text-sm font-semibold">Account Privacy</span>
                </button>

                <button
                  onClick={() => {
                    handleCloneToggle();
                    closeAccountMenu();
                  }}
                  className="md:hidden w-full text-left px-4 py-2 hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors flex items-center gap-3 rounded-lg"
                >
                  <ShoppingCartIcon sx={{ fontSize: 20 }} />
                  <span className="text-sm font-semibold">My Cart</span>
                </button>

                <div className="h-px bg-gray-100 my-1 mx-2"></div>

                <button
                  onClick={() => {
                    if (window.confirm("Logout?")) {
                      dispatch(logout());
                      navigate("/");
                    }
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 transition-colors flex items-center gap-3 rounded-lg"
                >
                  <LogoutIcon sx={{ fontSize: 20 }} />
                  <span className="text-sm font-bold">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {!user && (
        <button
          onClick={openAuth}
          className="md:hidden w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
        >
          <PersonOutlineIcon />
        </button>
      )}
    </div>
  );
}

export default Profile;
