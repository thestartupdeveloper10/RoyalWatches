import Hero_Products from '../Hero_Products';
import Collections from '../Collections';
import Discover_Front from '../Discover_Front';
import Blog from '../Blog';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Hero_slider from '../Hero_slider';
import Faq from '../Faq';
import Testimonial from '../Testimonial';
import Gift_Card from '../Gift_Card';

const DESCRIPTIONS = [
  'From intricate complications to avant-garde designs, watchmakers unveil their masterpieces — captivating enthusiasts and setting the tempo for the luxury timepiece industry.',
  'These wrist-bound masterpieces blend precision mechanics with exquisite craftsmanship, often featuring rare materials and limited production runs. Each timepiece tells a unique story of heritage, innovation, and uncompromising quality.',
];

const Hero = () => (
  <>
    <NavBar />
    {/* Hero occupies full viewport — no top offset needed */}
    <Hero_slider />

    <Collections />

    <Hero_Products title="New Arrivals" query="new=true" />

    <Discover_Front title="Watches & Wonders" desc={DESCRIPTIONS[0]} />

    <Gift_Card />

    <Discover_Front title="The Ticking Treasures" desc={DESCRIPTIONS[1]} />

    <Hero_Products title="Best Sellers" query="popular=true" />

    <Blog />

    <Faq />

    <Testimonial />

    <Footer />
  </>
);

export default Hero;
