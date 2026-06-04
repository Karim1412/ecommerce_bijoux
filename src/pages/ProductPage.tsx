import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';
import { HeartIcon, MinusIcon, PlusIcon, TruckIcon, ShieldIcon, GiftIcon, ChevronLeft, ChevronRight } from '../components/Icons';
import { useStore } from '../store/useStore';
import { getProductById, getSimilarProducts, getProductReviews } from '../data/products';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description');

  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const product = id ? getProductById(id) : undefined;
  const similar = product ? getSimilarProducts(product) : [];
  const reviews = id ? getProductReviews(id) : [];
  const wishlisted = id ? isInWishlist(id) : false;

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <PageTransition>
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/collections" className="text-sm text-gold hover:underline">
            Return to Collections
          </Link>
        </div>
      </PageTransition>
    );
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <PageTransition>
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 bg-ivory">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase text-warm-gray" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
            <span>/</span>
            <Link to="/collections" className="hover:text-charcoal transition-colors">Collections</Link>
            <span>/</span>
            <Link to={`/collections?category=${product.category}`} className="hover:text-charcoal transition-colors capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <section className="py-8 md:py-14 bg-ivory">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div
                className="relative aspect-square bg-beige overflow-hidden cursor-crosshair"
                onMouseEnter={() => setZoomed(true)}
                onMouseLeave={() => setZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    zoomed ? 'scale-150' : 'scale-100'
                  }`}
                  style={
                    zoomed
                      ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
                      : undefined
                  }
                />

                {/* Nav arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage(i => (i === 0 ? product.images.length - 1 : i - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setSelectedImage(i => (i === product.images.length - 1 ? 0 : i + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-gold' : 'border-transparent'
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-warm-gray mb-2 capitalize">
                  {product.category}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-3">
                  {product.name}
                </h1>

                <div className="flex items-center gap-3 mb-5">
                  <StarRating rating={product.rating} showValue />
                  <span className="text-xs text-warm-gray">({product.reviewCount} reviews)</span>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-serif text-2xl font-medium text-charcoal">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-warm-gray line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <p className="text-sm text-warm-gray leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Materials */}
                <div className="mb-8">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-2">Materials</p>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map(m => (
                      <span key={m} className="px-3 py-1.5 text-xs border border-charcoal/15 text-charcoal">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quantity + Add to Cart */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border border-charcoal/15">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-10 h-12 flex items-center justify-center hover:bg-beige transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <MinusIcon size={14} />
                    </button>
                    <span className="w-12 h-12 flex items-center justify-center text-sm border-x border-charcoal/15">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                      className="w-10 h-12 flex items-center justify-center hover:bg-beige transition-colors"
                      aria-label="Increase quantity"
                    >
                      <PlusIcon size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => addToCart(product, quantity)}
                    className="flex-1 h-12 bg-charcoal text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-300"
                  >
                    Add to Bag — {formatPrice(product.price * quantity)}
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                      wishlisted
                        ? 'border-gold bg-gold text-ivory'
                        : 'border-charcoal/15 text-charcoal hover:border-gold hover:text-gold'
                    }`}
                    aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <HeartIcon size={18} filled={wishlisted} />
                  </button>
                </div>

                {/* Stock */}
                <p className="text-[10px] text-warm-gray mb-8">
                  {product.stock <= 5 ? (
                    <span className="text-gold">Only {product.stock} left in stock</span>
                  ) : (
                    <span>In Stock • SKU: {product.sku}</span>
                  )}
                </p>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-4 py-6 border-t border-charcoal/10">
                  {[
                    { icon: <TruckIcon size={16} />, text: 'Free Shipping' },
                    { icon: <ShieldIcon size={16} />, text: 'Lifetime Warranty' },
                    { icon: <GiftIcon size={16} />, text: 'Gift Wrapping' },
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5 text-center">
                      <span className="text-warm-gray">{badge.icon}</span>
                      <span className="text-[9px] tracking-[0.08em] uppercase text-warm-gray">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="mt-16 lg:mt-24">
            <div className="flex border-b border-charcoal/10">
              {(['description', 'details', 'reviews'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-[11px] tracking-[0.12em] uppercase transition-colors border-b-2 -mb-[1px] ${
                    activeTab === tab
                      ? 'border-gold text-charcoal'
                      : 'border-transparent text-warm-gray hover:text-charcoal'
                  }`}
                >
                  {tab}{tab === 'reviews' ? ` (${reviews.length || product.reviewCount})` : ''}
                </button>
              ))}
            </div>

            <div className="py-8 max-w-3xl">
              {activeTab === 'description' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-warm-gray leading-relaxed space-y-4"
                >
                  <p>{product.longDescription}</p>
                </motion.div>
              )}

              {activeTab === 'details' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="py-3 border-b border-charcoal/5">
                      <span className="text-warm-gray">Materials</span>
                    </div>
                    <div className="py-3 border-b border-charcoal/5">
                      <span className="text-charcoal">{product.materials.join(', ')}</span>
                    </div>
                    <div className="py-3 border-b border-charcoal/5">
                      <span className="text-warm-gray">SKU</span>
                    </div>
                    <div className="py-3 border-b border-charcoal/5">
                      <span className="text-charcoal">{product.sku}</span>
                    </div>
                    <div className="py-3 border-b border-charcoal/5">
                      <span className="text-warm-gray">Category</span>
                    </div>
                    <div className="py-3 border-b border-charcoal/5">
                      <span className="text-charcoal capitalize">{product.category}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {reviews.length > 0 ? (
                    reviews.map(review => (
                      <div key={review.id} className="pb-6 border-b border-charcoal/5 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <StarRating rating={review.rating} size={12} />
                            {review.verified && (
                              <span className="text-[9px] tracking-wider uppercase text-gold">Verified</span>
                            )}
                          </div>
                          <span className="text-[10px] text-warm-gray">{review.date}</span>
                        </div>
                        <h4 className="text-sm font-medium text-charcoal mb-1">{review.title}</h4>
                        <p className="text-sm text-warm-gray leading-relaxed">{review.content}</p>
                        <p className="text-xs text-warm-gray mt-2">— {review.author}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <StarRating rating={product.rating} size={18} className="justify-center mb-3" showValue />
                      <p className="text-sm text-warm-gray">
                        Based on {product.reviewCount} reviews
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      {similar.length > 0 && (
        <section className="py-16 lg:py-20 bg-light-gray">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-10 text-center">
              You May Also Love
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
              {similar.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
