import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CloseIcon, SearchIcon } from './Icons';
import { useStore } from '../store/useStore';
import { products } from '../data/products';
import { Product } from '../types';
import { useScrollLock } from '../hooks/useScrollLock';

export default function SearchOverlay() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchOpen = useStore(s => s.setSearchOpen);

  useScrollLock(true);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      const q = query.toLowerCase();
      const matches = products.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      ).slice(0, 6);
      setResults(matches);
    } else {
      setResults([]);
    }
  }, [query]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] bg-charcoal/60 backdrop-blur-sm"
      onClick={() => setSearchOpen(false)}
    >
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-ivory"
        onClick={e => e.stopPropagation()}
      >
        <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl">Search</h2>
            <button onClick={() => setSearchOpen(false)} className="p-1 text-charcoal hover:text-gold transition-colors" aria-label="Close search">
              <CloseIcon size={22} />
            </button>
          </div>

          <div className="relative">
            <SearchIcon size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-warm-gray" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search for rings, necklaces, bracelets..."
              className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-charcoal/20 focus:border-gold text-base outline-none transition-colors placeholder:text-warm-gray/60"
              aria-label="Search products"
            />
          </div>

          {results.length > 0 && (
            <div className="mt-6 space-y-4 max-h-[50vh] overflow-y-auto">
              {results.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center gap-4 p-3 hover:bg-beige/50 rounded transition-colors group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-14 object-cover bg-beige"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-[0.1em] uppercase text-warm-gray">{product.category}</p>
                    <h4 className="font-serif text-sm font-medium text-charcoal group-hover:text-gold transition-colors truncate">
                      {product.name}
                    </h4>
                  </div>
                  <span className="text-sm font-medium">{formatPrice(product.price)}</span>
                </Link>
              ))}
            </div>
          )}

          {query.length > 1 && results.length === 0 && (
            <p className="mt-8 text-center text-sm text-warm-gray">
              No results found for "{query}"
            </p>
          )}

          {query.length <= 1 && (
            <div className="mt-8">
              <p className="text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Gold Ring', 'Diamond', 'Pearl Necklace', 'Hoop Earrings', 'Bracelet'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 text-xs border border-charcoal/15 hover:border-gold hover:text-gold transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
