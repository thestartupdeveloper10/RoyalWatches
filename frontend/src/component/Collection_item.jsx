/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Collection_item({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link
        to={`/products/${item.cat}`}
        className="group relative block overflow-hidden"
        style={{
          borderRadius: '1.25rem',
          aspectRatio: '4/5',
        }}
      >
        {/* Image */}
        <img
          src={item.img}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: 'scale(1)',
            transition: 'transform 700ms cubic-bezier(0.23, 1, 0.32, 1)',
          }}
          onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.2) 50%, rgba(8,8,8,0.0) 100%)',
            transition: 'opacity 400ms ease',
          }}
        />

        {/* Content */}
        <div
          className="absolute bottom-0 left-0 right-0 p-7 flex flex-col gap-2"
          style={{
            transform: 'translateY(0)',
            transition: 'transform 500ms cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          <h3
            className="font-display font-light text-white leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}
          >
            {item.title}
          </h3>
          <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Outfit', sans-serif" }}>
            {item.des}
          </p>
          <span
            className="inline-flex items-center gap-1.5 mt-1 font-medium tracking-widest uppercase transition-colors duration-200"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.6875rem',
              color: 'var(--rw-gold)',
            }}
          >
            {item.action}
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default Collection_item;
