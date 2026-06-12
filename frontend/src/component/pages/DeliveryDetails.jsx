import NavBar from "../NavBar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Truck, Zap, Clock, Globe, MapPin,
  PackageCheck, RotateCcw, HeadphonesIcon,
} from "lucide-react";

const TIERS = [
  {
    icon: Truck,
    name: "Standard",
    time: "5 – 7 business days",
    price: "Free over $20,000",
    priceNote: "Otherwise calculated at checkout",
    tag: "Most Popular",
  },
  {
    icon: Zap,
    name: "Expedited",
    time: "2 – 3 business days",
    price: "$100",
    priceNote: "Flat rate, any order size",
    tag: "Recommended",
  },
  {
    icon: Clock,
    name: "Overnight",
    time: "Next business day",
    price: "$150",
    priceNote: "Order before 3 PM local time",
    tag: "Fastest",
  },
];

const INFO_SECTIONS = [
  {
    icon: Globe,
    title: "International Shipping",
    body: "We offer international shipping to select countries. International orders may be subject to customs duties, taxes, and additional shipping fees. Delivery times for international orders vary based on the destination.",
    items: null,
  },
  {
    icon: PackageCheck,
    title: "Order Tracking",
    body: "Once your order has shipped, you will receive a confirmation email with a tracking number. Use this number to monitor the status of your delivery on the carrier's website.",
    items: null,
  },
  {
    icon: HeadphonesIcon,
    title: "Delivery Issues",
    body: "If you encounter any issues with your delivery, such as a delayed or missing package, please contact our customer support team and we'll resolve it as quickly as possible.",
    items: [
      { label: "Email", text: "support@royalwatches.com" },
      { label: "Phone", text: "+254 712 4455" },
      { label: "Address", text: "Box 9000, Nairobi, Kenya" },
    ],
  },
  {
    icon: RotateCcw,
    title: "Returns and Exchanges",
    body: "If you need to return or exchange an item, please refer to our Return Policy. Ensure the item is in its original condition and packaging before initiating a return or exchange.",
    items: null,
  },
];

const DeliveryDetails = () => (
  <div style={{ backgroundColor: "var(--rw-bg)", minHeight: "100vh" }}>
    <NavBar />

    {/* ── Hero ─────────────────────────────────────────────── */}
    <div className="rw-container" style={{ paddingTop: "120px", paddingBottom: "64px" }}>
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
          Shipping
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
          Delivery{" "}
          <span style={{ color: "var(--rw-gold)" }}>Details</span>
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{
            maxWidth: "500px",
            color: "var(--rw-muted)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          Everything you need to know about our shipping options, delivery
          times, and costs — so your timepiece arrives exactly when expected.
        </motion.p>
      </motion.div>
    </div>

    {/* ── Divider ──────────────────────────────────────────── */}
    <div className="rw-container">
      <div style={{ height: "1px", backgroundColor: "var(--rw-border)" }} />
    </div>

    {/* ── Shipping tiers ───────────────────────────────────── */}
    <div className="rw-container" style={{ paddingTop: "80px", paddingBottom: "64px" }}>
      <motion.div
        className="flex flex-col items-center text-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      >
        <span className="rw-section-label">Shipping Methods</span>
        <h2
          className="font-display font-light"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--rw-text)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Choose your speed
        </h2>
        <p
          style={{
            maxWidth: "420px",
            color: "var(--rw-muted)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
          }}
        >
          Orders placed before 3 PM local time are processed the same day.
          All shipments are fully insured.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TIERS.map((tier, i) => {
          const Icon = tier.icon;
          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col gap-5 p-7"
              style={{
                backgroundColor: "var(--rw-surface)",
                border: "1px solid var(--rw-border)",
                borderRadius: "1rem",
                position: "relative",
              }}
            >
              {/* Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  backgroundColor: "var(--rw-elevated)",
                  border: "1px solid var(--rw-border)",
                  borderRadius: "2rem",
                  padding: "0.2rem 0.7rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--rw-gold)",
                  }}
                >
                  {tier.tag}
                </span>
              </div>

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
                }}
              >
                <Icon className="w-5 h-5" style={{ color: "var(--rw-gold)" }} />
              </div>

              {/* Name */}
              <h3
                className="font-display font-light"
                style={{
                  fontSize: "1.625rem",
                  color: "var(--rw-text)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {tier.name}
              </h3>

              <div style={{ height: "1px", backgroundColor: "var(--rw-border)" }} />

              {/* Time */}
              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--rw-muted)",
                  }}
                >
                  Delivery Time
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    color: "var(--rw-text)",
                    fontWeight: 500,
                  }}
                >
                  {tier.time}
                </span>
              </div>

              {/* Price */}
              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--rw-muted)",
                  }}
                >
                  Cost
                </span>
                <span
                  className="font-display font-light"
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--rw-gold)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--rw-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {tier.priceNote}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* ── Info sections ────────────────────────────────────── */}
    <div
      style={{
        backgroundColor: "var(--rw-surface)",
        borderTop: "1px solid var(--rw-border)",
        borderBottom: "1px solid var(--rw-border)",
      }}
    >
      <div className="rw-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <motion.div
          className="flex flex-col items-center text-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="rw-section-label">More Information</span>
          <h2
            className="font-display font-light"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--rw-text)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Good to know
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {INFO_SECTIONS.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  backgroundColor: "var(--rw-elevated)",
                  border: "1px solid var(--rw-border)",
                  borderRadius: "1rem",
                  padding: "clamp(1.25rem, 3vw, 1.75rem)",
                }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "0.75rem",
                      backgroundColor: "var(--rw-surface)",
                      border: "1px solid var(--rw-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "var(--rw-gold)" }} />
                  </div>
                  <h3
                    className="font-display font-light"
                    style={{
                      fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                      color: "var(--rw-text)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                      paddingTop: "0.35rem",
                    }}
                  >
                    {section.title}
                  </h3>
                </div>

                <div style={{ height: "1px", backgroundColor: "var(--rw-border)", marginBottom: "1rem" }} />

                <p
                  style={{
                    color: "var(--rw-muted)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    marginBottom: section.items ? "1rem" : 0,
                  }}
                >
                  {section.body}
                </p>

                {section.items && (
                  <ul className="flex flex-col gap-2.5 mt-1">
                    {section.items.map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <div
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            backgroundColor: "var(--rw-gold)",
                            marginTop: "0.6rem",
                            flexShrink: 0,
                            opacity: 0.8,
                          }}
                        />
                        <p
                          style={{
                            color: "var(--rw-muted)",
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.9375rem",
                            lineHeight: 1.7,
                          }}
                        >
                          <span style={{ color: "var(--rw-text)", fontWeight: 500 }}>
                            {item.label}:{" "}
                          </span>
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>

    {/* ── CTA strip ────────────────────────────────────────── */}
    <div className="rw-container" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
      <motion.div
        className="flex flex-col items-center text-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <span className="rw-section-label">Ready to order?</span>
        <h2
          className="font-display font-light"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--rw-text)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Find your next timepiece
        </h2>
        <p
          style={{
            maxWidth: "420px",
            color: "var(--rw-muted)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
          }}
        >
          Browse our curated collection and enjoy the confidence of fully
          insured, white-glove delivery.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
          <Link to="/products">
            <motion.button whileTap={{ scale: 0.97 }} className="rw-btn-primary">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button whileTap={{ scale: 0.97 }} className="rw-btn-ghost">
              Contact Support
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>

    <Footer />
  </div>
);

export default DeliveryDetails;
