import React, { useState, useEffect } from "react";
import { X, Trash2 } from "lucide-react";

export default function ProfilePage({ isOpen, onClose }) {
  const [userName, setUserName] = useState("User");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const name = localStorage.getItem("userName") || "User";
    setUserName(name);

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, [isOpen]);

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalCarbon = cartItems.reduce(
    (sum, item) => sum + item.carbonFootprint,
    0
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold">{userName}</p>
              <p className="text-sm text-gray-500">EcoShopper</p>
            </div>
          </div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <h3 className="font-semibold text-gray-700 text-lg mb-2">
            Your Cart
          </h3>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-sm">No items in cart</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border rounded-lg p-3 hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded"
                />

                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">₹{item.price}</p>
                  <p className="text-xs text-green-600">
                    CO₂: {item.carbonFootprint} kg
                  </p>
                </div>

                {/* Delete Icon */}
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove from cart"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t space-y-3">
          <div className="flex justify-between font-semibold text-gray-700">
            <span>Total Price:</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between font-semibold text-green-600">
            <span>Total CO₂:</span>
            <span>{totalCarbon.toFixed(2)} kg</span>
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Checkout
          </button>

          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}
