import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  closeCart,
} from "../../features/CartSlice.js";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import CartHeader from "../Cart/CartHeader";
import CartItem from "../Cart/CartItem";
import BillDetails from "../Cart/BillDetails";
import CartFooter from "../Cart/CartFooter";

function ItemsAdd() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const deliveryCharge = 25;
  const handlingCharge = 2;
  const smallCartCharge = 20;

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      parseFloat(String(item.price).replace(/[^0-9.-]+/g, "")) * item.quantity,
    0,
  );

  const grandTotal =
    subtotal > 0
      ? subtotal + deliveryCharge + handlingCharge + smallCartCharge
      : 0;

  const handleToggle = () => {
    dispatch(closeCart());
  };

  return (
    <div
      className={`w-full h-screen bg-black/50 fixed top-0 left-0 z-50 transition-opacity duration-300 ${
        isCartOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-[25rem] max-sm:w-full absolute right-0 top-0 h-full bg-zinc-100 shadow-xl transform transition-transform duration-300 ease-in-out px-4 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CartHeader handleToggle={handleToggle} />

        <div className="p-4 bg-white border-b border-gray-100 mt-3 rounded-xl max-sm:mt-20">
          <div className="flex items-center gap-2 mb-2">
            <AccessTimeIcon sx={{ color: "#27272a", fontSize: 20 }} />
            <div>
              <span className="text-zinc-800 font-medium text-sm">
                Delivery in 11 minutes
              </span>
              <p className="text-gray-600 text-[10px]">Shipment</p>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-250px)] pb-24 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="p-10 text-center text-gray-500 font-medium">
              Your cart is empty.
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onAdd={() => dispatch(addToCart(item))}
                  onRemove={() => dispatch(removeFromCart(item.id))}
                />
              ))}

              <BillDetails
                subtotal={subtotal}
                deliveryCharge={deliveryCharge}
                handlingCharge={handlingCharge}
                smallCartCharge={smallCartCharge}
                grandTotal={grandTotal}
              />

              <div className="p-4 bg-white border-b border-gray-100 rounded-xl mt-3 mb-4">
                <h3 className="font-bold text-gray-800 mb-2">
                  Cancellation Policy
                </h3>
                <p className="text-gray-600 text-[13px]">
                  Orders cannot be cancelled once packed for delivery. In case
                  of unexpected delays, a refund will be provided, if
                  applicable.
                </p>
              </div>
            </>
          )}
        </div>

        {cartItems.length > 0 && <CartFooter grandTotal={grandTotal} />}
      </div>
    </div>
  );
}

export default ItemsAdd;
