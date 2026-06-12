import NavBar from "../NavBar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Scale, RefreshCw, Monitor, Tag,
  CreditCard, Truck, RotateCcw, Shield, AlertTriangle,
  UserCheck, Globe, Mail,
} from "lucide-react";

const SECTIONS = [
  {
    number: "01",
    icon: Scale,
    title: "Acceptance of Terms",
    body: "By accessing or using our website (www.royalwatches.com), you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.",
    items: null,
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Changes to Terms",
    body: "Royal Watches reserves the right to modify or replace these Terms & Conditions at any time. We will notify you of any changes by posting the updated terms on this page. It is your responsibility to review these Terms periodically for any changes.",
    items: null,
  },
  {
    number: "03",
    icon: Monitor,
    title: "Use of the Website",
    body: null,
    items: [
      { label: "Eligibility", text: "You must be at least 18 years old to use our website." },
      { label: "Account Responsibility", text: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account." },
      { label: "Prohibited Activities", text: "You agree not to engage in any unlawful activities or activities that could damage, disable, overburden, or impair the website." },
    ],
  },
  {
    number: "04",
    icon: Tag,
    title: "Products and Pricing",
    body: null,
    items: [
      { label: "Product Information", text: "We strive to provide accurate information about our products. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, or error-free." },
      { label: "Pricing", text: "Prices are subject to change without notice. We are not liable for any discrepancies or errors in pricing information." },
    ],
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Orders and Payments",
    body: null,
    items: [
      { label: "Order Acceptance", text: "Orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order." },
      { label: "Payment", text: "All payments must be made through the payment methods specified on our website. You are responsible for providing accurate payment information." },
    ],
  },
  {
    number: "06",
    icon: Truck,
    title: "Shipping and Delivery",
    body: null,
    items: [
      { label: "Shipping", text: "We offer various shipping options. Shipping times and costs are subject to change based on the delivery location and method." },
      { label: "Delivery", text: "Delivery dates are estimates and not guaranteed. We are not responsible for delays caused by third parties or unforeseen events." },
    ],
  },
  {
    number: "07",
    icon: RotateCcw,
    title: "Returns and Refunds",
    body: null,
    items: [
      { label: "Returns", text: "We accept returns in accordance with our Return Policy. Please refer to our Return Policy for detailed information on how to return products." },
      { label: "Refunds", text: "Refunds will be processed according to our Refund Policy. Please review our Refund Policy for more information." },
    ],
  },
  {
    number: "08",
    icon: Shield,
    title: "Intellectual Property",
    body: null,
    items: [
      { label: "Ownership", text: "All content on our website, including text, images, logos, and trademarks, is the property of Royal Watches or its licensors and is protected by intellectual property laws." },
      { label: "Use Restrictions", text: "You may not reproduce, distribute, modify, or create derivative works of any content on our website without prior written permission." },
    ],
  },
  {
    number: "09",
    icon: AlertTriangle,
    title: "Limitation of Liability",
    body: null,
    items: [
      { label: "Disclaimer", text: 'Our website and products are provided "as is" without warranties of any kind. We do not guarantee that our website will be uninterrupted or error-free.' },
      { label: "Liability", text: "To the fullest extent permitted by law, Royal Watches is not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or products." },
    ],
  },
  {
    number: "10",
    icon: UserCheck,
    title: "Indemnification",
    body: "You agree to indemnify and hold harmless Royal Watches, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of our website or violation of these Terms & Conditions.",
    items: null,
  },
  {
    number: "11",
    icon: Globe,
    title: "Governing Law",
    body: "These Terms & Conditions are governed by and construed in accordance with applicable laws. Any disputes arising under or in connection with these Terms will be subject to the exclusive jurisdiction of the relevant courts.",
    items: null,
  },
  {
    number: "12",
    icon: Mail,
    title: "Contact Us",
    body: "If you have any questions or concerns about these Terms & Conditions, please reach out to our team.",
    items: [
      { label: "Email", text: "support@royalwatches.com" },
      { label: "Phone", text: "+254 712 3455" },
      { label: "Address", text: "Nairobi, Kenya" },
    ],
  },
];

const TermsAndConditions = () => {
  const year = new Date().getFullYear();

  return (
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
            Legal
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
            Terms &amp;{" "}
            <span style={{ color: "var(--rw-gold)" }}>Conditions</span>
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{
              maxWidth: "480px",
              color: "var(--rw-muted)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Please read these terms carefully before using our website or
            purchasing from our collection.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--rw-elevated)",
              border: "1px solid var(--rw-border)",
              borderRadius: "2rem",
              padding: "0.4rem 1rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--rw-muted)",
              }}
            >
              Effective Date:
            </span>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--rw-gold)",
              }}
            >
              {year}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="rw-container">
        <div style={{ height: "1px", backgroundColor: "var(--rw-border)" }} />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── Sticky TOC (desktop only) ──────────────────────── */}
          <motion.nav
            className="hidden lg:flex flex-col gap-1"
            style={{ width: "220px", flexShrink: 0, position: "sticky", top: "100px" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            aria-label="Table of contents"
          >
            <span className="rw-section-label" style={{ marginBottom: "0.75rem" }}>
              Contents
            </span>
            {SECTIONS.map((s) => (
              <a
                key={s.number}
                href={`#section-${s.number}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.35rem 0",
                  textDecoration: "none",
                  color: "var(--rw-muted)",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.8125rem",
                  lineHeight: 1.4,
                  transition: "color 200ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--rw-gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--rw-muted)")}
              >
                <span
                  className="font-display font-light"
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--rw-gold)",
                    opacity: 0.55,
                    lineHeight: 1,
                    minWidth: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  {s.number}
                </span>
                {s.title}
              </a>
            ))}
          </motion.nav>

          {/* ── Section cards ─────────────────────────────────── */}
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {SECTIONS.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  id={`section-${section.number}`}
                  key={section.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: i < 4 ? i * 0.06 : 0,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{
                    backgroundColor: "var(--rw-surface)",
                    border: "1px solid var(--rw-border)",
                    borderRadius: "1rem",
                    padding: "clamp(1.25rem, 3vw, 1.75rem)",
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      style={{
                        width: "2.75rem",
                        height: "2.75rem",
                        borderRadius: "0.75rem",
                        backgroundColor: "var(--rw-elevated)",
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
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="font-display font-light"
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--rw-gold)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          opacity: 0.65,
                        }}
                      >
                        {section.number}
                      </span>
                      <h2
                        className="font-display font-light"
                        style={{
                          fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                          color: "var(--rw-text)",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.1,
                        }}
                      >
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "var(--rw-border)",
                      marginBottom: "1rem",
                    }}
                  />

                  {section.body && (
                    <p
                      style={{
                        color: "var(--rw-muted)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: 1.75,
                      }}
                    >
                      {section.body}
                    </p>
                  )}

                  {section.items && (
                    <ul className="flex flex-col gap-3">
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
                              lineHeight: 1.75,
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
            <span className="rw-section-label">Questions?</span>
            <h2
              className="font-display font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--rw-text)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              We&apos;re here to help
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
              If you have any questions about our terms or your rights as a
              customer, our team is always ready to assist.
            </p>
            <Link to="/contact">
              <motion.button whileTap={{ scale: 0.97 }} className="rw-btn-primary mt-1">
                Contact Us
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

export default TermsAndConditions;
