/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import explore from '../assets/imgs/explore.jpg';

const Discover_Front = ({ title, desc }) => (
  <section className="rw-container" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
    <motion.div
      className="relative overflow-hidden"
      style={{ borderRadius: '1.5rem', minHeight: '360px' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <img
        src={explore}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay — heavier for readability */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.4) 60%, rgba(8,8,8,0.1) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full p-10 md:p-16 max-w-xl">
        <span className="rw-section-label mb-4">Discover</span>
        <h2
          className="font-display font-light text-white mb-4 leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          {title}
        </h2>
        <p
          className="text-sm md:text-base leading-relaxed mb-8"
          style={{ color: 'rgba(240,235,224,0.65)', fontFamily: "'Outfit', sans-serif", maxWidth: '420px' }}
        >
          {desc}
        </p>
        <Link to="/products">
          <motion.button
            className="rw-btn-primary self-start"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Discover More
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  </section>
);

export default Discover_Front;
