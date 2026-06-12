/* eslint-disable react/prop-types */
import Single_product from './Single_product';
import { publicRequest } from '../service/requestMethods';
import { useState, useEffect, useRef } from 'react';
import Single_Product_Skeleton from './Single_Product_Skeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

const PER_PAGE = 12;

function getPageRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = [1];

  if (current > 3) pages.push('…');

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push('…');

  pages.push(total);

  return pages;
}

function Pagination({ page, totalPages, onPage, topRef }) {
  if (totalPages <= 1) return null;

  const range = getPageRange(page, totalPages);

  const go = p => {
    onPage(p);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex items-center justify-center gap-1.5 mt-12 flex-wrap">
      {/* Prev */}
      <motion.button
        onClick={() => go(page - 1)}
        disabled={page === 1}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium"
        style={{
          fontFamily: "'Outfit', sans-serif",
          backgroundColor: 'var(--rw-elevated)',
          border: '1px solid var(--rw-border)',
          color: page === 1 ? 'var(--rw-border)' : 'var(--rw-text)',
          cursor: page === 1 ? 'not-allowed' : 'pointer',
          opacity: page === 1 ? 0.4 : 1,
          transition: 'opacity 150ms ease',
        }}
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Prev</span>
      </motion.button>

      {/* Page numbers */}
      {range.map((p, i) =>
        p === '…' ? (
          <span
            key={`ellipsis-${i}`}
            className="flex items-end pb-0.5 px-1 text-sm select-none"
            style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
          >
            …
          </span>
        ) : (
          <motion.button
            key={p}
            onClick={() => go(p)}
            whileTap={{ scale: 0.92 }}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontVariantNumeric: 'tabular-nums',
              backgroundColor: p === page ? 'var(--rw-gold)' : 'var(--rw-elevated)',
              color: p === page ? '#fff' : 'var(--rw-text)',
              border: `1px solid ${p === page ? 'var(--rw-gold)' : 'var(--rw-border)'}`,
              cursor: 'pointer',
              transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease',
            }}
          >
            {p}
          </motion.button>
        )
      )}

      {/* Next */}
      <motion.button
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium"
        style={{
          fontFamily: "'Outfit', sans-serif",
          backgroundColor: 'var(--rw-elevated)',
          border: '1px solid var(--rw-border)',
          color: page === totalPages ? 'var(--rw-border)' : 'var(--rw-text)',
          cursor: page === totalPages ? 'not-allowed' : 'pointer',
          opacity: page === totalPages ? 0.4 : 1,
          transition: 'opacity 150ms ease',
        }}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </motion.button>
    </div>
  );
}

function Products({ cat, filters, sort, searchTerm }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [page, setPage] = useState(1);
  const gridRef = useRef(null);

  // Fetch on category change
  useEffect(() => {
    setLoading(true);
    setFetchError(false);
    publicRequest.get(cat ? `/products?category=${cat}` : '/products')
      .then(res => setProducts(res.data))
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false));
  }, [cat]);

  // Filter
  useEffect(() => {
    let temp = products;
    if (searchTerm) {
      temp = temp.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    temp = temp.filter(item =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return Array.isArray(item[key]) ? item[key].includes(value) : item[key] === value;
      })
    );
    setFilteredProducts(temp);
  }, [products, filters, searchTerm]);

  // Sort
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts(prev => [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } else if (sort === 'asc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  // Reset to page 1 whenever anything that changes the result set changes
  useEffect(() => {
    setPage(1);
  }, [cat, filters, sort, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / PER_PAGE);
  const pageItems = filteredProducts.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const start = (page - 1) * PER_PAGE + 1;
  const end = Math.min(page * PER_PAGE, filteredProducts.length);

  if (fetchError) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", fontSize: '0.9375rem' }}>
          Failed to load products.
        </p>
        <button onClick={() => window.location.reload()} className="rw-btn-ghost">
          <RefreshCw className="w-3.5 h-3.5" />
          Try again
        </button>
      </div>
    );
  }

  return (
    <div ref={gridRef}>
      {/* Result count */}
      {!loading && filteredProducts.length > 0 && (
        <p
          className="text-sm mb-6"
          style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
        >
          Showing{' '}
          <span style={{ color: 'var(--rw-text)', fontVariantNumeric: 'tabular-nums' }}>
            {start}–{end}
          </span>
          {' '}of{' '}
          <span style={{ color: 'var(--rw-text)', fontVariantNumeric: 'tabular-nums' }}>
            {filteredProducts.length}
          </span>
          {' '}results
        </p>
      )}

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {loading
            ? Array.from({ length: PER_PAGE }, (_, i) => <Single_Product_Skeleton key={i} />)
            : pageItems.map((product, i) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.035, 0.28), ease: [0.23, 1, 0.32, 1] }}
              >
                <Single_product product={product} />
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {!loading && filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--rw-elevated)' }}
          >
            <svg className="w-5 h-5" style={{ color: 'var(--rw-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="font-medium" style={{ color: 'var(--rw-text)', fontFamily: "'Outfit', sans-serif" }}>
            No products found
          </p>
          <p className="text-sm" style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}>
            Try adjusting your filters or search term
          </p>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        page={page}
        totalPages={totalPages}
        onPage={setPage}
        topRef={gridRef}
      />
    </div>
  );
}

export default Products;
