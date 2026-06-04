import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PageTransition from '../components/PageTransition';
import { ArrowRight } from '../components/Icons';
import { HERO_IMAGES } from '../data/products';

export default function AboutPage() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/40 z-10" />
        <img
          src={HERO_IMAGES[1]}
          alt="Luna Bijoux story"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory">
              Luna Bijoux
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Since 2018</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-8 leading-snug">
              Born from a belief that jewelry should be as unique as the soul wearing it
            </h2>
            <div className="space-y-5 text-sm text-warm-gray leading-relaxed">
              <p>
                Luna Bijoux was founded in Paris by Élise Moreau, a former design director at one of 
                France's most prestigious fashion houses. After a decade of creating for others, Élise 
                envisioned a brand that combined the exacting standards of haute joaillerie with the 
                accessibility and warmth she felt luxury jewelry was missing.
              </p>
              <p>
                The name "Luna Bijoux" draws from the moon—a celestial body that, like the best 
                jewelry, transforms the everyday into something luminous. Our crescent moon emblem 
                represents the idea that beauty doesn't require perfection; it requires character.
              </p>
              <p>
                Today, every Luna Bijoux piece is designed in our Paris atelier and brought to life 
                by a network of family-owned workshops across Europe. We source materials responsibly, 
                craft slowly, and believe that the most meaningful luxury is the kind you can pass down.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Image */}
      <section ref={parallaxRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
          <img
            src={HERO_IMAGES[3]}
            alt="Luna Bijoux craftsmanship"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-beige">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 lg:mb-20"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal">
              What We Believe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                number: '01',
                title: 'Artisan Craft',
                text: 'Every piece passes through the hands of skilled artisans who bring decades of expertise to their work. We never mass-produce—each creation receives individual attention.',
              },
              {
                number: '02',
                title: 'Ethical Sourcing',
                text: 'We trace every gemstone and metal to its origin. Our supply chain prioritizes responsible mining practices, fair labor, and environmental stewardship.',
              },
              {
                number: '03',
                title: 'Timeless Design',
                text: 'We design pieces meant to be worn for decades, not discarded after a season. Our aesthetic bridges contemporary minimalism with enduring classical forms.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="text-center"
              >
                <span className="font-serif text-4xl text-gold/30 block mb-4">{value.number}</span>
                <h3 className="font-serif text-xl text-charcoal mb-3">{value.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-charcoal text-center">
        <div className="mx-auto max-w-2xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory mb-5">
              Begin Your Story
            </h2>
            <p className="text-sm text-ivory/50 mb-8 max-w-md mx-auto">
              Explore our collection and discover pieces that will become part of your personal narrative.
            </p>
            <Link
              to="/collections"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-gold text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
