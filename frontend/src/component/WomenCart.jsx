/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import CardTemp from './CardTemp';
import CardTemp_Skeleton from './CardTemp_Skeleton';
import heroImg from '../assets/imgs/women.jpg';

const WomenCart = ({ item, loading }) => (
  <section className="rw-container" style={{ paddingTop: '5rem', paddingBottom: '1rem' }}>
    {/* Heading */}
    <motion.div
      className="max-w-2xl mb-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
    >
      <span className="rw-section-label block mb-3">Featured</span>
      <h2
        className="font-display font-light mb-4"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--rw-text)', lineHeight: 1 }}
      >
        Discover Timeless Elegance
      </h2>
      <p
        className="text-base leading-relaxed"
        style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", maxWidth: '520px' }}
      >
        Step into a world of grace and sophistication with our curated collection of
        women's watches — each piece exquisite craftsmanship meets timeless design.
      </p>
    </motion.div>

    {/* Two-column: editorial image + product grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Image */}
      <motion.div
        className="overflow-hidden"
        style={{ borderRadius: '1.25rem', aspectRatio: '3/4', backgroundColor: 'var(--rw-elevated)' }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
      >
        <img
          src={heroImg}
          alt="Women's watches editorial"
          className="w-full h-full object-cover"
          style={{ outline: '1px solid rgba(0,0,0,0.05)' }}
        />
      </motion.div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-4">
        {loading
          ? Array(4).fill(0).map((_, i) => <CardTemp_Skeleton key={i} />)
          : item.slice(0, 4).map((product, i) => (
            <motion.div
              key={product._id ?? i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
            >
              <CardTemp product={product} />
            </motion.div>
          ))}
      </div>
    </div>
  </section>
);

export default WomenCart;
