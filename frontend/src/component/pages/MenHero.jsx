import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import MenProduct from '../MenProduct';
import MenProduct_Skeleton from '../MenProduct_Skeleton';
import heroImg from '../../assets/imgs/menHero.jpg';
import { publicRequest } from '../../service/requestMethods';

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
      <h2 className="font-display font-light" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--rw-text)' }}>
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

const MenHero = () => {
  const [grouped, setGrouped] = useState({ Luxury: [], Classic: [], Formal: [], Sports: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    publicRequest.get('/products?category=Men')
      .then(res => {
        const all = res.data;
        setGrouped(Object.fromEntries(CATEGORIES.map(cat => [cat, filterByCategory(all, cat)])));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <NavBar />

      {/* ─── Cinematic Hero ────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '100dvh' }}>
        <img
          src={heroImg}
          alt="Men's watches"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.1) 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 50%)' }}
        />

        <div className="relative z-10 h-full flex items-center" style={{ padding: '0 5vw' }}>
          <div style={{ maxWidth: '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="rw-section-label" style={{ color: 'rgba(201,169,110,0.9)' }}>
                Men's Collection
              </span>
              <h1
                className="font-display font-light text-white leading-[0.92]"
                style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', letterSpacing: '-0.03em' }}
              >
                New<br />Collection
              </h1>
              <p
                className="font-light leading-relaxed"
                style={{ color: 'rgba(240,235,224,0.65)', fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)', maxWidth: '420px', fontFamily: "'Outfit', sans-serif" }}
              >
                Discover exquisite men's watches handcrafted by experts — precision mechanics meeting timeless design.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/products/Men">
                  <motion.button className="rw-btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    Shop Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </Link>
                <Link to="/products/Men">
                  <button className="rw-btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(240,235,224,0.8)' }}>
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
          <span style={{ fontSize: '0.6rem', color: 'rgba(240,235,224,0.4)', writingMode: 'vertical-rl', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <motion.div
            style={{ width: '1px', height: '48px', backgroundColor: 'rgba(255,255,255,0.2)', transformOrigin: 'top' }}
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
            <span className="rw-section-label block mb-3">Crafted for Men</span>
            <h2
              className="font-display font-light mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--rw-text)', lineHeight: 1 }}
            >
              Elevate Your Style with Our Luxury Watches
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", maxWidth: '540px' }}>
              Discover the epitome of elegance and precision with our exclusive collection of men's watches — each piece a testament to horological mastery.
            </p>
          </motion.div>
        </section>

        {/* Luxury */}
        <section className="rw-container" style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
          <SectionHeading label="Prestige" title="Luxury Timepieces" />
          <ProductGrid products={grouped.Luxury} loading={loading} count={4} cols={4} />
        </section>

        {/* Sports */}
        <section className="rw-container" style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
          <SectionHeading label="Active" title="Sports Collection" index={1} />
          <ProductGrid products={grouped.Sports} loading={loading} count={3} cols={3} />
        </section>

        {/* Formal + Classic — editorial two-column */}
        <section className="rw-container" style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading label="Boardroom" title="Formal Wear" index={0} />
              <ProductGrid products={grouped.Formal} loading={loading} count={4} cols={2} skeletonCount={4} />
            </div>
            <div>
              <SectionHeading label="Heritage" title="Classic Selection" index={1} />
              <ProductGrid products={grouped.Classic} loading={loading} count={4} cols={2} skeletonCount={4} />
            </div>
          </div>
        </section>

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
            <h3 className="font-display font-light" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--rw-text)' }}>
              See the Full Collection
            </h3>
            <p className="text-sm" style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}>
              Browse every men's timepiece in our catalogue.
            </p>
            <Link to="/products/Men" className="mt-2">
              <motion.button className="rw-btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                View All Men's Watches
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

export default MenHero;
