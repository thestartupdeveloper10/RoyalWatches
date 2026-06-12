import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Blog = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const api = import.meta.env.VITE_NEWS_NY_API;
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q={watches,rolex}&api-key=${api}`)
      .then(r => r.json())
      .then(result => {
        if (result.response?.docs && Array.isArray(result.response.docs)) {
          setBlogs(result.response.docs);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id, api]);

  if (!loading && blogs.length === 0) return null;

  return (
    <section className="rw-container" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
      {/* Section header */}
      <motion.div
        className="flex items-end justify-between mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="flex flex-col gap-2">
          <span className="rw-section-label">Editorial</span>
          <h2
            className="font-display font-light"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--rw-text)' }}
          >
            The Journal
          </h2>
        </div>
        <Link
          to="/blogs"
          className="hidden md:inline-flex items-center gap-2 rw-section-label transition-colors"
          style={{ color: 'var(--rw-muted)', fontSize: '0.6875rem' }}
        >
          All Articles
          <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading
          ? Array(3).fill(0).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden"
              style={{
                backgroundColor: 'var(--rw-surface)',
                border: '1px solid var(--rw-border)',
                borderRadius: '1rem',
              }}
            >
              <div className="animate-pulse" style={{ aspectRatio: '16/10', backgroundColor: 'var(--rw-elevated)' }} />
              <div className="p-5 flex flex-col gap-2">
                <div className="h-4 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '90%' }} />
                <div className="h-3 rounded animate-pulse" style={{ backgroundColor: 'var(--rw-elevated)', width: '70%' }} />
              </div>
            </div>
          ))
          : blogs.slice(0, 3).map((blog, i) => {
            const imgUrl = blog.multimedia?.length
              ? `https://static01.nyt.com/${blog.multimedia[0].url}`
              : null;

            return (
              <motion.a
                key={blog._id}
                href={blog.web_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden block"
                style={{
                  backgroundColor: 'var(--rw-surface)',
                  border: '1px solid var(--rw-border)',
                  borderRadius: '1rem',
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -4 }}
              >
                {imgUrl && (
                  <div className="overflow-hidden" style={{ aspectRatio: '16/10', backgroundColor: 'var(--rw-elevated)' }}>
                    <img
                      src={imgUrl}
                      alt={blog.headline.main}
                      className="w-full h-full object-cover"
                      style={{
                        transform: 'scale(1)',
                        transition: 'transform 700ms cubic-bezier(0.23, 1, 0.32, 1)',
                      }}
                      onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                      onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3
                    className="font-display font-light leading-snug mb-2 capitalize"
                    style={{
                      fontSize: '1.0625rem',
                      color: 'var(--rw-text)',
                      transition: 'color 200ms ease',
                    }}
                  >
                    {blog.headline.main}
                  </h3>
                  <p
                    className="text-xs line-clamp-2 mb-4 capitalize"
                    style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
                  >
                    {blog.snippet}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase"
                    style={{ color: 'var(--rw-gold)', fontFamily: "'Outfit', sans-serif" }}
                  >
                    Read Article
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            );
          })}
      </div>

      {/* Mobile view all */}
      <div className="flex justify-center mt-8 md:hidden">
        <Link to="/blogs">
          <button className="rw-btn-ghost">
            All Articles
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
