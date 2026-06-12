import { motion } from 'framer-motion';
import { Truck, Store, CreditCard } from 'lucide-react';

const perks = [
  { icon: Truck, label: 'Free Express Delivery', detail: '7 days a week, including Sunday' },
  { icon: Store, label: 'Click & Collect', detail: 'From over 100 showrooms nationwide' },
  { icon: CreditCard, label: 'Interest-Free Credit', detail: 'Up to 3 years — T&C apply' },
];

const Banner = () => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 overflow-hidden"
    style={{
      border: '1px solid var(--rw-border)',
      borderRadius: '1rem',
    }}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
  >
    {perks.map(({ icon: Icon, label, detail }, i) => (
      <div
        key={i}
        className="flex items-center gap-4 px-6 py-5"
        style={{
          borderRight: i < 2 ? '1px solid var(--rw-border)' : 'none',
          borderBottom: '0',
        }}
      >
        <div
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--rw-elevated)' }}
        >
          <Icon className="w-4 h-4" style={{ color: 'var(--rw-gold)' }} />
        </div>
        <div>
          <p
            className="font-medium leading-tight"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.8125rem',
              color: 'var(--rw-text)',
            }}
          >
            {label}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif" }}
          >
            {detail}
          </p>
        </div>
      </div>
    ))}
  </motion.div>
);

export default Banner;
