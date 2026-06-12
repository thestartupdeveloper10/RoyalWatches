import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I choose the right size for a luxury watch?',
    a: 'Choosing the right watch size depends on your wrist size and personal preference. Measure your wrist circumference and compare it with the watch case diameter. Generally, a watch with a case diameter of 38–42mm fits well on a smaller wrist, while 44mm or larger is ideal for a larger wrist.',
  },
  {
    q: 'How often should I service my luxury watch?',
    a: "It's recommended to service your luxury watch every 3–5 years to maintain its performance and longevity. Regular servicing includes checking the movement, cleaning, and replacing worn-out parts. Refer to the manufacturer's guidelines for specific recommendations.",
  },
  {
    q: 'Can I wear my luxury watch while swimming?',
    a: "Many luxury watches are designed to be water-resistant, but the level varies. Check the watch's water resistance rating before swimming. A rating of 50 metres or more is generally suitable for swimming, but not diving.",
  },
  {
    q: 'What is the difference between quartz and mechanical watches?',
    a: 'Quartz watches are powered by a battery and are known for their accuracy and low maintenance. Mechanical watches, either manual or automatic, are powered by a winding mechanism and are valued for their craftsmanship and tradition.',
  },
  {
    q: 'How can I verify the authenticity of a luxury watch?',
    a: 'Check the weight, logo, serial numbers, and craftsmanship. Buying from authorised dealers or reputable sources ensures authenticity. Have the watch inspected by a professional watchmaker if you have any doubts.',
  },
  {
    q: 'What is the warranty on your watches?',
    a: 'Our luxury watches typically come with a manufacturer\'s warranty ranging from 2 to 5 years, depending on the brand and model. The warranty covers defects in materials and workmanship.',
  },
];

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      style={{ borderBottom: '1px solid var(--rw-border)' }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span
          className="font-medium pr-4"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.9375rem',
            color: open ? 'var(--rw-gold)' : 'var(--rw-text)',
            transition: 'color 200ms ease',
          }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full"
          style={{
            border: '1px solid var(--rw-border)',
            color: 'var(--rw-muted)',
          }}
        >
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="pb-5 text-sm leading-relaxed"
              style={{
                color: 'var(--rw-muted)',
                fontFamily: "'Outfit', sans-serif",
                maxWidth: '640px',
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const Faq = () => (
  <section className="rw-container" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
    {/* Section header */}
    <motion.div
      className="flex flex-col gap-2 mb-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <span className="rw-section-label">Support</span>
      <h2
        className="font-display font-light"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--rw-text)' }}
      >
        Frequently Asked Questions
      </h2>
      <p
        className="text-sm mt-1"
        style={{ color: 'var(--rw-muted)', fontFamily: "'Outfit', sans-serif", maxWidth: '500px' }}
      >
        Everything you need to know about our timepieces. Can't find an answer?{' '}
        <a
          href="/contact"
          style={{ color: 'var(--rw-gold)', textDecoration: 'none' }}
        >
          Contact us.
        </a>
      </p>
    </motion.div>

    <div
      style={{
        borderTop: '1px solid var(--rw-border)',
        maxWidth: '780px',
      }}
    >
      {FAQS.map((item, i) => (
        <FaqItem key={item.q} item={item} index={i} />
      ))}
    </div>
  </section>
);

export default Faq;
