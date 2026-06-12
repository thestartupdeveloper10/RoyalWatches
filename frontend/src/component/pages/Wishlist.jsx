import Footer from "../Footer";
import NavBar from "../NavBar";
import { useSelector } from "react-redux";
import { selectWishlistItems } from "@/redux/wishlistRedux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import Single_product from "../Single_product";

const Wishlist = () => {
  const userId = useSelector((state) => state.user.userId);
  const wishlist = useSelector((state) => selectWishlistItems(state, userId));

  return (
    <div style={{ backgroundColor: "var(--rw-bg)", minHeight: "100vh" }}>
      <NavBar />

      <div className="rw-container" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-10 text-center">
          <span className="rw-section-label" style={{ color: "var(--rw-gold)" }}>
            {wishlist.products.length > 0
              ? `${wishlist.products.length} saved ${wishlist.products.length === 1 ? "piece" : "pieces"}`
              : "Saved pieces"}
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
            Your Wishlist
          </h1>
        </div>

        {wishlist.products.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center gap-6 py-24">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="flex items-center justify-center"
              style={{
                width: "5rem",
                height: "5rem",
                borderRadius: "50%",
                backgroundColor: "var(--rw-surface)",
                border: "1px solid var(--rw-border)",
              }}
            >
              <Heart className="w-7 h-7" style={{ color: "var(--rw-border)" }} />
            </motion.div>
            <div className="flex flex-col items-center gap-2 text-center">
              <p
                className="font-display font-light"
                style={{ fontSize: "1.75rem", color: "var(--rw-text)", letterSpacing: "-0.01em" }}
              >
                Nothing saved yet
              </p>
              <p
                style={{
                  color: "var(--rw-muted)",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Tap the heart on any watch to save it here.
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
        ) : (
          /* Product grid — Single_product handles wishlist toggle + add-to-cart */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlist.products.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <Single_product product={item} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
