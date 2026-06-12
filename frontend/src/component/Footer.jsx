import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const COMPANY_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'How It Works', to: '/instructions' },
  { label: 'Contact', to: '/contact' },
];

const HELP_LINKS = [
  { label: 'Customer Support', to: '#' },
  { label: 'Delivery Details', to: '/delivery' },
  { label: 'Terms & Conditions', to: '/terms' },
];

const SOCIAL_LINKS = [
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
        <circle cx="16.806" cy="7.207" r="1.078" />
        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-24"
      style={{
        backgroundColor: 'var(--rw-surface)',
        borderTop: '1px solid var(--rw-border)',
      }}
    >
      <div className="rw-container pt-16 pb-10">
        {/* Top row: brand + social */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12"
          style={{ borderBottom: '1px solid var(--rw-border)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="max-w-xs">
            <Link
              to="/"
              className="font-display font-medium tracking-tight block mb-4"
              style={{
                fontSize: '1.375rem',
                color: 'var(--rw-text)',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              RoyalWatches
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
            >
              Join our community of watch enthusiasts and stay updated on the latest trends in precision timepieces.
            </p>
            <div className="flex items-center gap-2 mt-6">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rw-icon-btn"
                  style={{
                    border: '1px solid var(--rw-border)',
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p
                className="rw-section-label mb-5"
                style={{ fontSize: '0.6875rem' }}
              >
                Company
              </p>
              <ul className="flex flex-col gap-3">
                {COMPANY_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm transition-colors duration-150"
                      style={{
                        color: 'var(--rw-muted)',
                        fontFamily: "'Outfit', sans-serif",
                        textDecoration: 'none',
                      }}
                      onMouseOver={e => { e.currentTarget.style.color = 'var(--rw-text)'; }}
                      onMouseOut={e => { e.currentTarget.style.color = 'var(--rw-muted)'; }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="rw-section-label mb-5" style={{ fontSize: '0.6875rem' }}>Help</p>
              <ul className="flex flex-col gap-3">
                {HELP_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm transition-colors duration-150"
                      style={{
                        color: 'var(--rw-muted)',
                        fontFamily: "'Outfit', sans-serif",
                        textDecoration: 'none',
                      }}
                      onMouseOver={e => { e.currentTarget.style.color = 'var(--rw-text)'; }}
                      onMouseOut={e => { e.currentTarget.style.color = 'var(--rw-muted)'; }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-2 md:col-span-1">
              <p className="rw-section-label mb-5" style={{ fontSize: '0.6875rem' }}>Newsletter</p>
              <p
                className="text-sm mb-4"
                style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
              >
                Get the latest arrivals and exclusive offers.
              </p>
              <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 text-sm rounded-lg"
                  style={{
                    backgroundColor: 'var(--rw-elevated)',
                    border: '1px solid var(--rw-border)',
                    color: 'var(--rw-text)',
                    fontFamily: "'Outfit', sans-serif",
                    outline: 'none',
                    transition: 'border-color 200ms ease',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--rw-gold)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--rw-border)'; }}
                />
                <button type="submit" className="rw-btn-primary justify-center">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", fontSize: '0.8125rem' }}
        >
          <p>© {year} RoyalWatches. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/terms"
              style={{ color: 'var(--rw-muted)', textDecoration: 'none' }}
              onMouseOver={e => { e.currentTarget.style.color = 'var(--rw-text)'; }}
              onMouseOut={e => { e.currentTarget.style.color = 'var(--rw-muted)'; }}
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              style={{ color: 'var(--rw-muted)', textDecoration: 'none' }}
              onMouseOver={e => { e.currentTarget.style.color = 'var(--rw-text)'; }}
              onMouseOut={e => { e.currentTarget.style.color = 'var(--rw-muted)'; }}
            >
              Terms
            </Link>
            <Link
              to="/delivery"
              style={{ color: 'var(--rw-muted)', textDecoration: 'none' }}
              onMouseOver={e => { e.currentTarget.style.color = 'var(--rw-text)'; }}
              onMouseOut={e => { e.currentTarget.style.color = 'var(--rw-muted)'; }}
            >
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
