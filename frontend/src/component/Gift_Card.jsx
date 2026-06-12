import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Gift } from 'lucide-react';
import another from '../assets/imgs/another.jpg';

const Gift_Card = () => (
  <section className="rw-container" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      style={{
        borderRadius: '1.5rem',
        border: '1px solid var(--rw-border)',
        backgroundColor: 'var(--rw-surface)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ minHeight: '320px' }}>
        <img
          src={another}
          alt="Gift Card Promotion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(8,8,8,0.1)' }} />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center px-8 py-10 md:px-12 lg:px-16">
        <div
          className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full self-start"
          style={{
            backgroundColor: 'var(--rw-elevated)',
            border: '1px solid var(--rw-border)',
          }}
        >
          <Gift className="w-3.5 h-3.5" style={{ color: 'var(--rw-gold)' }} />
          <span className="rw-section-label" style={{ fontSize: '0.625rem' }}>Exclusive Offer</span>
        </div>

        <h2
          className="font-display font-light mb-4 leading-tight"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: 'var(--rw-text)',
          }}
        >
          Free Gift Card Worth Up to $350
        </h2>

        <p
          className="text-sm leading-relaxed mb-8"
          style={{
            color: 'var(--rw-muted)',
            fontFamily: "'Outfit', sans-serif",
            maxWidth: '380px',
          }}
        >
          Purchase any selected luxury timepiece and receive a complimentary gift card. Perfect for your next watch or as a gift for someone who appreciates precision craftsmanship.
        </p>

        <Link to="/products">
          <motion.button
            className="rw-btn-primary self-start"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Watches
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  </section>
);

export default Gift_Card;
