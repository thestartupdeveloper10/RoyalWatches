/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { publicRequest } from '../service/requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Check, Plus, ArrowRight } from 'lucide-react';
import { addProduct } from '../redux/cartRedux';
import { addProductWishlist, removeProductWishlist, selectWishlistItems } from '@/redux/wishlistRedux';
import { useAuthAction } from '../context/AuthPromptContext';

function ProductCard({ product, index, wishlistIds }) {
  const [cartState, setCartState] = useState('idle');
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const { requireAuth } = useAuthAction();
  const isFavorite = wishlistIds.has(product._id);
  const imgSrc = product.images?.[0] || product.img;

  const handleAddToCart = e => {
    e.preventDefault();
    if (cartState === 'added') return;
    requireAuth(() => {
      dispatch(addProduct({ userId, ...product, quantity: 1, color: product.color?.[0], size: product.size?.[0] }));
      setCartState('added');
      setTimeout(() => setCartState('idle'), 2200);
    });
  };

  const handleWishlist = e => {
    e.preventDefault();
    requireAuth(() => {
      if (isFavorite) {
        dispatch(removeProductWishlist({ userId, productId: product._id }));
      } else {
        dispatch(addProductWishlist({ userId, ...product }));
      }
    });
  };

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden"
      style={{
        backgroundColor: 'var(--rw-surface)',
        border: '1px solid var(--rw-border)',
        borderRadius: '1rem',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <Link
        to={`/product/${product._id}`}
        className="relative block overflow-hidden"
        style={{ aspectRatio: '4/5', backgroundColor: 'var(--rw-elevated)' }}
      >
        <img
          src={imgSrc}
          alt={product.title}
          className="w-full h-full object-cover"
          style={{
            outline: '1px solid rgba(0,0,0,0.05)',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 700ms cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        />

        {/* Wishlist button */}
        <motion.button
          onClick={handleWishlist}
          aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-3 right-3 flex items-center justify-center"
          style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(8,8,8,0.55)',
            backdropFilter: 'blur(8px)',
            border: 'none',
            cursor: 'pointer',
            color: isFavorite ? '#ef4444' : 'rgba(255,255,255,0.85)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart
            className="w-3.5 h-3.5"
            style={{ fill: isFavorite ? '#ef4444' : 'none' }}
          />
        </motion.button>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1">
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <h3
            className="font-display font-light leading-snug"
            style={{
              fontSize: '1.125rem',
              color: hovered ? 'var(--rw-gold)' : 'var(--rw-text)',
              transition: 'color 200ms ease',
            }}
          >
            {product.title}
          </h3>
        </Link>
        <p
          className="text-xs line-clamp-1"
          style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
        >
          {product.desc?.split('.')[0]}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span
            className="font-medium"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontVariantNumeric: 'tabular-nums',
              color: 'var(--rw-text)',
              fontSize: '1rem',
            }}
          >
            ${product.price}
          </span>
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.94 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.375rem 0.875rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: cartState === 'added' ? 'default' : 'pointer',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backgroundColor: cartState === 'added' ? 'var(--rw-gold)' : 'var(--rw-elevated)',
              color: cartState === 'added' ? '#fff' : 'var(--rw-text)',
              transition: 'background-color 250ms ease, color 250ms ease',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {cartState === 'added' ? (
                <motion.span key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1" transition={{ duration: 0.15 }}>
                  <Check className="w-3 h-3" />Added
                </motion.span>
              ) : (
                <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1" transition={{ duration: 0.15 }}>
                  <Plus className="w-3 h-3" />Add
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

function SkeletonCard() {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--rw-surface)', border: '1px solid var(--rw-border)', borderRadius: '1rem' }}
    >
      <div className="animate-pulse" style={{ aspectRatio: '4/5', backgroundColor: 'var(--rw-elevated)' }} />
      <div className="p-4 flex flex-col gap-3">
        <div className="h-5 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '75%' }} />
        <div className="h-3 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '55%' }} />
        <div className="flex justify-between mt-1">
          <div className="h-4 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '30%' }} />
          <div className="h-7 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '20%' }} />
        </div>
      </div>
    </div>
  );
}

const Hero_Products = ({ title, query }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = useSelector(state => state.user.userId);
  const wishlist = useSelector(state => selectWishlistItems(state, userId));
  const wishlistIds = new Set(wishlist.products.map(p => p._id));

  useEffect(() => {
    publicRequest.get(`/products?${query}`)
      .then(res => setProducts(Array.isArray(res.data) ? res.data : []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <section className="rw-container" style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
      {/* Section header */}
      <motion.div
        className="flex items-end justify-between mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="flex flex-col gap-2">
          <span className="rw-section-label">Collection</span>
          <h2
            className="font-display font-light"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--rw-text)' }}
          >
            {title}
          </h2>
        </div>
        <Link
          to="/products"
          className="hidden md:inline-flex items-center gap-2 rw-section-label hover:text-rw-text transition-colors"
          style={{ color: 'var(--rw-muted)', fontSize: '0.6875rem' }}
        >
          View All
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading
          ? Array(4).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : products.slice(0, 4).map((product, i) => (
            <ProductCard
              key={product._id}
              product={product}
              index={i}
              wishlistIds={wishlistIds}
            />
          ))}
      </div>

      {/* Mobile "view all" */}
      <div className="flex justify-center mt-10 md:hidden">
        <Link to="/products">
          <button className="rw-btn-ghost">
            View All Watches
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero_Products;
