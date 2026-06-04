import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { SearchIcon, BagIcon, HeartIcon, MenuIcon } from './Icons';
import { useStore } from '../store/useStore';
import { useScrollLock } from '../hooks/useScrollLock';
import SearchOverlay from './SearchOverlay';
import CartDrawer from './CartDrawer';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Rings', href: '/collections?category=rings' },
  { label: 'Necklaces', href: '/collections?category=necklaces' },
  { label: 'Bracelets', href: '/collections?category=bracelets' },
  { label: 'Earrings', href: '/collections?category=earrings' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const { isMenuOpen, toggleMenu, setMenuOpen, isCartOpen, toggleCart, cartCount, isSearchOpen, toggleSearch, wishlist } = useStore();

  useScrollLock(isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [location.pathname, setMenuOpen]);

  const showDark = scrolled || !isHome;
  const count = cartCount();

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showDark
            ? 'bg-ivory/95 backdrop-blur-md border-b border-charcoal/5 shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left - Menu + Nav */}
            <div className="flex items-center gap-8">
              <button
                onClick={toggleMenu}
                className="lg:hidden p-1"
                aria-label="Toggle menu"
              >
                <MenuIcon size={22} className={showDark ? 'text-charcoal' : 'text-white'} />
              </button>

              <div className="hidden lg:flex items-center gap-7">
                {navLinks.map(link => (
                  <div
                    key={link.label}
                    onMouseEnter={() => link.label === 'Collections' && setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                    className="relative"
                  >
                    <Link
                      to={link.href}
                      className={`text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 hover:opacity-70 ${
                        showDark ? 'text-charcoal' : 'text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Center - Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2" aria-label="Luna Bijoux Home">
              <Logo color={showDark ? '#1C1C1C' : '#FFFFFF'} />
            </Link>

            {/* Right - Actions */}
            <div className="flex items-center gap-4 md:gap-5">
              <button
                onClick={toggleSearch}
                className={`p-1 transition-colors duration-300 ${showDark ? 'text-charcoal' : 'text-white'}`}
                aria-label="Search"
              >
                <SearchIcon size={19} />
              </button>

              <Link
                to="/wishlist"
                className={`hidden md:flex p-1 relative transition-colors duration-300 ${showDark ? 'text-charcoal' : 'text-white'}`}
                aria-label={`Wishlist (${wishlist.length} items)`}
              >
                <HeartIcon size={19} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[9px] flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <button
                onClick={toggleCart}
                className={`p-1 relative transition-colors duration-300 ${showDark ? 'text-charcoal' : 'text-white'}`}
                aria-label={`Shopping bag (${count} items)`}
              >
                <BagIcon size={19} />
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[9px] flex items-center justify-center rounded-full"
                  >
                    {count}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block bg-ivory border-t border-charcoal/5 overflow-hidden"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <div className="mx-auto max-w-[1440px] px-12 py-10">
                <div className="grid grid-cols-4 gap-10">
                  {[
                    { title: 'Rings', desc: 'Solitaires, bands, and statement rings', href: '/collections?category=rings' },
                    { title: 'Necklaces', desc: 'Pendants, chains, and chokers', href: '/collections?category=necklaces' },
                    { title: 'Bracelets', desc: 'Bangles, cuffs, and chain bracelets', href: '/collections?category=bracelets' },
                    { title: 'Earrings', desc: 'Studs, hoops, and drops', href: '/collections?category=earrings' },
                  ].map(cat => (
                    <Link key={cat.title} to={cat.href} className="group">
                      <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-gold transition-colors">
                        {cat.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-warm-gray">{cat.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {isSearchOpen && <SearchOverlay />}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && <CartDrawer />}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && <MobileMenu />}
      </AnimatePresence>
    </>
  );
}
