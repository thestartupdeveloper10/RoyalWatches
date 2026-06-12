import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "I had a fantastic experience shopping here. The watch I purchased exceeded my expectations in both quality and design. Highly recommend!",
    name: "Alex Johnson",
    title: "Verified Customer",
    avatar: "https://cdn.pixabay.com/photo/2022/05/21/06/52/standup-paddleboarding-7210815_960_720.jpg",
  },
  {
    quote: "Exceptional quality and customer service. I love the design of my new watch. Will definitely be coming back for more!",
    name: "Max Davis",
    title: "Loyal Patron",
    avatar: "https://cdn.pixabay.com/photo/2018/10/15/16/16/man-3749344_960_720.jpg",
  },
  {
    quote: "Fantastic selection and superb craftsmanship. The buying experience was smooth, and I am thrilled with my purchase.",
    name: "Michael Brown",
    title: "Happy Client",
    avatar: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",
  },
  {
    quote: "The quality of the watch is second to none. The customer service was also outstanding. I will definitely recommend this store to my friends.",
    name: "Sarah Wilson",
    title: "Delighted Shopper",
    avatar: "https://cdn.pixabay.com/photo/2023/07/30/09/12/red-hair-girl-8158373_960_720.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="rw-container" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
      {/* Section header */}
      <motion.div
        className="flex flex-col gap-2 mb-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <span className="rw-section-label">Testimonials</span>
        <h2
          className="font-display font-light"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--rw-text)' }}
        >
          What Our Customers Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            className="flex flex-col"
            style={{
              backgroundColor: 'var(--rw-surface)',
              border: '1px solid var(--rw-border)',
              borderRadius: '1rem',
              padding: '1.75rem',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Quote mark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-6 h-6 mb-4"
              style={{ color: 'var(--rw-gold)', opacity: 0.6 }}
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z" />
            </svg>

            <p
              className="flex-1 italic leading-relaxed mb-6"
              style={{
                color: 'var(--rw-text)',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.0625rem',
                fontWeight: 400,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--rw-border)' }}>
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                style={{ outline: '1px solid var(--rw-border)' }}
              />
              <div>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'var(--rw-text)', fontFamily: "'Outfit', sans-serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: 'var(--rw-gold)', fontFamily: "'Outfit', sans-serif" }}
                >
                  {t.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
