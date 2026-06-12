import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { login } from '../../redux/apiCalls';

const STAGGER = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

const InputField = ({ label, type, value, onChange, required, minLength, autoComplete }) => {
  const [showPw, setShowPw] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPw ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        style={{
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--rw-muted)',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          autoComplete={autoComplete}
          style={{
            width: '100%',
            height: '48px',
            background: 'var(--rw-elevated)',
            border: '1px solid var(--rw-border)',
            borderRadius: '0.625rem',
            padding: '0 44px 0 14px',
            fontSize: '0.9375rem',
            color: 'var(--rw-text)',
            fontFamily: "'Outfit', sans-serif",
            outline: 'none',
            transition: 'border-color 200ms ease',
          }}
          onFocus={e => (e.target.style.borderColor = 'var(--rw-gold)')}
          onBlur={e => (e.target.style.borderColor = 'var(--rw-border)')}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPw(v => !v)}
            tabIndex={-1}
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--rw-muted)',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
            }}
          >
            {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      login(dispatch, { username: username.trim(), password });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'var(--rw-bg)', padding: '1.5rem' }}
    >
      {/* Decorative background orb */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'var(--rw-surface)',
          border: '1px solid var(--rw-border)',
          borderRadius: '1.5rem',
          padding: 'clamp(2rem, 6vw, 3rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Brand */}
        <motion.div variants={STAGGER} transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }} className="text-center mb-8">
          <Link to="/">
            <span
              className="font-display font-light"
              style={{ fontSize: '1.5rem', color: 'var(--rw-text)', letterSpacing: '-0.02em' }}
            >
              Royal<span style={{ color: 'var(--rw-gold)' }}>Watches</span>
            </span>
          </Link>
          <p
            className="mt-2"
            style={{ fontSize: '0.8125rem', color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
          >
            Sign in to your account
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <motion.div variants={STAGGER} transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}>
            <InputField
              label="Username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              minLength={2}
              autoComplete="username"
            />
          </motion.div>

          <motion.div variants={STAGGER} transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}>
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              autoComplete="current-password"
            />
          </motion.div>

          {/* Remember + Forgot */}
          <motion.div
            variants={STAGGER}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center justify-between"
          >
            <label
              className="flex items-center gap-2 cursor-pointer select-none"
              style={{ fontSize: '0.8125rem', color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
            >
              <input
                type="checkbox"
                style={{ accentColor: 'var(--rw-gold)', width: '14px', height: '14px' }}
              />
              Remember me
            </label>
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontSize: '0.8125rem',
                color: '#f87171',
                textAlign: 'center',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {error}
            </motion.p>
          )}

          <motion.div variants={STAGGER} transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}>
            <motion.button
              type="submit"
              className="rw-btn-primary w-full justify-center"
              disabled={isFetching}
              whileHover={!isFetching ? { scale: 1.01 } : {}}
              whileTap={!isFetching ? { scale: 0.97 } : {}}
              style={isFetching ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
            >
              {isFetching ? 'Signing in…' : (
                <>
                  Sign In
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </motion.button>
          </motion.div>
        </form>

        {/* Footer link */}
        <motion.p
          variants={STAGGER}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mt-6"
          style={{ fontSize: '0.8125rem', color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
        >
          Don&apos;t have an account?{' '}
          <Link
            to="/signup"
            style={{ color: 'var(--rw-gold)', fontWeight: 500, textDecoration: 'none' }}
          >
            Create one
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
