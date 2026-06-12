import NavBar from '../NavBar';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Browse Our Collection',
    desc: 'Explore our curated selection of luxury timepieces. Filter by brand, style, and features to find the perfect watch that suits your taste.',
    img: 'https://cdn.pixabay.com/photo/2013/01/05/14/18/watches-73936_960_720.jpg',
    alt: 'Browse our watch collection',
  },
  {
    number: '02',
    title: 'Choose Your Watch',
    desc: "Once you've found a watch you love, select your preferred options and add it to your cart. Detailed descriptions help you make a confident decision.",
    img: 'https://cdn.pixabay.com/photo/2017/03/03/04/31/clock-2113254_960_720.jpg',
    alt: 'Choose your watch',
  },
  {
    number: '03',
    title: 'Place Your Order',
    desc: 'Complete your purchase through our secure checkout. We offer multiple payment options to ensure a seamless, worry-free transaction.',
    img: 'https://cdn.pixabay.com/photo/2019/05/16/20/15/online-4208112_960_720.jpg',
    alt: 'Place your order',
  },
  {
    number: '04',
    title: 'Receive Your Watch',
    desc: 'Your timepiece arrives at your door securely packaged, insured, and ready to wear — the luxury of Royal Watches, delivered to you.',
    img: 'https://cdn.pixabay.com/photo/2022/01/28/12/17/delivery-6974508_960_720.jpg',
    alt: 'Receive your watch',
  },
];

const Instructions = () => {
  return (
    <div style={{ backgroundColor: 'var(--rw-bg)', minHeight: '100vh' }}>
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: '120px', paddingBottom: '72px' }}>
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="rw-section-label"
          >
            Simple Steps
          </motion.span>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-light"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              color: 'var(--rw-text)',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            How Royal Watches
            <br />
            <span style={{ color: 'var(--rw-gold)' }}>Works</span>
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{
              maxWidth: '520px',
              color: 'var(--rw-muted)',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.7,
            }}
          >
            We've streamlined the process of finding and purchasing your dream watch into four simple steps.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="rw-container">
        <div style={{ height: '1px', backgroundColor: 'var(--rw-border)' }} />
      </div>

      {/* ── Steps ────────────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col overflow-hidden"
              style={{
                backgroundColor: 'var(--rw-surface)',
                border: '1px solid var(--rw-border)',
                borderRadius: '1rem',
              }}
            >
              {/* Image */}
              <div
                style={{
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  backgroundColor: 'var(--rw-elevated)',
                }}
              >
                <img
                  src={step.img}
                  alt={step.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6">
                {/* Step number */}
                <span
                  className="font-display font-light"
                  style={{
                    fontSize: '2.5rem',
                    color: 'var(--rw-gold)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    opacity: 0.7,
                  }}
                >
                  {step.number}
                </span>

                <div style={{ height: '1px', backgroundColor: 'var(--rw-border)' }} />

                <h3
                  className="font-display font-light"
                  style={{
                    fontSize: '1.375rem',
                    color: 'var(--rw-text)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.1,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: 'var(--rw-muted)',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: 'var(--rw-surface)',
          borderTop: '1px solid var(--rw-border)',
        }}
      >
        <div className="rw-container" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <motion.div
            className="flex flex-col items-center text-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="rw-section-label">Ready to begin?</span>
            <h2
              className="font-display font-light"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--rw-text)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              Find your timepiece
            </h2>
            <p
              style={{
                maxWidth: '420px',
                color: 'var(--rw-muted)',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.9375rem',
                lineHeight: 1.7,
              }}
            >
              Step one starts now. Browse our collection and discover the watch that was made for you.
            </p>
            <Link to="/products">
              <motion.button whileTap={{ scale: 0.97 }} className="rw-btn-primary mt-1">
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Instructions;
