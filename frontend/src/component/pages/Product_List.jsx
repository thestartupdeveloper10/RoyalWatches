import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Products from '../Products';

const CATEGORY_HERO = {
  Women: {
    img: 'https://images.pexels.com/photos/262484/pexels-photo-262484.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1',
    headline: "Women's Watches",
    tagline: 'Precision crafted for the modern woman',
  },
  Men: {
    img: 'https://images.pexels.com/photos/691640/pexels-photo-691640.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1',
    headline: "Men's Watches",
    tagline: 'Timepieces of distinction and character',
  },
  default: {
    img: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1',
    headline: 'All Watches',
    tagline: 'The complete RoyalWatches collection',
  },
};

const COLORS = ['white', 'black', 'brown', 'red', 'blue', 'yellow', 'green', 'silver', 'gold', 'gray'];
const SIZES = ['S', 'M', 'L', 'XL'];

function FilterSelect({ label, name, options, value, onChange, onClear }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const active = value && value !== '__placeholder__';

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150"
        style={{
          fontFamily: "'Outfit', sans-serif",
          backgroundColor: active ? 'var(--rw-gold)' : 'var(--rw-elevated)',
          color: active ? '#fff' : 'var(--rw-text)',
          border: `1px solid ${active ? 'var(--rw-gold)' : 'var(--rw-border)'}`,
          letterSpacing: '0.02em',
        }}
      >
        {active ? value : label}
        {active ? (
          <X
            className="w-3 h-3 opacity-80"
            onClick={e => { e.stopPropagation(); onClear(); }}
          />
        ) : (
          <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-full left-0 mt-1.5 z-30 overflow-hidden"
            style={{
              backgroundColor: 'var(--rw-surface)',
              border: '1px solid var(--rw-border)',
              borderRadius: '0.75rem',
              minWidth: '140px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            }}
          >
            {options.map(opt => (
              <button
                key={opt}
                onClick={() => { onChange(name, opt); setOpen(false); }}
                className="w-full text-left px-4 py-2.5 text-sm capitalize transition-colors duration-100"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: value === opt ? 'var(--rw-gold)' : 'var(--rw-text)',
                  backgroundColor: value === opt ? 'var(--rw-elevated)' : 'transparent',
                }}
                onMouseOver={e => { if (value !== opt) e.currentTarget.style.backgroundColor = 'var(--rw-elevated)'; }}
                onMouseOut={e => { if (value !== opt) e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'asc', label: 'Price: Low to High' },
  { value: 'desc', label: 'Price: High to Low' },
];

function SortSelect({ sort, setSort }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = SORT_OPTIONS.find(o => o.value === sort) || SORT_OPTIONS[0];

  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium"
        style={{
          fontFamily: "'Outfit', sans-serif",
          backgroundColor: 'var(--rw-elevated)',
          color: 'var(--rw-text)',
          border: '1px solid var(--rw-border)',
        }}
      >
        {current.label}
        <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-full right-0 mt-1.5 z-30 overflow-hidden"
            style={{
              backgroundColor: 'var(--rw-surface)',
              border: '1px solid var(--rw-border)',
              borderRadius: '0.75rem',
              minWidth: '180px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            }}
          >
            {SORT_OPTIONS.map(opt => (
              <button
                key={opt.value}
                onClick={() => { setSort(opt.value); setOpen(false); }}
                className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-100"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: sort === opt.value ? 'var(--rw-gold)' : 'var(--rw-text)',
                  backgroundColor: sort === opt.value ? 'var(--rw-elevated)' : 'transparent',
                }}
                onMouseOver={e => { if (sort !== opt.value) e.currentTarget.style.backgroundColor = 'var(--rw-elevated)'; }}
                onMouseOut={e => { if (sort !== opt.value) e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Product_List = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const hero = CATEGORY_HERO[cat] || CATEGORY_HERO.default;

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilter = name => {
    setFilters(prev => ({ ...prev, [name]: '' }));
  };

  const clearAllFilters = () => {
    setFilters({});
    setSearchTerm('');
    setSort('newest');
  };

  return (
    <div style={{ backgroundColor: 'var(--rw-bg)', minHeight: '100vh' }}>
      <NavBar />

      {/* ─── Category Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '42vh', minHeight: '280px' }}>
        <img
          src={hero.img}
          alt={hero.headline}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(8,8,8,0.35) 0%, rgba(8,8,8,0.65) 100%)' }}
        />
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <span
              className="rw-section-label"
              style={{ color: 'rgba(201,169,110,0.9)' }}
            >
              {cat ? `${cat}'s Collection` : 'Full Collection'}
            </span>
            <h1
              className="font-display font-light text-white"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
              }}
            >
              {hero.headline}
            </h1>
            <p
              className="font-light mt-1"
              style={{
                color: 'rgba(240,235,224,0.6)',
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              }}
            >
              {hero.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter / Sort Bar ─────────────────────────────── */}
      <div
        className="sticky top-0 z-20"
        style={{
          backgroundColor: 'var(--rw-bg)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--rw-border)',
        }}
      >
        <div className="rw-container py-4">
          {/* Desktop controls */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg flex-1 min-w-[180px] max-w-xs"
              style={{
                backgroundColor: 'var(--rw-elevated)',
                border: '1px solid var(--rw-border)',
              }}
            >
              <Search className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--rw-muted)' }} />
              <input
                type="text"
                placeholder="Search watches…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="bg-transparent flex-1 text-sm outline-none min-w-0"
                style={{
                  color: 'var(--rw-text)',
                  fontFamily: "'Outfit', sans-serif",
                }}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} style={{ color: 'var(--rw-muted)' }}>
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Filter chips */}
            <div className="hidden md:flex items-center gap-2">
              <FilterSelect
                label="Color"
                name="color"
                options={COLORS}
                value={filters.color}
                onChange={handleFilterChange}
                onClear={() => clearFilter('color')}
              />
              <FilterSelect
                label="Size"
                name="size"
                options={SIZES}
                value={filters.size}
                onChange={handleFilterChange}
                onClear={() => clearFilter('size')}
              />
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setFiltersOpen(o => !o)}
              className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium"
              style={{
                backgroundColor: activeFilterCount ? 'var(--rw-gold)' : 'var(--rw-elevated)',
                color: activeFilterCount ? '#fff' : 'var(--rw-text)',
                border: '1px solid var(--rw-border)',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
              {activeFilterCount > 0 && (
                <span
                  className="w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold"
                  style={{ backgroundColor: '#fff', color: 'var(--rw-gold)' }}
                >
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Divider */}
            <div className="hidden md:block flex-1" />

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span
                className="text-xs hidden md:block"
                style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
              >
                Sort:
              </span>
              <SortSelect sort={sort} setSort={setSort} />
            </div>

            {/* Clear all (if active) */}
            {(activeFilterCount > 0 || searchTerm) && (
              <button
                onClick={clearAllFilters}
                className="text-xs flex items-center gap-1"
                style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X className="w-3 h-3" />
                Clear all
              </button>
            )}
          </div>

          {/* Mobile filter panel */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-4 flex flex-wrap gap-2">
                  <FilterSelect
                    label="Color"
                    name="color"
                    options={COLORS}
                    value={filters.color}
                    onChange={handleFilterChange}
                    onClear={() => clearFilter('color')}
                  />
                  <FilterSelect
                    label="Size"
                    name="size"
                    options={SIZES}
                    value={filters.size}
                    onChange={handleFilterChange}
                    onClear={() => clearFilter('size')}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ─── Product Grid ──────────────────────────────────── */}
      <main className="rw-container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <Products
          cat={cat}
          filters={filters}
          sort={sort}
          searchTerm={searchTerm}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Product_List;
