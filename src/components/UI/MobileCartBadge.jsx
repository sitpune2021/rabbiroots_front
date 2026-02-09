import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { openCart } from "../../features/CartSlice";

const MobileCartBadge = () => {
  const dispatch = useDispatch();
  const { items, isCartOpen } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => {
    const priceString = String(item.price);
    const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
    return total + price * item.quantity;
  }, 0);

  if (totalItems === 0) return null;

  const formattedPrice = totalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const handleAction = () => {
    if (!isCartOpen) {
      dispatch(openCart());
    } else {
      if (!isAuthenticated) {
        // Here you would typically trigger your Login modal
        // Since the Header component handles showAuth, we might need a global state or a direct handler.
        // For now, let's just keep the cart interaction or assume the user wants it to prompt login.
        console.log("Redirect to login or open auth modal");
      } else {
        console.log("Proceed to checkout");
      }
    }
  };

  return (
    <div className="md:hidden fixed bottom-6 inset-x-0 mx-auto w-[92%] z-[60]">
      <button
        onClick={handleAction}
        className="w-full bg-green-700 text-white h-14 rounded-2xl shadow-[0_8px_30px_rgb(20,83,45,0.4)] flex items-center justify-between px-5 active:scale-95 transition-all duration-200 border border-green-700/50"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-xl">
            <ShoppingBasketIcon sx={{ fontSize: 24 }} />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest">
              {totalItems} {totalItems === 1 ? "Item" : "Items"}
            </span>
            <span className="text-lg font-black tracking-tight">
              {formattedPrice}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white/10 py-2 px-4 rounded-xl">
          <span className="text-sm font-black uppercase tracking-tighter">
            {isCartOpen
              ? isAuthenticated
                ? "Checkout"
                : "Login to Shop"
              : "View Cart"}
          </span>
          <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
        </div>
      </button>
    </div>
  );
};

export default MobileCartBadge;
