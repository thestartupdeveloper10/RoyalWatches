import { useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Check } from "lucide-react";

const CONTACT_DETAILS = [
  { icon: MapPin,  label: "Address",        value: "Box 9999, Nairobi, Kenya" },
  { icon: Phone,   label: "Phone",          value: "+254 712 3355" },
  { icon: Mail,    label: "Email",          value: "support@royalwatches.com" },
  { icon: Clock,   label: "Business Hours", value: "Mon – Sat, 9 am – 6 pm EAT" },
];

const InputField = ({ label, name, type = "text", value, onChange, placeholder, required }) => (
  <div className="flex flex-col gap-1.5">
    <label
      style={{
        fontSize: "0.6875rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--rw-muted)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      style={{
        height: "48px",
        background: "var(--rw-elevated)",
        border: "1px solid var(--rw-border)",
        borderRadius: "0.625rem",
        padding: "0 14px",
        fontSize: "0.9375rem",
        color: "var(--rw-text)",
        fontFamily: "'Outfit', sans-serif",
        outline: "none",
        transition: "border-color 200ms ease",
        width: "100%",
      }}
      onFocus={e => (e.target.style.borderColor = "var(--rw-gold)")}
      onBlur={e  => (e.target.style.borderColor = "var(--rw-border)")}
    />
  </div>
);

const Contact = () => {
  const [form, setForm]           = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState("");

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--rw-bg)", minHeight: "100vh" }}>
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: "120px", paddingBottom: "56px" }}>
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
            Reach Out
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
            Get in <span style={{ color: "var(--rw-gold)" }}>Touch</span>
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
            Our team of specialists is ready to help you find the perfect timepiece or answer any questions.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="rw-container">
        <div style={{ height: "1px", backgroundColor: "var(--rw-border)" }} />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="rw-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* ── Left: contact info ─────────────────────────── */}
          <motion.div
            className="lg:w-2/5 flex flex-col gap-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex flex-col gap-3">
              <span className="rw-section-label">Contact Details</span>
              <h2
                className="font-display font-light"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "var(--rw-text)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                We'd love to hear from you
              </h2>
              <p
                style={{
                  color: "var(--rw-muted)",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                }}
              >
                Fill in the form and one of our specialists will respond within 24 hours.
              </p>
            </div>

            <div style={{ height: "1px", backgroundColor: "var(--rw-border)" }} />

            {/* Decorative quote */}
            <div
              style={{
                borderLeft: "2px solid var(--rw-gold)",
                paddingLeft: "1.25rem",
              }}
            >
              <p
                className="font-display font-light"
                style={{
                  fontSize: "1.25rem",
                  color: "var(--rw-text)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.4,
                  opacity: 0.7,
                }}
              >
                "A timepiece is more than an instrument — it is a statement. We're here to help you make the right one."
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (                <div key={label} className="flex items-start gap-4">
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "0.625rem",
                      backgroundColor: "var(--rw-elevated)",
                      border: "1px solid var(--rw-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "var(--rw-gold)" }} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.6875rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--rw-muted)",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9375rem",
                        color: "var(--rw-text)",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ────────────────────────────────── */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              style={{
                backgroundColor: "var(--rw-surface)",
                border: "1px solid var(--rw-border)",
                borderRadius: "1.25rem",
                padding: "clamp(1.5rem, 4vw, 2.5rem)",
              }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="flex flex-col items-center text-center gap-6 py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      style={{
                        width: "5rem",
                        height: "5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--rw-elevated)",
                        border: "1px solid var(--rw-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check className="w-7 h-7" style={{ color: "var(--rw-gold)" }} />
                    </motion.div>
                    <div className="flex flex-col gap-2">
                      <h2
                        className="font-display font-light"
                        style={{ fontSize: "2rem", color: "var(--rw-text)", letterSpacing: "-0.02em" }}
                      >
                        Message Sent
                      </h2>
                      <p
                        style={{
                          color: "var(--rw-muted)",
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                        }}
                      >
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                    <motion.button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                      whileTap={{ scale: 0.97 }}
                      className="rw-btn-ghost"
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                ) : (
                  /* Form */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div className="mb-1">
                      <span className="rw-section-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                        Send a message
                      </span>
                      <h2
                        className="font-display font-light"
                        style={{ fontSize: "1.75rem", color: "var(--rw-text)", letterSpacing: "-0.02em" }}
                      >
                        Start the conversation
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                      <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        style={{
                          fontSize: "0.6875rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--rw-muted)",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us how we can help you…"
                        required
                        style={{
                          background: "var(--rw-elevated)",
                          border: "1px solid var(--rw-border)",
                          borderRadius: "0.625rem",
                          padding: "12px 14px",
                          fontSize: "0.9375rem",
                          color: "var(--rw-text)",
                          fontFamily: "'Outfit', sans-serif",
                          outline: "none",
                          transition: "border-color 200ms ease",
                          width: "100%",
                          resize: "vertical",
                        }}
                        onFocus={e => (e.target.style.borderColor = "var(--rw-gold)")}
                        onBlur={e  => (e.target.style.borderColor = "var(--rw-border)")}
                      />
                    </div>

                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                          fontSize: "0.8125rem",
                          color: "#f87171",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        {error}
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.97 }}
                      className="rw-btn-primary self-start"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
