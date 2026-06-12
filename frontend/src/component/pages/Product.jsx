import NavBar from "../NavBar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../../service/requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import { addProductWishlist, selectWishlistItems } from "@/redux/wishlistRedux";
import Product_Skeleton from "../Product_Skeleton";
import SimilarProducts from "../SimilarProducts";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Check, Minus, Plus, ChevronLeft } from "lucide-react";

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cartState, setCartState] = useState("idle");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const wishlist = useSelector((state) => selectWishlistItems(state, userId));

  const isFavorite = wishlist?.products?.some((p) => p._id === product._id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setSelectedColor(res.data.color?.[0] || "");
        setSize(res.data.size?.[0] || "");
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    if (cartState === "added") return;
    dispatch(addProduct({ userId, ...product, quantity, color: selectedColor, size }));
    setCartState("added");
    setTimeout(() => setCartState("idle"), 2200);
  };

  const handleWishlist = () => {
    dispatch(addProductWishlist({ userId, ...product }));
  };

  const imgSrc = product.images?.[0] || product.img;

  return (
    <div style={{ backgroundColor: "var(--rw-bg)", minHeight: "100vh" }}>
      <NavBar />
      <div style={{ paddingTop: "80px" }}>
        {loading ? (
          <Product_Skeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Back button */}
            <div className="rw-container pt-6 pb-2">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1.5 text-sm transition-colors"
                style={{
                  color: "var(--rw-muted)",
                  fontFamily: "'Outfit', sans-serif",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            </div>

            {/* Product layout */}
            <div className="rw-container py-8">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* Image */}
                <motion.div
                  className="lg:w-1/2 flex-shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div
                    className="overflow-hidden"
                    style={{
                      borderRadius: "1.25rem",
                      backgroundColor: "var(--rw-surface)",
                      border: "1px solid var(--rw-border)",
                      aspectRatio: "4/5",
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      style={{ outline: "1px solid rgba(0,0,0,0.05)" }}
                    />
                  </div>
                </motion.div>

                {/* Info */}
                <motion.div
                  className="lg:w-1/2 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                >
                  {/* Collection label */}
                  {product.categories?.length > 0 && (
                    <span
                      className="rw-section-label mb-4"
                      style={{ color: "var(--rw-gold)" }}
                    >
                      {`${product.categories[0]}'s Collection`}
                    </span>
                  )}

                  {/* Title */}
                  <h1
                    className="font-display font-light leading-tight mb-4"
                    style={{
                      fontSize: "clamp(2rem, 5vw, 3.5rem)",
                      color: "var(--rw-text)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {product.title}
                  </h1>

                  {/* Price */}
                  <p
                    className="mb-6"
                    style={{
                      fontSize: "1.75rem",
                      fontFamily: "'Outfit', sans-serif",
                      fontVariantNumeric: "tabular-nums",
                      color: "var(--rw-gold)",
                      fontWeight: 500,
                    }}
                  >
                    ${product.price}
                  </p>

                  <div style={{ height: "1px", backgroundColor: "var(--rw-border)", marginBottom: "1.5rem" }} />

                  {/* Description */}
                  <p
                    className="mb-8 leading-relaxed"
                    style={{
                      color: "var(--rw-muted)",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9375rem",
                    }}
                  >
                    {product.desc}
                  </p>

                  {/* Color selector */}
                  {product.color?.length > 0 && (
                    <div className="mb-6">
                      <span
                        className="block mb-2.5 uppercase"
                        style={{
                          color: "var(--rw-text)",
                          fontFamily: "'Outfit', sans-serif",
                          letterSpacing: "0.08em",
                          fontSize: "0.6875rem",
                          fontWeight: 500,
                        }}
                      >
                        Color —{" "}
                        <span style={{ color: "var(--rw-muted)", textTransform: "none", letterSpacing: "normal" }}>
                          {selectedColor}
                        </span>
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {product.color.map((c, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedColor(c)}
                            style={{
                              width: "2rem",
                              height: "2rem",
                              borderRadius: "50%",
                              backgroundColor: c,
                              border: selectedColor === c ? "2px solid var(--rw-gold)" : "2px solid var(--rw-border)",
                              cursor: "pointer",
                              boxShadow: selectedColor === c
                                ? "0 0 0 3px var(--rw-bg), 0 0 0 5px var(--rw-gold)"
                                : "none",
                              transition: "box-shadow 200ms ease, border-color 200ms ease",
                              padding: 0,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Size selector */}
                  {product.size?.length > 0 && (
                    <div className="mb-8">
                      <span
                        className="block mb-2.5 uppercase"
                        style={{
                          color: "var(--rw-text)",
                          fontFamily: "'Outfit', sans-serif",
                          letterSpacing: "0.08em",
                          fontSize: "0.6875rem",
                          fontWeight: 500,
                        }}
                      >
                        Size
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {product.size.map((s, index) => (
                          <button
                            key={index}
                            onClick={() => setSize(s)}
                            className="px-4 py-2 text-sm font-medium"
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              borderRadius: "0.5rem",
                              border: "1px solid",
                              borderColor: size === s ? "var(--rw-gold)" : "var(--rw-border)",
                              backgroundColor: size === s ? "var(--rw-gold)" : "var(--rw-elevated)",
                              color: size === s ? "#fff" : "var(--rw-text)",
                              cursor: "pointer",
                              transition: "all 200ms ease",
                            }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity + Add to Cart + Wishlist */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {/* Quantity */}
                    <div
                      className="flex items-center"
                      style={{
                        border: "1px solid var(--rw-border)",
                        borderRadius: "0.75rem",
                        backgroundColor: "var(--rw-elevated)",
                        overflow: "hidden",
                      }}
                    >
                      <button
                        onClick={() => handleQuantity("dec")}
                        className="flex items-center justify-center px-3 py-3"
                        style={{ color: "var(--rw-text)", background: "none", border: "none", cursor: "pointer" }}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span
                        className="px-3 min-w-[2.5rem] text-center font-medium"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontVariantNumeric: "tabular-nums",
                          color: "var(--rw-text)",
                        }}
                      >
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantity("inc")}
                        className="flex items-center justify-center px-3 py-3"
                        style={{ color: "var(--rw-text)", background: "none", border: "none", cursor: "pointer" }}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <motion.button
                      onClick={handleClick}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 flex-1 justify-center px-6 py-3.5 font-medium uppercase"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        borderRadius: "0.75rem",
                        border: "none",
                        cursor: cartState === "added" ? "default" : "pointer",
                        backgroundColor: cartState === "added" ? "var(--rw-gold)" : "var(--rw-text)",
                        color: cartState === "added" ? "#fff" : "var(--rw-bg)",
                        transition: "background-color 250ms ease, color 250ms ease",
                        minWidth: "160px",
                      }}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {cartState === "added" ? (
                          <motion.span
                            key="added"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-4 h-4" />
                            Added to Cart
                          </motion.span>
                        ) : (
                          <motion.span
                            key="add"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center gap-2"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Add to Cart
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>

                    {/* Wishlist */}
                    <motion.button
                      onClick={handleWishlist}
                      whileTap={{ scale: 0.92 }}
                      className="flex items-center justify-center"
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "0.75rem",
                        border: "1px solid var(--rw-border)",
                        backgroundColor: "var(--rw-elevated)",
                        cursor: "pointer",
                        color: isFavorite ? "#ef4444" : "var(--rw-muted)",
                        transition: "color 200ms ease, border-color 200ms ease",
                      }}
                    >
                      <Heart
                        className="w-5 h-5"
                        style={{ fill: isFavorite ? "#ef4444" : "none" }}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Similar Products */}
            <div className="rw-container pb-20">
              <SimilarProducts product={product} />
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
