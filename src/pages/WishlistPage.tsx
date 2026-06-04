import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import { HeartIcon } from '../components/Icons';
import { useStore } from '../store/useStore';
import { getProductById } from '../data/products';

export default function WishlistPage() {
  const wishlist = useStore(s => s.wishlist);
  const wishlistProducts = wishlist.map(id => getProductById(id)).filter(Boolean);

  return (
    <PageTransition>
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-beige">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3"
          >
            Your Favorites
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-charcoal"
          >
            Wishlist
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm text-warm-gray"
          >
            {wishlistProducts.length} {wishlistProducts.length === 1 ? 'piece' : 'pieces'} saved
          </motion.p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-ivory min-h-[40vh]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          {wishlistProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
              {wishlistProducts.map((product, i) =>
                product ? (
                  <ProductCard key={product.id} product={product} index={i} />
                ) : null
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <HeartIcon size={48} className="text-warm-gray/20 mx-auto mb-4" />
              <p className="font-serif text-xl text-charcoal mb-2">Your wishlist is empty</p>
              <p className="text-sm text-warm-gray mb-6">
                Save your favorite pieces to revisit them later.
              </p>
              <Link
                to="/collections"
                className="inline-block px-8 py-3 bg-charcoal text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
