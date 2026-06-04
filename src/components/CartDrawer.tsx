import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon, BagIcon } from './Icons';
import { useStore } from '../store/useStore';
import { useScrollLock } from '../hooks/useScrollLock';

export default function CartDrawer() {
  const { cart, setCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount } = useStore();
  const total = cartTotal();
  const count = cartCount();

  useScrollLock(true);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm"
      onClick={() => setCartOpen(false)}
    >
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory flex flex-col shadow-2xl"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-label="Shopping bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10">
          <div className="flex items-center gap-2.5">
            <h2 className="font-serif text-xl">Shopping Bag</h2>
            <span className="text-xs text-warm-gray">({count})</span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-1 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <BagIcon size={48} className="text-warm-gray/30 mb-4" />
              <p className="font-serif text-lg text-charcoal mb-1">Your bag is empty</p>
              <p className="text-xs text-warm-gray mb-6">Discover our curated collection of luxury jewelry.</p>
              <Link
                to="/collections"
                onClick={() => setCartOpen(false)}
                className="px-8 py-3 bg-charcoal text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-5">
              {cart.map((item, i) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4"
                >
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={() => setCartOpen(false)}
                    className="w-20 h-20 flex-shrink-0 bg-beige overflow-hidden"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          to={`/product/${item.product.id}`}
                          onClick={() => setCartOpen(false)}
                          className="font-serif text-sm font-medium text-charcoal hover:text-gold transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-[10px] tracking-[0.1em] uppercase text-warm-gray mt-0.5">
                          {item.product.category}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1 text-warm-gray hover:text-red-500 transition-colors flex-shrink-0"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <TrashIcon size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-charcoal/15">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-beige transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon size={12} />
                        </button>
                        <span className="w-8 h-7 flex items-center justify-center text-xs border-x border-charcoal/15">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-beige transition-colors"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-charcoal/10 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="font-serif text-lg font-medium">{formatPrice(total)}</span>
            </div>
            <p className="text-[10px] text-warm-gray text-center">
              Shipping & taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={() => setCartOpen(false)}
              className="block w-full py-3.5 bg-charcoal text-ivory text-center text-[11px] tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setCartOpen(false)}
              className="block w-full py-3 text-center text-[11px] tracking-[0.15em] uppercase text-charcoal hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </motion.aside>
    </motion.div>
  );
}
