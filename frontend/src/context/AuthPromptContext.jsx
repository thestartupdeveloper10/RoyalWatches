import { createContext, useCallback, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, ArrowRight } from 'lucide-react';

const AuthPromptContext = createContext(null);

const AuthPromptModal = ({ isOpen, onClose }) => (
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
          onClick={onClose}
        />
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ pointerEvents: 'none' }}
        >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          style={{
            width: '100%',
            maxWidth: '400px',
            pointerEvents: 'auto',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--rw-surface)',
              border: '1px solid var(--rw-border)',
              borderRadius: '1.5rem',
              padding: '2rem',
              position: 'relative',
            }}
          >
            <button
              onClick={onClose}
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
                alignItems: 'center',
                padding: '4px',
              }}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-center text-center gap-5">
              <div
                style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--rw-elevated)',
                  border: '1px solid var(--rw-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Heart className="w-6 h-6" style={{ color: 'var(--rw-gold)' }} />
              </div>

              <div className="flex flex-col gap-2">
                <h2
                  className="font-display font-light"
                  style={{ fontSize: '1.625rem', color: 'var(--rw-text)', letterSpacing: '-0.02em' }}
                >
                  Sign in to continue
                </h2>
                <p
                  style={{
                    color: 'var(--rw-muted)',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                  }}
                >
                  Create an account or sign in to save items and manage your cart.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 w-full">
                <Link to="/login" onClick={onClose} className="w-full">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="rw-btn-primary w-full justify-center"
                    style={{ width: '100%' }}
                  >
                    Sign In
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </Link>
                <Link to="/signup" onClick={onClose} className="w-full">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="rw-btn-ghost w-full justify-center"
                    style={{ width: '100%' }}
                  >
                    Create Account
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>
);

export const AuthPromptProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(state => state.user.currentUser);

  const requireAuth = useCallback((fn) => {
    if (user) {
      fn();
    } else {
      setIsOpen(true);
    }
  }, [user]);

  return (
    <AuthPromptContext.Provider value={{ requireAuth }}>
      {children}
      <AuthPromptModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </AuthPromptContext.Provider>
  );
};

export const useAuthAction = () => useContext(AuthPromptContext);
