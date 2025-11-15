import React from "react";
import { Link } from "react-router-dom";
import { useFav } from "../../context/useFav";
import { Plus, Minus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { user, cartItems, updateCartQuantity, removeFromCart } = useFav();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Please Login
          </h2>
          <p className="text-gray-600 mb-6">
            You need to be logged in to view your cart.
          </p>
          <Link
            to="/login"
            className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors font-medium"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const cartItemsArray = Object.values(cartItems);
  const total = cartItemsArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            to="/profile"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Shopping Cart
            </h1>
            <p className="text-gray-600">
              Review your items ({cartItemsArray.length} items)
            </p>
          </div>
        </div>

        {cartItemsArray.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-600 mb-6">
              Start adding medicines to your cart!
            </p>
            <Link
              to="/explore"
              className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors font-medium"
            >
              Explore Medicines
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItemsArray.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm p-6"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-lg font-bold text-blue-600">
                        {item.price} EGP
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-gray-600">
                      Subtotal: {(item.price * item.quantity).toFixed(2)} EGP
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      {total.toFixed(2)} EGP
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">25.00 EGP</span>
                  </div>

                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{(total + 25).toFixed(2)} EGP</span>
                  </div>
                </div>

                <Link to="checkout">
                  <button className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-600 transition-colors font-medium mb-4">
                    Proceed to Checkout
                  </button>
                </Link>

                <Link
                  to="/explore"
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium text-center block"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
