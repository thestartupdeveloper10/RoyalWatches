import { motion } from 'framer-motion';
import Banner from './Banner';
import Collection_item from './Collection_item';

const ITEMS = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/262484/pexels-photo-262484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: "Women's Collection",
    des: 'Unveil our stunning selection of premium women\'s timepieces',
    action: 'Shop Collection',
    cat: 'Women',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/691640/pexels-photo-691640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: "Men's Collection",
    des: 'Experience the allure of our luxurious men\'s watch selection',
    action: 'Shop Collection',
    cat: 'Men',
  },
];

const Collections = () => (
  <section className="rw-container" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
    {/* Perks strip */}
    <Banner />

    {/* Section heading */}
    <motion.div
      className="mt-16 mb-10 flex flex-col gap-2"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <span className="rw-section-label">Shop by Category</span>
      <h2
        className="font-display font-light"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--rw-text)' }}
      >
        Curated Collections
      </h2>
    </motion.div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {ITEMS.map((item, i) => (
        <Collection_item item={item} key={item.id} index={i} />
      ))}
    </div>
  </section>
);

export default Collections;
