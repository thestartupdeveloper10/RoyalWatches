import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { X, Check, ArrowRight, ShoppingBag } from 'lucide-react';
import { clearCart, selectCartItems } from '../redux/cartRedux';

const SHIPPING_FEE = 100;
const DISCOUNT_THRESHOLD = 100000;
const DISCOUNT_RATE = 0.05;

const Field = ({ label, value, onChange, type = 'text', required, placeholder }) => (
  <div className="flex flex-col gap-1.5">
    <label
      style={{
        fontSize: '0.6875rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--rw-muted)',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      style={{
        height: '44px',
        background: 'var(--rw-elevated)',
        border: '1px solid var(--rw-border)',
        borderRadius: '0.625rem',
        padding: '0 14px',
        fontSize: '0.9375rem',
        color: 'var(--rw-text)',
        fontFamily: "'Outfit', sans-serif",
        outline: 'none',
        transition: 'border-color 200ms ease',
        width: '100%',
      }}
      onFocus={e => (e.target.style.borderColor = 'var(--rw-gold)')}
      onBlur={e => (e.target.style.borderColor = 'var(--rw-border)')}
    />
  </div>
);

const CheckoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const cart = useSelector(state => selectCartItems(state, userId));
  const [step, setStep] = useState('form');
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', country: '' });

  const subtotal = cart.total;
  const discount = subtotal > DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : 0;
  const total = subtotal + SHIPPING_FEE - discount;

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(clearCart({ userId }));
    setStep('success');
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('form');
      setForm({ name: '', email: '', address: '', city: '', country: '' });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998]"
            style={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)' }}
            onClick={handleClose}
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="fixed z-[9999]"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'calc(100% - 2rem)',
              maxWidth: '560px',
              maxHeight: '92vh',
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--rw-surface)',
                border: '1px solid var(--rw-border)',
                borderRadius: '1.5rem',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                position: 'relative',
              }}
            >
              <button
                onClick={handleClose}
                aria-label="Close"
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--rw-muted)',
                  display: 'flex',
                  padding: '4px',
                }}
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {step === 'form' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-6">
                      <span
                        className="rw-section-label"
                        style={{ color: 'var(--rw-gold)', display: 'block', marginBottom: '0.5rem' }}
                      >
                        Checkout
                      </span>
                      <h2
                        className="font-display font-light"
                        style={{ fontSize: '2rem', color: 'var(--rw-text)', letterSpacing: '-0.02em' }}
                      >
                        Shipping Details
                      </h2>
                    </div>

                    {/* Summary strip */}
                    <div
                      className="flex items-center justify-between mb-6 p-3.5"
                      style={{
                        backgroundColor: 'var(--rw-elevated)',
                        border: '1px solid var(--rw-border)',
                        borderRadius: '0.75rem',
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <ShoppingBag className="w-4 h-4" style={{ color: 'var(--rw-gold)' }} />
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem', color: 'var(--rw-muted)' }}>
                          {cart.products.length} {cart.products.length === 1 ? 'item' : 'items'}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontVariantNumeric: 'tabular-nums',
                          color: 'var(--rw-gold)',
                          fontWeight: 500,
                          fontSize: '1rem',
                        }}
                      >
                        ${total.toLocaleString()}
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Full Name" value={form.name} onChange={set('name')} required placeholder="John Smith" />
                        <Field label="Email" type="email" value={form.email} onChange={set('email')} required placeholder="john@example.com" />
                      </div>
                      <Field label="Street Address" value={form.address} onChange={set('address')} required placeholder="123 Luxury Ave" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="City" value={form.city} onChange={set('city')} required placeholder="New York" />
                        <Field label="Country" value={form.country} onChange={set('country')} required placeholder="United States" />
                      </div>

                      <div
                        className="flex flex-col gap-2 pt-2 mt-1"
                        style={{ borderTop: '1px solid var(--rw-border)' }}
                      >
                        <div className="flex justify-between pt-4">
                          <span style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem' }}>Subtotal</span>
                          <span style={{ color: 'var(--rw-text)', fontFamily: "'Outfit', sans-serif", fontVariantNumeric: 'tabular-nums', fontSize: '0.875rem' }}>${subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem' }}>Shipping</span>
                          <span style={{ color: 'var(--rw-text)', fontFamily: "'Outfit', sans-serif", fontVariantNumeric: 'tabular-nums', fontSize: '0.875rem' }}>${SHIPPING_FEE}</span>
                        </div>
                        {discount > 0 && (
                          <div className="flex justify-between">
                            <span style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem' }}>Discount (5%)</span>
                            <span style={{ color: '#4ade80', fontFamily: "'Outfit', sans-serif", fontVariantNumeric: 'tabular-nums', fontSize: '0.875rem' }}>−${discount.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid var(--rw-border)' }}>
                          <span className="font-display font-light" style={{ fontSize: '1.125rem', color: 'var(--rw-text)' }}>Total</span>
                          <span style={{ fontFamily: "'Outfit', sans-serif", fontVariantNumeric: 'tabular-nums', color: 'var(--rw-gold)', fontSize: '1.25rem', fontWeight: 500 }}>
                            ${total.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        whileTap={{ scale: 0.97 }}
                        className="rw-btn-primary w-full justify-center mt-1"
                        style={{ width: '100%' }}
                      >
                        Place Order
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>

                      <p className="text-center text-xs" style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}>
                        Secure checkout · Free returns
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="flex flex-col items-center text-center gap-6 py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      style={{
                        width: '5rem',
                        height: '5rem',
                        borderRadius: '50%',
                        backgroundColor: 'var(--rw-elevated)',
                        border: '1px solid var(--rw-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Check className="w-7 h-7" style={{ color: 'var(--rw-gold)' }} />
                    </motion.div>
                    <div className="flex flex-col gap-2">
                      <h2
                        className="font-display font-light"
                        style={{ fontSize: '2rem', color: 'var(--rw-text)', letterSpacing: '-0.02em' }}
                      >
                        Order Confirmed
                      </h2>
                      <p style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Thank you for your order. Your timepiece will be carefully packaged and dispatched within 2–3 business days.
                      </p>
                    </div>
                    <motion.button
                      onClick={handleClose}
                      whileTap={{ scale: 0.97 }}
                      className="rw-btn-primary justify-center"
                    >
                      Continue Shopping
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
