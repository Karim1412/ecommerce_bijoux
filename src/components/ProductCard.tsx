import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon } from './Icons';
import StarRating from './StarRating';
import { Product } from '../types';
import { useStore } from '../store/useStore';

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: 'default' | 'compact' | 'editorial';
}

export default function ProductCard({ product, index = 0, variant = 'default' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const toggleWishlist = useStore(s => s.toggleWishlist);
  const isInWishlist = useStore(s => s.isInWishlist);
  const addToCart = useStore(s => s.addToCart);
  const wishlisted = isInWishlist(product.id);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);

  if (variant === 'editorial') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="group"
      >
        <Link to={`/product/${product.id}`} className="block">
          <div
            className="relative aspect-[3/4] overflow-hidden bg-beige"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-700 ease-out ${isHovered ? 'scale-105' : 'scale-100'} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
            {!imageLoaded && <div className="absolute inset-0 bg-beige animate-pulse" />}
            {product.newArrival && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal text-ivory text-[10px] tracking-[0.15em] uppercase">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-ivory text-[10px] tracking-[0.15em] uppercase">
                Sale
              </span>
            )}
          </div>
          <div className="mt-4 space-y-1.5">
            <p className="text-[11px] tracking-[0.15em] uppercase text-warm-gray">{product.category}</p>
            <h3 className="font-serif text-lg font-medium text-charcoal group-hover:text-gold transition-colors duration-300">
              {product.name}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-warm-gray line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group"
    >
      <div
        className="relative aspect-square overflow-hidden bg-beige"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${isHovered ? 'scale-105' : 'scale-100'} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {!imageLoaded && <div className="absolute inset-0 bg-beige animate-pulse" />}
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.newArrival && (
            <span className="px-2.5 py-1 bg-charcoal text-ivory text-[9px] tracking-[0.15em] uppercase">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="px-2.5 py-1 bg-gold text-ivory text-[9px] tracking-[0.15em] uppercase">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
            isHovered || wishlisted ? 'opacity-100' : 'opacity-0'
          } ${wishlisted ? 'bg-gold text-white' : 'bg-white/80 text-charcoal hover:bg-gold hover:text-white'}`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <HeartIcon size={14} filled={wishlisted} />
        </button>

        {/* Quick Add */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-0 left-0 right-0 p-3"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full py-2.5 bg-charcoal text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-300"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Bag
          </button>
        </motion.div>
      </div>

      <Link to={`/product/${product.id}`} className="block mt-3.5 space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] tracking-[0.15em] uppercase text-warm-gray">{product.category}</p>
          <StarRating rating={product.rating} size={11} />
        </div>
        <h3 className="font-serif text-base font-medium text-charcoal group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-warm-gray line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
