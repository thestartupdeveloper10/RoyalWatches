import NavBar from "../NavBar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, SlidersHorizontal, Gem, HeartHandshake, Globe, Layers, ArrowRight, Check } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Elegant Designs",
    desc: "Every piece in our collection is selected for its timeless visual harmony — understated beauty that never dates.",
    points: ["Exquisite craftsmanship", "Timeless elegance", "Unmatched sophistication"],
  },
  {
    icon: SlidersHorizontal,
    title: "Precision Engineering",
    desc: "Swiss-grade movements and aerospace-standard tolerances ensure flawless, dependable performance.",
    points: ["Advanced movement technology", "Reliable performance", "Meticulous detail"],
  },
  {
    icon: Gem,
    title: "Luxurious Materials",
    desc: "Sapphire crystal, grade-5 titanium, alligator leather — only materials worthy of the wrist make the cut.",
    points: ["Premium quality components", "Durable construction", "Opulent surface finishes"],
  },
  {
    icon: HeartHandshake,
    title: "Exceptional Service",
    desc: "Our specialists guide every purchase from discovery to delivery, ensuring complete satisfaction every time.",
    points: ["Customer-focused approach", "Personalised experience", "Satisfaction guaranteed"],
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Discreet, insured worldwide shipping — your timepiece arrives anywhere on the globe, safely and swiftly.",
    points: ["Worldwide delivery", "Accessible luxury", "Trusted brand"],
  },
  {
    icon: Layers,
    title: "Exquisite Craftsmanship",
    desc: "Hundreds of hours of hand-finishing go into each case, dial, and bracelet before it earns the Royal Watches seal.",
    points: ["Handcrafted precision", "Timeless design language", "Luxury-grade materials"],
  },
];

export default function Features() {
  return (
    <div style={{ backgroundColor: "var(--rw-bg)", minHeight: "100vh" }}>
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: "120px", paddingBottom: "72px" }}>
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
            What Sets Us Apart
          </motion.span>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-light"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "var(--rw-text)",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Built to Elevate
            <br />
            <span style={{ color: "var(--rw-gold)" }}>Your Style</span>
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{
              maxWidth: "520px",
              color: "var(--rw-muted)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Discover the essence of luxury and precision — the principles that define every watch we carry.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="rw-container">
        <div style={{ height: "1px", backgroundColor: "var(--rw-border)" }} />
      </div>

      {/* ── Feature grid ─────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col gap-5 p-7"
                style={{
                  backgroundColor: "var(--rw-surface)",
                  border: "1px solid var(--rw-border)",
                  borderRadius: "1rem",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "var(--rw-elevated)",
                    border: "1px solid var(--rw-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--rw-gold)" }} />
                </div>

                {/* Title + desc */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-display font-light"
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--rw-text)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--rw-muted)",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: "var(--rw-border)" }} />

                {/* Points */}
                <ul className="flex flex-col gap-2">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5">
                      <Check
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: "var(--rw-gold)" }}
                      />
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.8125rem",
                          color: "var(--rw-muted)",
                        }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── CTA strip ────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: "var(--rw-surface)",
          borderTop: "1px solid var(--rw-border)",
        }}
      >
        <div className="rw-container" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
          <motion.div
            className="flex flex-col items-center text-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="rw-section-label">The Collection</span>
            <h2
              className="font-display font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--rw-text)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              Experience it for yourself
            </h2>
            <p
              style={{
                maxWidth: "460px",
                color: "var(--rw-muted)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
              }}
            >
              Browse our curated selection of luxury timepieces and find the one that defines your moment.
            </p>
            <Link to="/products">
              <motion.button whileTap={{ scale: 0.97 }} className="rw-btn-primary mt-1">
                Explore Watches
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
