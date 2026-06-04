import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CloseIcon } from './Icons';
import { useStore } from '../store/useStore';
import Logo from './Logo';

const menuLinks = [
  { label: 'All Collections', href: '/collections' },
  { label: 'Rings', href: '/collections?category=rings' },
  { label: 'Necklaces', href: '/collections?category=necklaces' },
  { label: 'Bracelets', href: '/collections?category=bracelets' },
  { label: 'Earrings', href: '/collections?category=earrings' },
];

const secondaryLinks = [
  { label: 'About', href: '/about' },
  { label: 'Wishlist', href: '/wishlist' },
];

export default function MobileMenu() {
  const setMenuOpen = useStore(s => s.setMenuOpen);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm lg:hidden"
      onClick={() => setMenuOpen(false)}
    >
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-ivory flex flex-col"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10">
          <Logo />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1 text-charcoal hover:text-gold transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <nav className="flex-1 px-6 py-8 overflow-y-auto">
          <div className="space-y-1">
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-serif text-2xl text-charcoal hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-charcoal/10 space-y-1">
            {secondaryLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-sm tracking-wide text-warm-gray hover:text-charcoal transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        <div className="px-6 py-6 border-t border-charcoal/10">
          <p className="text-[10px] tracking-[0.15em] uppercase text-warm-gray text-center">
            Free shipping on orders over $500
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
