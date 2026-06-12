import { publicRequest } from '../service/requestMethods';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const FALLBACK_SLIDES = [
  {
    _id: 'fallback-1',
    title: 'Precision\nCrafted',
    desc: 'Each timepiece a testament to horological mastery.',
    categories: ['Men'],
    img: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    _id: 'fallback-2',
    title: 'Timeless\nElegance',
    desc: 'Wrist-bound masterpieces that transcend the ordinary.',
    categories: ['Women'],
    img: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

function Hero_slider() {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    publicRequest.get('/products?new=true')
      .then(res => {
        const arr = Array.isArray(res.data) ? res.data : [];
        setProducts(arr.length ? arr : FALLBACK_SLIDES);
      })
      .catch(() => setProducts(FALLBACK_SLIDES))
      .finally(() => setLoaded(true));
  }, []);

  const slides = products.slice(0, 5);
  const count = slides.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % count), [count]);
  const prev = () => setCurrent(c => (c - 1 + count) % count);

  useEffect(() => {
    if (count < 2) return;
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [count, next]);

  if (!loaded) {
    return (
      <section className="relative w-full h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--rw-bg)' }}>
        <div className="rw-spinner" />
      </section>
    );
  }

  const item = slides[current];
  const imgSrc = item.images?.[0] || item.img;
  const isWomen = item.categories?.includes('Women');
  const collectionLabel = isWomen ? "Women's Collection" : "Men's Collection";
  const collectionPath = isWomen ? '/products/Women' : '/products/Men';

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100dvh' }}>
      {/* Background image layer */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <img
            src={imgSrc}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ outline: 'none' }}
          />
          {/* Cinematic gradient — heavy left fade, lighter vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.55) 40%, rgba(8,8,8,0.1) 70%, rgba(8,8,8,0.05) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center" style={{ padding: '0 5vw' }}>
        <div style={{ maxWidth: '660px' }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Collection label */}
              <motion.span
                className="rw-section-label block mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {collectionLabel}
              </motion.span>

              {/* Headline */}
              <h1
                className="font-display font-light text-white leading-[0.92] mb-6"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 7rem)',
                  letterSpacing: '-0.03em',
                  whiteSpace: 'pre-line',
                  textWrap: 'balance',
                }}
              >
                {item.title.replace(/\\n/g, '\n')}
              </h1>

              {/* Description */}
              <p
                className="font-light leading-relaxed mb-10"
                style={{
                  color: 'rgba(240,235,224,0.65)',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
                  maxWidth: '440px',
                }}
              >
                {item.desc?.split('.')[0]}.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-4 flex-wrap">
                <Link to={`/product/${item._id}`}>
                  <motion.button
                    className="rw-btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                  >
                    Shop Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </Link>
                <Link to={collectionPath}>
                  <button
                    className="rw-btn-ghost"
                    style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(240,235,224,0.8)' }}
                  >
                    Explore Collection
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      {count > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                height: '2px',
                width: i === current ? '2rem' : '1rem',
                backgroundColor: i === current ? 'var(--rw-gold)' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '1px',
                transition: 'width 300ms cubic-bezier(0.23,1,0.32,1), background-color 300ms ease',
              }}
            />
          ))}
        </div>
      )}

      {/* Prev / Next arrows */}
      {count > 1 && (
        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2">
          <motion.button
            onClick={prev}
            className="rw-icon-btn"
            whileTap={{ scale: 0.94 }}
            style={{
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(240,235,224,0.7)',
            }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </motion.button>
          <motion.button
            onClick={next}
            className="rw-icon-btn"
            whileTap={{ scale: 0.94 }}
            style={{
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(240,235,224,0.7)',
            }}
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      )}

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-8 z-10 hidden md:flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span
          className="font-sans font-medium tracking-widest uppercase"
          style={{ fontSize: '0.6rem', color: 'rgba(240,235,224,0.4)', writingMode: 'vertical-rl' }}
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
  );
}

export default Hero_slider;
