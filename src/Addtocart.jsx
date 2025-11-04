import React, { useContext, useState } from "react";
import { userContext } from "./App";

const AddToCart = () => {
  const { cart, setCart } = useContext(userContext);
  const [showPayment, setShowPayment] = useState(false); // modal state
  const [selectedMethod, setSelectedMethod] = useState("");

  // ➕ Increment
  const increment = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ➖ Decrement
  const decrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // ❌ Remove
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 💰 Grand Total
  const grandTotal = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  // 💳 Confirm payment
  const confirmPayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method 💰");
      return;
    }
    alert(`✅ Payment successful using ${selectedMethod}!`);
    setShowPayment(false);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h1>

      {/* Products Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {cart.length > 0 ? (
          cart.map((item) => {
            const total = (item.price * item.quantity).toFixed(2);
            return (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-500 mt-1">Price: ${item.price}</p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => decrement(item.id)}
                      className="px-3 py-1 text-lg font-bold bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="px-3 py-1 text-lg font-bold bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <span className="text-lg font-semibold text-green-600">
                    ${total}
                  </span>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 text-lg">Your cart is empty 🛍️</p>
        )}
      </div>

      {/* Payment Section */}
      {cart.length > 0 && (
        <div className="mt-10 bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Grand Total: <span className="text-green-600">${grandTotal}</span>
          </h3>
          <button
            onClick={() => setShowPayment(true)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {/* 💳 Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
              Choose Payment Method
            </h2>

            <div className="space-y-3">
              {["Credit Card", "Google Pay", "PhonePe", "Paytm", "Cash on Delivery"].map(
                (method) => (
                  <label
                    key={method}
                    className={`flex items-center justify-between px-4 py-2 border rounded-lg cursor-pointer transition ${
                      selectedMethod === method
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300"
                    }`}
                  >
                    <span className="text-gray-700 font-medium">{method}</span>
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={selectedMethod === method}
                      onChange={() => setSelectedMethod(method)}
                      className="accent-blue-600"
                    />
                  </label>
                )
              )}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowPayment(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmPayment}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
