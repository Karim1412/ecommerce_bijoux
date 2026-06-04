import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import { FilterIcon, CloseIcon, ChevronDown } from '../components/Icons';
import { useStore } from '../store/useStore';
import { useFilteredProducts } from '../hooks/useFilteredProducts';
import { Category, SortOption } from '../types';

const categories: { value: Category; label: string }[] = [
  { value: 'rings', label: 'Rings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'bracelets', label: 'Bracelets' },
  { value: 'earrings', label: 'Earrings' },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function CollectionsPage() {
  const [searchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const {
    filters,
    toggleCategory,
    setPriceRange,
    setSortBy,
    resetFilters,
    setSearchQuery,
  } = useStore();

  const filteredProducts = useFilteredProducts();

  // Handle URL params
  useEffect(() => {
    const cat = searchParams.get('category') as Category | null;
    if (cat && categories.some(c => c.value === cat)) {
      resetFilters();
      toggleCategory(cat);
    }
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const activeFilterCount =
    filters.categories.length +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 10000 ? 1 : 0);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-beige">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3"
          >
            Our Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal"
          >
            {filters.categories.length === 1
              ? categories.find(c => c.value === filters.categories[0])?.label || 'All Jewelry'
              : 'All Jewelry'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm text-warm-gray"
          >
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </motion.p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-10 md:py-14 bg-ivory">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-charcoal hover:text-gold transition-colors"
            >
              <FilterIcon size={16} />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-gold text-ivory text-[9px] flex items-center justify-center rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-charcoal hover:text-gold transition-colors"
              >
                Sort by: {sortOptions.find(s => s.value === filters.sortBy)?.label}
                <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 top-full mt-2 w-52 bg-ivory border border-charcoal/10 shadow-lg z-30"
                  >
                    {sortOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setSortOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-xs transition-colors ${
                          filters.sortBy === opt.value
                            ? 'bg-beige text-gold'
                            : 'text-charcoal hover:bg-beige/50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-8 md:mb-10"
              >
                <div className="py-6 px-6 border border-charcoal/10 bg-light-gray">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-medium tracking-wide uppercase">Filters</h3>
                    <div className="flex items-center gap-4">
                      {activeFilterCount > 0 && (
                        <button
                          onClick={resetFilters}
                          className="text-[10px] tracking-wider uppercase text-warm-gray hover:text-gold transition-colors"
                        >
                          Clear All
                        </button>
                      )}
                      <button onClick={() => setFilterOpen(false)} className="text-charcoal hover:text-gold transition-colors">
                        <CloseIcon size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Categories */}
                    <div>
                      <h4 className="text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-3">Category</h4>
                      <div className="space-y-2">
                        {categories.map(cat => (
                          <button
                            key={cat.value}
                            onClick={() => toggleCategory(cat.value)}
                            className={`flex items-center gap-2.5 w-full text-left py-1 text-sm transition-colors ${
                              filters.categories.includes(cat.value)
                                ? 'text-gold'
                                : 'text-charcoal hover:text-gold'
                            }`}
                          >
                            <span
                              className={`w-4 h-4 border flex items-center justify-center transition-all ${
                                filters.categories.includes(cat.value)
                                  ? 'border-gold bg-gold'
                                  : 'border-charcoal/30'
                              }`}
                            >
                              {filters.categories.includes(cat.value) && (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </span>
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h4 className="text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-3">Price Range</h4>
                      <div className="space-y-2">
                        {[
                          { label: 'Under $500', range: [0, 500] as [number, number] },
                          { label: '$500 – $1,000', range: [500, 1000] as [number, number] },
                          { label: '$1,000 – $2,500', range: [1000, 2500] as [number, number] },
                          { label: '$2,500 – $5,000', range: [2500, 5000] as [number, number] },
                          { label: 'Over $5,000', range: [5000, 10000] as [number, number] },
                        ].map(pr => (
                          <button
                            key={pr.label}
                            onClick={() => setPriceRange(pr.range)}
                            className={`block w-full text-left py-1 text-sm transition-colors ${
                              filters.priceRange[0] === pr.range[0] && filters.priceRange[1] === pr.range[1]
                                ? 'text-gold'
                                : 'text-charcoal hover:text-gold'
                            }`}
                          >
                            {pr.label}
                          </button>
                        ))}
                        <button
                          onClick={() => setPriceRange([0, 10000])}
                          className="block w-full text-left py-1 text-sm text-warm-gray hover:text-gold transition-colors"
                        >
                          All Prices
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-charcoal mb-2">No pieces found</p>
              <p className="text-sm text-warm-gray mb-6">Try adjusting your filters to find what you're looking for.</p>
              <button
                onClick={resetFilters}
                className="px-8 py-3 bg-charcoal text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
