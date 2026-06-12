import NavBar from "../NavBar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Award, Gem, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const VALUES = [
  {
    icon: Award,
    title: "Quality",
    body: "Every piece in our collection meets exacting standards for precision and craftsmanship — we accept nothing less than the finest.",
  },
  {
    icon: Gem,
    title: "Elegance",
    body: "Timeless design paired with contemporary sensibility. Each watch is chosen to elevate any occasion, any style.",
  },
  {
    icon: Users,
    title: "Service",
    body: "Our experts are dedicated to finding you the perfect timepiece, ensuring a seamless and memorable experience every time.",
  },
];

const STATS = [
  { value: "10k+", label: "Satisfied Clients" },
  { value: "500+", label: "Curated Pieces" },
  { value: "15+", label: "Years of Heritage" },
  { value: "40+", label: "Global Brands" },
];

export default function About() {
  return (
    <div style={{ backgroundColor: "var(--rw-bg)", minHeight: "100vh" }}>
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="rw-section-label"
          >
            Our Story
          </motion.span>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-light"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "var(--rw-text)",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Royal Watches
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{
              maxWidth: "560px",
              color: "var(--rw-muted)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Premier destination for luxury timepieces — where timeless elegance meets modern sophistication.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="rw-container">
        <div style={{ height: "1px", backgroundColor: "var(--rw-border)" }} />
      </div>

      {/* ── Story ─────────────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            className="lg:w-1/2 w-full flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                backgroundColor: "var(--rw-elevated)",
                border: "1px solid var(--rw-border)",
                aspectRatio: "4/5",
              }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2019/06/24/00/57/watch-4294991_960_720.jpg"
                alt="Royal Watches craftsmanship"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="rw-section-label">Who We Are</span>
            <h2
              className="font-display font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--rw-text)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              A passion for horology, refined over generations
            </h2>

            <div
              style={{ height: "1px", backgroundColor: "var(--rw-border)" }}
            />

            <p
              style={{
                color: "var(--rw-muted)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
              }}
            >
              We are dedicated to providing our customers with the finest selection of watches that combine timeless elegance and modern sophistication. Our curated collection features exquisite craftsmanship from renowned brands around the world.
            </p>
            <p
              style={{
                color: "var(--rw-muted)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
              }}
            >
              We believe a watch is more than just a timekeeping device — it is a reflection of personal style and a symbol of life's precious moments. Whether you seek a classic design or a contemporary masterpiece, our collection caters to every taste and occasion.
            </p>

            <Link to="/products">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="rw-btn-primary mt-2"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: "var(--rw-surface)",
          borderTop: "1px solid var(--rw-border)",
          borderBottom: "1px solid var(--rw-border)",
        }}
      >
        <div className="rw-container" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center gap-1"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              >
                <span
                  className="font-display font-light"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "var(--rw-gold)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--rw-muted)",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Values ───────────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <motion.div
          className="flex flex-col items-center text-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="rw-section-label">What We Stand For</span>
          <h2
            className="font-display font-light"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--rw-text)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Our Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {VALUES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col gap-4 p-7"
                style={{
                  backgroundColor: "var(--rw-surface)",
                  border: "1px solid var(--rw-border)",
                  borderRadius: "1rem",
                }}
              >
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
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--rw-gold)" }} />
                </div>
                <h3
                  className="font-display font-light"
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--rw-text)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--rw-muted)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Journey ──────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: "var(--rw-surface)",
          borderTop: "1px solid var(--rw-border)",
          borderBottom: "1px solid var(--rw-border)",
        }}
      >
        <div className="rw-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <motion.div
            className="flex flex-col items-center text-center gap-6"
            style={{ maxWidth: "720px", margin: "0 auto" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="rw-section-label">Our Heritage</span>
            <h2
              className="font-display font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--rw-text)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              Our Journey
            </h2>

            <div style={{ height: "1px", width: "3rem", backgroundColor: "var(--rw-gold)" }} />

            <p
              style={{
                color: "var(--rw-muted)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              From humble beginnings to becoming a trusted name in luxury watches, our journey has been fuelled by a passion for horology and an uncompromising commitment to excellence. We grew from a small boutique to an internationally recognised brand, always staying true to our values.
            </p>
            <p
              style={{
                color: "var(--rw-muted)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              As we continue to expand, we remain committed to offering the finest timepieces and providing an unparalleled shopping experience. Join us in celebrating the art of watchmaking and the timeless beauty of our collections.
            </p>

            <Link to="/products">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="rw-btn-ghost mt-2"
              >
                View All Watches
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
