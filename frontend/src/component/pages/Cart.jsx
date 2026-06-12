import NavBar from "../NavBar";
import Footer from "../Footer";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct, updateProductQuantity, selectCartItems } from "../../redux/cartRedux";
import { selectWishlistItems } from "@/redux/wishlistRedux";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import CheckoutModal from "../CheckoutModal";

const SHIPPING_FEE = 100;
const DISCOUNT_THRESHOLD = 100000;
const DISCOUNT_RATE = 0.05;

const Cart = () => {
  const userId = useSelector((state) => state.user.userId);
  const cart = useSelector((state) => selectCartItems(state, userId));
  const wishlist = useSelector((state) => selectWishlistItems(state, userId));
  const dispatch = useDispatch();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const subtotal = cart.total;
  const discount = subtotal > DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : 0;
  const total = subtotal + SHIPPING_FEE - discount;

  const handleQuantity = (type, productId) => {
    const product = cart.products.find((item) => item._id === productId);
    if (!product) return;
    if (type === "dec" && product.quantity > 1) {
      dispatch(updateProductQuantity({ userId, productId, quantity: product.quantity - 1 }));
    } else if (type === "inc") {
      dispatch(updateProductQuantity({ userId, productId, quantity: product.quantity + 1 }));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeProduct({ userId, productId }));
  };

  const handleCheckout = () => setCheckoutOpen(true);

  if (cart.products.length === 0) {
    return (
      <div style={{ backgroundColor: "var(--rw-bg)", minHeight: "100vh" }}>
        <NavBar />
        <div className="flex flex-col items-center justify-center gap-6" style={{ minHeight: "70vh" }}>
          <ShoppingBag
            className="w-12 h-12"
            style={{ color: "var(--rw-border)" }}
          />
          <div className="flex flex-col items-center gap-2 text-center">
            <h1
              className="font-display font-light"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--rw-text)", letterSpacing: "-0.02em" }}
            >
              Your Bag is Empty
            </h1>
            <p
              style={{ color: "var(--rw-muted)", fontFamily: "'Outfit', sans-serif", fontSize: "0.9375rem" }}
            >
              Discover our collection of luxury timepieces.
            </p>
          </div>
          <Link to="/products/Men">
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 font-medium uppercase"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                borderRadius: "0.75rem",
                border: "none",
                cursor: "pointer",
                backgroundColor: "var(--rw-text)",
                color: "var(--rw-bg)",
              }}
            >
              Explore Watches
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--rw-bg)", minHeight: "100vh" }}>
      <NavBar />

      <div className="rw-container" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-10 text-center">
          <span className="rw-section-label" style={{ color: "var(--rw-gold)" }}>
            {cart.products.length} {cart.products.length === 1 ? "item" : "items"}
          </span>
          <h1
            className="font-display font-light"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--rw-text)",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Your Bag
          </h1>
        </div>

        {/* Top nav row */}
        <div
          className="flex items-center justify-between mb-8 pb-5"
          style={{ borderBottom: "1px solid var(--rw-border)" }}
        >
          <Link to="/products/Men">
            <button
              className="text-sm transition-colors"
              style={{
                color: "var(--rw-muted)",
                fontFamily: "'Outfit', sans-serif",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              ← Continue Shopping
            </button>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <span
              className="text-sm"
              style={{ color: "var(--rw-gold)", fontFamily: "'Outfit', sans-serif" }}
            >
              Shopping Bag ({cart.products.length})
            </span>
            <span style={{ color: "var(--rw-border)" }}>·</span>
            <Link
              to="/wishlist"
              className="text-sm transition-colors"
              style={{ color: "var(--rw-muted)", fontFamily: "'Outfit', sans-serif" }}
            >
              Wishlist ({wishlist.products.length})
            </Link>
          </div>
          <motion.button
            onClick={handleCheckout}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 font-medium uppercase"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              borderRadius: "0.65rem",
              border: "none",
              cursor: "pointer",
              backgroundColor: "var(--rw-text)",
              color: "var(--rw-bg)",
            }}
          >
            Checkout
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Content: items + summary */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Cart items */}
          <div className="flex-1 flex flex-col gap-4">
            <AnimatePresence initial={false}>
              {cart.products.map((product, index) => {
                const imgSrc = product.images?.[0] || product.img;
                return (
                  <motion.div
                    key={product._id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.35, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                    className="flex gap-4 p-4"
                    style={{
                      backgroundColor: "var(--rw-surface)",
                      border: "1px solid var(--rw-border)",
                      borderRadius: "1rem",
                    }}
                  >
                    {/* Image */}
                    <Link to={`/product/${product._id}`} className="flex-shrink-0">
                      <div
                        className="overflow-hidden"
                        style={{
                          width: "clamp(80px, 12vw, 120px)",
                          aspectRatio: "4/5",
                          borderRadius: "0.625rem",
                          backgroundColor: "var(--rw-elevated)",
                        }}
                      >
                        <img
                          src={imgSrc}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div>
                        <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
                          <h3
                            className="font-display font-light leading-snug capitalize"
                            style={{ fontSize: "1.125rem", color: "var(--rw-text)", letterSpacing: "-0.01em" }}
                          >
                            {product.title}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                          {product.color && (
                            <div className="flex items-center gap-1.5">
                              <div
                                style={{
                                  width: "0.875rem",
                                  height: "0.875rem",
                                  borderRadius: "50%",
                                  backgroundColor: product.color,
                                  border: "1px solid var(--rw-border)",
                                }}
                              />
                              <span
                                className="text-xs capitalize"
                                style={{ color: "var(--rw-muted)", fontFamily: "'Outfit', sans-serif" }}
                              >
                                {product.color}
                              </span>
                            </div>
                          )}
                          {product.size && (
                            <span
                              className="text-xs"
                              style={{ color: "var(--rw-muted)", fontFamily: "'Outfit', sans-serif" }}
                            >
                              Size: {product.size}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom row: qty + price + delete */}
                      <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
                        {/* Qty stepper */}
                        <div
                          className="flex items-center"
                          style={{
                            border: "1px solid var(--rw-border)",
                            borderRadius: "0.625rem",
                            backgroundColor: "var(--rw-elevated)",
                            overflow: "hidden",
                          }}
                        >
                          <button
                            onClick={() => handleQuantity("dec", product._id)}
                            className="flex items-center justify-center px-2.5 py-2"
                            style={{ color: "var(--rw-text)", background: "none", border: "none", cursor: "pointer" }}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span
                            className="px-2 min-w-[1.75rem] text-center text-sm font-medium"
                            style={{ fontFamily: "'Outfit', sans-serif", fontVariantNumeric: "tabular-nums", color: "var(--rw-text)" }}
                          >
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantity("inc", product._id)}
                            className="flex items-center justify-center px-2.5 py-2"
                            style={{ color: "var(--rw-text)", background: "none", border: "none", cursor: "pointer" }}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center gap-4">
                          {/* Price */}
                          <span
                            className="font-medium"
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontVariantNumeric: "tabular-nums",
                              color: "var(--rw-gold)",
                              fontSize: "1rem",
                            }}
                          >
                            ${(product.price * product.quantity).toLocaleString()}
                          </span>

                          {/* Remove */}
                          <motion.button
                            onClick={() => handleRemove(product._id)}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center justify-center"
                            style={{
                              width: "2rem",
                              height: "2rem",
                              borderRadius: "0.5rem",
                              border: "1px solid var(--rw-border)",
                              backgroundColor: "transparent",
                              cursor: "pointer",
                              color: "var(--rw-muted)",
                              transition: "color 150ms ease, border-color 150ms ease",
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.color = "#ef4444";
                              e.currentTarget.style.borderColor = "#ef4444";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.color = "var(--rw-muted)";
                              e.currentTarget.style.borderColor = "var(--rw-border)";
                            }}
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div
            className="lg:w-80 flex-shrink-0 h-fit"
            style={{
              backgroundColor: "var(--rw-surface)",
              border: "1px solid var(--rw-border)",
              borderRadius: "1rem",
              padding: "1.5rem",
            }}
          >
            <h2
              className="font-display font-light mb-6"
              style={{ fontSize: "1.5rem", color: "var(--rw-text)", letterSpacing: "-0.01em" }}
            >
              Order Summary
            </h2>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <span style={{ color: "var(--rw-muted)", fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem" }}>
                  Subtotal
                </span>
                <span style={{ color: "var(--rw-text)", fontFamily: "'Outfit', sans-serif", fontVariantNumeric: "tabular-nums", fontSize: "0.875rem" }}>
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--rw-muted)", fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem" }}>
                  Shipping
                </span>
                <span style={{ color: "var(--rw-text)", fontFamily: "'Outfit', sans-serif", fontVariantNumeric: "tabular-nums", fontSize: "0.875rem" }}>
                  ${SHIPPING_FEE}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between">
                  <span style={{ color: "var(--rw-muted)", fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem" }}>
                    Discount (5%)
                  </span>
                  <span style={{ color: "#4ade80", fontFamily: "'Outfit', sans-serif", fontVariantNumeric: "tabular-nums", fontSize: "0.875rem" }}>
                    −${discount.toLocaleString()}
                  </span>
                </div>
              )}
            </div>

            <div
              className="flex justify-between items-center mt-5 pt-5"
              style={{ borderTop: "1px solid var(--rw-border)" }}
            >
              <span
                className="font-display font-light"
                style={{ fontSize: "1.25rem", color: "var(--rw-text)" }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontVariantNumeric: "tabular-nums",
                  color: "var(--rw-gold)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                }}
              >
                ${total.toLocaleString()}
              </span>
            </div>

            <motion.button
              onClick={handleCheckout}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 mt-6 py-3.5 font-medium uppercase"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                borderRadius: "0.75rem",
                border: "none",
                cursor: "pointer",
                backgroundColor: "var(--rw-text)",
                color: "var(--rw-bg)",
              }}
            >
              Checkout Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <p
              className="text-center mt-4 text-xs"
              style={{ color: "var(--rw-muted)", fontFamily: "'Outfit', sans-serif" }}
            >
              Free returns · Secure checkout
            </p>
          </div>
        </div>

        {/* Mobile checkout */}
        <div className="mt-6 md:hidden">
          <motion.button
            onClick={handleCheckout}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 py-3.5 font-medium uppercase"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              borderRadius: "0.75rem",
              border: "none",
              cursor: "pointer",
              backgroundColor: "var(--rw-text)",
              color: "var(--rw-bg)",
            }}
          >
            Checkout Now
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <Footer />
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
};

export default Cart;
