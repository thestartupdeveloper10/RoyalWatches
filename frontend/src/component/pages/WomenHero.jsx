import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import MenProduct from '../MenProduct';
import MenProduct_Skeleton from '../MenProduct_Skeleton';
import WomenCart from '../WomenCart';
import Discover_Front from '../Discover_Front';
import { publicRequest } from '../../service/requestMethods';
import heroVideo from '../../assets/videos/hero.mp4';

const CATEGORIES = ['Luxury', 'Classic', 'Formal', 'Sports'];

const filterByCategory = (products, cat) =>
  products.filter(p => Array.isArray(p.categories) && p.categories.includes(cat));

function SectionHeading({ label, title, index = 0 }) {
  return (
    <motion.div
      className="flex flex-col gap-2 mb-8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
    >
      <span className="rw-section-label">{label}</span>
      <h2
        className="font-display font-light"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--rw-text)' }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

function ProductGrid({ products, loading, count, cols = 4, skeletonCount }) {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[cols] || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  const skels = skeletonCount ?? cols;

  if (loading) {
    return (
      <div className={`grid ${colClass} gap-4`}>
        {Array.from({ length: skels }, (_, i) => <MenProduct_Skeleton key={i} />)}
      </div>
    );
  }

  if (!products.length) {
    return (
      <p className="text-sm py-6" style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}>
        No products available in this category.
      </p>
    );
  }

  return (
    <div className={`grid ${colClass} gap-4`}>
      {products.slice(0, count).map((p, i) => (
        <motion.div
          key={p._id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
        >
          <MenProduct product={p} />
        </motion.div>
      ))}
    </div>
  );
}

const WomenHero = () => {
  const [grouped, setGrouped] = useState({ Luxury: [], Classic: [], Formal: [], Sports: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    publicRequest.get('/products?category=Women')
      .then(res => {
        const all = res.data;
        setGrouped(Object.fromEntries(CATEGORIES.map(cat => [cat, filterByCategory(all, cat)])));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Non-empty categories beyond Luxury (shown as additional sections)
  const extraCategories = !loading
    ? CATEGORIES.filter(cat => cat !== 'Luxury' && grouped[cat]?.length > 0)
    : [];

  return (
    <>
      <NavBar />

      {/* ─── Cinematic Video Hero ──────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '100dvh' }}>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Layered gradients for depth */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.80) 0%, rgba(8,8,8,0.45) 45%, rgba(8,8,8,0.08) 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 55%)' }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center" style={{ padding: '0 5vw' }}>
          <div style={{ maxWidth: '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="rw-section-label" style={{ color: 'rgba(201,169,110,0.9)' }}>
                Women's Collection
              </span>
              <h1
                className="font-display font-light text-white leading-[0.92]"
                style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', letterSpacing: '-0.03em' }}
              >
                Timeless<br />Elegance
              </h1>
              <p
                className="font-light leading-relaxed"
                style={{
                  color: 'rgba(240,235,224,0.65)',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
                  maxWidth: '420px',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Discover our stunning collection of women's watches — each piece a harmony of grace, precision, and timeless sophistication.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/products/Women">
                  <motion.button
                    className="rw-btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Shop Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </Link>
                <Link to="/products/Women">
                  <button
                    className="rw-btn-ghost"
                    style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(240,235,224,0.8)' }}
                  >
                    Explore All
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-8 hidden md:flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span
            style={{
              fontSize: '0.6rem',
              color: 'rgba(240,235,224,0.4)',
              writingMode: 'vertical-rl',
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
          <motion.div
            style={{
              width: '1px',
              height: '48px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              transformOrigin: 'top',
            }}
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ─── Page body ─────────────────────────────────────── */}
      <div style={{ backgroundColor: 'var(--rw-bg)' }}>

        {/* Intro */}
        <section className="rw-container" style={{ paddingTop: '6rem', paddingBottom: '1rem' }}>
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="rw-section-label block mb-3">Crafted for Women</span>
            <h2
              className="font-display font-light mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--rw-text)', lineHeight: 1 }}
            >
              Glamour Meets Precision
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", maxWidth: '540px' }}
            >
              Step into a world of grace and sophistication — our curated women's collection
              embodies exquisite craftsmanship and timeless design, perfect for accentuating
              your elegance and style.
            </p>
          </motion.div>
        </section>

        {/* Luxury — editorial split layout via WomenCart */}
        <WomenCart item={grouped.Luxury} loading={loading} />

        {/* Discover editorial banner */}
        <Discover_Front
          title="Glamour Timepieces: Indulge in Luxury"
          desc="Our curated selection features elegant, high-end timepieces that embody sophistication, style, and timeless beauty."
        />

        {/* Classic */}
        {(loading || grouped.Classic.length > 0) && (
          <section className="rw-container" style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
            <SectionHeading label="Refined" title="Classic Selection" />
            <ProductGrid products={grouped.Classic} loading={loading} count={4} cols={4} />
          </section>
        )}

        {/* Additional categories (Sports / Formal) — only rendered if data exists */}
        {extraCategories.map((cat, i) => (
          <section key={cat} className="rw-container" style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
            <SectionHeading
              label={cat === 'Sports' ? 'Active' : 'Boardroom'}
              title={`${cat} Collection`}
              index={i + 1}
            />
            <ProductGrid
              products={grouped[cat]}
              loading={loading}
              count={cat === 'Sports' ? 3 : 4}
              cols={cat === 'Sports' ? 3 : 4}
            />
          </section>
        ))}

        {/* CTA */}
        <section className="rw-container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="rw-divider w-16 mb-2" />
            <h3
              className="font-display font-light"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--rw-text)' }}
            >
              See the Full Collection
            </h3>
            <p
              className="text-sm"
              style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
            >
              Browse every women's timepiece in our catalogue.
            </p>
            <Link to="/products/Women" className="mt-2">
              <motion.button
                className="rw-btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                View All Women's Watches
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default WomenHero;
