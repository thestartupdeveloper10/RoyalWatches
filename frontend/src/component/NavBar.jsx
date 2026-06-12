import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, User, Menu, X, Sun, Moon, LogOut } from 'lucide-react';
import { logout } from '../redux/userRedux';
import { selectWishlistItems } from '../redux/wishlistRedux';
import { selectCartItems } from '@/redux/cartRedux';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const user = useSelector(state => state.user.currentUser);
  const userId = useSelector(state => state.user.userId);
  const { quantity } = useSelector(state => selectCartItems(state, userId));
  const { wishQuantity } = useSelector(state => selectWishlistItems(state, userId));
  const dispatch = useDispatch();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? 'var(--rw-nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--rw-border)' : 'transparent'}`,
          transition: 'background-color 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease, height 280ms cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div className="rw-container">
          <div
            className="flex items-center justify-between"
            style={{
              height: scrolled ? '60px' : '76px',
              transition: 'height 280ms cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            {/* Left: Navigation links (desktop) */}
            <div className="hidden md:flex items-center gap-8 w-1/3">
              <Link to="/Men" className="rw-nav-link">Men</Link>
              <Link to="/Women" className="rw-nav-link">Women</Link>
              <Link to="/products" className="rw-nav-link">All Watches</Link>
            </div>

            {/* Center: Wordmark */}
            <div className="flex-1 flex justify-start md:justify-center md:flex-none md:w-1/3">
              <Link
                to="/"
                className="font-display font-medium tracking-tight"
                style={{
                  fontSize: scrolled ? '1.125rem' : '1.375rem',
                  color: 'var(--rw-text)',
                  transition: 'font-size 280ms cubic-bezier(0.23, 1, 0.32, 1), color 200ms ease',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                RoyalWatches
              </Link>
            </div>

            {/* Right: Icon bar */}
            <div className="flex items-center justify-end gap-0.5 md:gap-1 w-auto md:w-1/3">
              {/* Theme toggle */}
              <button onClick={toggleTheme} className="rw-icon-btn" aria-label="Toggle theme">
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.span
                      key="sun"
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="flex items-center justify-center"
                    >
                      <Sun className="w-[15px] h-[15px]" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="flex items-center justify-center"
                    >
                      <Moon className="w-[15px] h-[15px]" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <Link to={user ? '/userprofile' : '/login'} className="rw-icon-btn relative" aria-label="Account">
                <User className="w-[15px] h-[15px]" />
                {user && (
                  <span
                    className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--rw-gold)' }}
                  />
                )}
              </Link>

              <Link to="/wishlist" className="rw-icon-btn relative" aria-label="Wishlist">
                <Heart className="w-[15px] h-[15px]" />
                {wishQuantity > 0 && <span className="rw-badge">{wishQuantity}</span>}
              </Link>

              <Link to="/cart" className="rw-icon-btn relative" aria-label="Cart">
                <ShoppingBag className="w-[15px] h-[15px]" />
                {quantity > 0 && <span className="rw-badge">{quantity}</span>}
              </Link>

              {user && (
                <button
                  onClick={() => dispatch(logout())}
                  className="rw-icon-btn hidden md:flex"
                  aria-label="Log out"
                >
                  <LogOut className="w-[15px] h-[15px]" />
                </button>
              )}

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMenuOpen(o => !o)}
                className="rw-icon-btn md:hidden ml-1"
                aria-label="Menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-[15px] h-[15px]" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-[15px] h-[15px]" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="rw-mobile-menu fixed left-0 right-0 z-40"
              style={{ top: scrolled ? '60px' : '76px' }}
            >
              <nav className="rw-container py-10 flex flex-col gap-1">
                {[
                  { to: '/Men', label: "Men's Collection" },
                  { to: '/Women', label: "Women's Collection" },
                  { to: '/products', label: 'All Watches' },
                  { to: '/about', label: 'About' },
                  { to: '/contact', label: 'Contact' },
                ].map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link to={link.to} className="rw-mobile-link">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                {user && (
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <button
                      onClick={() => { dispatch(logout()); setIsMenuOpen(false); }}
                      className="rw-mobile-link text-left w-full"
                      style={{ color: 'var(--rw-muted)', fontSize: '1.25rem' }}
                    >
                      Sign out
                    </button>
                  </motion.div>
                )}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
