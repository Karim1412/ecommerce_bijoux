import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';
import { ArrowRight, TruckIcon, ShieldIcon, GiftIcon } from '../components/Icons';
import { getBestSellers, getFeaturedProducts } from '../data/products';
import { HERO_IMAGES, COLLECTION_IMAGES } from '../data/products';

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] max-h-[1100px] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/70 z-10" />
        <img
          src={HERO_IMAGES[0]}
          alt="Luna Bijoux luxury jewelry editorial"
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center px-5 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-gold mb-5"
        >
          The New Collection
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory leading-[0.95] tracking-tight"
          >
            Timeless
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory leading-[0.95] tracking-tight italic"
          >
            Elegance
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-6 md:mt-8 text-sm md:text-base text-ivory/70 max-w-md leading-relaxed"
        >
          Discover jewelry that transcends time. Handcrafted with intention, 
          designed to become part of your story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/collections"
            className="group px-10 py-4 bg-ivory text-charcoal text-[11px] tracking-[0.15em] uppercase flex items-center gap-2 hover:bg-gold hover:text-ivory transition-all duration-300"
          >
            Explore Collection
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="px-10 py-4 border border-ivory/30 text-ivory text-[11px] tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase text-ivory/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-6 bg-ivory/30"
        />
      </motion.div>
    </section>
  );
}

function FeaturesBar() {
  const features = [
    { icon: <TruckIcon size={18} />, text: 'Complimentary Shipping' },
    { icon: <ShieldIcon size={18} />, text: 'Lifetime Warranty' },
    { icon: <GiftIcon size={18} />, text: 'Luxury Packaging' },
  ];

  return (
    <section className="bg-beige py-5 border-y border-charcoal/5">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-charcoal/70"
            >
              {f.icon}
              <span className="text-[11px] tracking-[0.1em] uppercase">{f.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCollections() {
  const collections = [
    {
      title: 'Celestial',
      subtitle: 'Inspired by the stars',
      description: 'A collection that captures the mystery and romance of the night sky. Delicate celestial motifs rendered in precious metals.',
      image: COLLECTION_IMAGES[0],
      link: '/collections?category=rings',
    },
    {
      title: 'Heritage',
      subtitle: 'Timeless classics',
      description: 'Pieces rooted in tradition, designed for the modern woman. Where Old-World artistry meets contemporary silhouettes.',
      image: COLLECTION_IMAGES[1],
      link: '/collections?category=necklaces',
    },
    {
      title: 'Artisan',
      subtitle: 'Handcrafted beauty',
      description: 'Where meticulous craftsmanship meets bold creative vision. Every texture, every curve shaped by hand.',
      image: COLLECTION_IMAGES[2],
      link: '/collections?category=bracelets',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Curated for You</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
            Featured Collections
          </h2>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {collections.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Link to={col.link} className="block relative overflow-hidden group aspect-[4/5] lg:aspect-[3/4]">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-500" />
                </Link>
              </div>
              <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
                <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3">{col.subtitle}</p>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-5">
                  {col.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed max-w-md mb-8">
                  {col.description}
                </p>
                <Link
                  to={col.link}
                  className="group inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-charcoal hover:text-gold transition-colors"
                >
                  Discover More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-light-gray">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Most Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal">Best Sellers</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/collections"
              className="group inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-charcoal hover:text-gold transition-colors"
            >
              View All
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent z-10" />
        <img
          src={HERO_IMAGES[2]}
          alt="Luxury jewelry editorial"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="relative z-20 h-full flex items-center">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Limited Edition</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-tight mb-5">
              The Art of <br /><em>Being Bold</em>
            </h2>
            <p className="text-sm text-ivory/60 leading-relaxed mb-8 max-w-sm">
              Statement pieces for those who dare to shine. Each creation is a testament 
              to the power of exceptional design.
            </p>
            <Link
              to="/collections"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Edit
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NewArrivals() {
  const featured = getFeaturedProducts().slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Just Arrived</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">New Arrivals</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} variant="editorial" />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-beige">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight">
              Crafted with <br />Purpose & <em>Passion</em>
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-warm-gray leading-relaxed">
                Founded in Paris in 2018, Luna Bijoux was born from a simple belief: that jewelry 
                should be as unique as the person wearing it. Our founder, Élise Moreau, left her 
                position at a prestigious fashion house to pursue a vision of accessible luxury—pieces 
                that carry the weight of fine craftsmanship without the pretension.
              </p>
              <p className="text-sm text-warm-gray leading-relaxed">
                Every Luna Bijoux creation begins with a sketch, evolves through the hands of our 
                master artisans, and arrives in a moment of joy. We source our materials ethically, 
                work with family-owned workshops, and believe that true luxury lies in the details 
                you can feel but cannot always see.
              </p>
            </div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-charcoal hover:text-gold transition-colors pt-2"
            >
              Read More
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden bg-charcoal/5">
                <img
                  src={COLLECTION_IMAGES[4]}
                  alt="Luna Bijoux craftsmanship"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-charcoal text-ivory">
                <p className="font-serif text-3xl font-light">7+</p>
                <p className="text-[10px] tracking-[0.1em] uppercase text-ivory/50 mt-1">Years of Excellence</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="p-5 bg-ivory">
                <p className="font-serif text-3xl font-light text-gold">5,000+</p>
                <p className="text-[10px] tracking-[0.1em] uppercase text-warm-gray mt-1">Happy Customers</p>
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-charcoal/5">
                <img
                  src={COLLECTION_IMAGES[5]}
                  alt="Luna Bijoux artisan workshop"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: 'Luna Bijoux has completely redefined what I expect from jewelry. Every piece feels like it was made specifically for me.',
      author: 'Isabelle Chen',
      title: 'Fashion Editor, Vogue',
      rating: 5,
    },
    {
      quote: 'The craftsmanship is extraordinary. You can feel the quality the moment you hold a Luna Bijoux piece in your hand.',
      author: 'Margaux Laurent',
      title: 'Style Consultant',
      rating: 5,
    },
    {
      quote: 'I have been collecting jewelry for twenty years, and Luna Bijoux stands out for their attention to detail and timeless design.',
      author: 'Dr. Amara Williams',
      title: 'Art Collector',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Client Love</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal">What They Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="text-center"
            >
              <StarRating rating={t.rating} size={14} className="justify-center mb-5" />
              <blockquote className="font-serif text-lg md:text-xl font-light text-charcoal leading-relaxed italic mb-6">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-xs font-medium tracking-wide text-charcoal">{t.author}</p>
                <p className="text-[10px] text-warm-gray mt-0.5">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Stay Connected</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory mb-4">
            Join the Inner Circle
          </h2>
          <p className="text-sm text-ivory/50 mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive offers, and the stories behind our creations.
          </p>

          <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-transparent border border-ivory/20 text-ivory text-sm placeholder:text-ivory/30 focus:border-gold outline-none transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-gold text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-[10px] text-ivory/25">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <FeaturesBar />
      <FeaturedCollections />
      <BestSellers />
      <EditorialBanner />
      <NewArrivals />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </PageTransition>
  );
}
