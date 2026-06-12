/* eslint-disable react/prop-types */
import { publicRequest } from "../service/requestMethods";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Single_product from "./Single_product";
import Single_Product_Skeleton from "./Single_Product_Skeleton";

export default function SimilarProducts({ product }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product && product.categories && product.categories.length >= 2) {
      const mainCategory = product.categories[0];
      const similarCategory = product.categories[1];

      const getProducts = async () => {
        try {
          let res;
          if (mainCategory === "Men" || mainCategory === "Women") {
            res = await publicRequest.get(`/products?category=${mainCategory}`);
          }
          if (res) {
            const filtered = res.data.filter(
              (prod) =>
                prod._id !== product._id &&
                prod.categories?.includes(similarCategory)
            );
            setFilteredProducts(filtered.slice(0, 8));
          }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      getProducts();
    } else {
      setLoading(false);
    }
  }, [product]);

  if (!loading && filteredProducts.length === 0) return null;

  return (
    <section className="py-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 mb-12 text-center">
        <span className="rw-section-label" style={{ color: "var(--rw-gold)" }}>
          You May Also Like
        </span>
        <h2
          className="font-display font-light"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--rw-text)",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
          }}
        >
          Similar Pieces
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <Single_Product_Skeleton key={i} />
            ))
          : filteredProducts.map((item, index) => (
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
    </section>
  );
}
