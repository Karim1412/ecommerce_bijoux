import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, FilterState, Category, SortOption } from '../types';

interface StoreState {
  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  cartTotal: () => number;
  cartCount: () => number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Filters
  filters: FilterState;
  setSearchQuery: (query: string) => void;
  toggleCategory: (category: Category) => void;
  setPriceRange: (range: [number, number]) => void;
  setSortBy: (sort: SortOption) => void;
  resetFilters: () => void;

  // UI
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setMenuOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  toggleSearch: () => void;
  setSearchOpen: (open: boolean) => void;
}

const defaultFilters: FilterState = {
  categories: [],
  priceRange: [0, 10000],
  sortBy: 'featured',
  searchQuery: '',
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      isCartOpen: false,

      addToCart: (product, quantity = 1) => {
        const { cart } = get();
        const existing = cart.find(item => item.product.id === product.id);
        if (existing) {
          set({
            cart: cart.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
                : item
            ),
          });
        } else {
          set({ cart: [...cart, { product, quantity }] });
        }
        set({ isCartOpen: true });
      },

      removeFromCart: (productId) => {
        set({ cart: get().cart.filter(item => item.product.id !== productId) });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set({
          cart: get().cart.map(item =>
            item.product.id === productId
              ? { ...item, quantity: Math.min(quantity, item.product.stock) }
              : item
          ),
        });
      },

      clearCart: () => set({ cart: [] }),

      toggleCart: () => set({ isCartOpen: !get().isCartOpen }),

      setCartOpen: (open) => set({ isCartOpen: open }),

      cartTotal: () => {
        return get().cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      },

      cartCount: () => {
        return get().cart.reduce((sum, item) => sum + item.quantity, 0);
      },

      // Wishlist
      wishlist: [],

      toggleWishlist: (productId) => {
        const { wishlist } = get();
        if (wishlist.includes(productId)) {
          set({ wishlist: wishlist.filter(id => id !== productId) });
        } else {
          set({ wishlist: [...wishlist, productId] });
        }
      },

      isInWishlist: (productId) => {
        return get().wishlist.includes(productId);
      },

      // Filters
      filters: defaultFilters,

      setSearchQuery: (query) => {
        set({ filters: { ...get().filters, searchQuery: query } });
      },

      toggleCategory: (category) => {
        const { filters } = get();
        const cats = filters.categories.includes(category)
          ? filters.categories.filter(c => c !== category)
          : [...filters.categories, category];
        set({ filters: { ...filters, categories: cats } });
      },

      setPriceRange: (range) => {
        set({ filters: { ...get().filters, priceRange: range } });
      },

      setSortBy: (sort) => {
        set({ filters: { ...get().filters, sortBy: sort } });
      },

      resetFilters: () => {
        set({ filters: defaultFilters });
      },

      // UI
      isMenuOpen: false,
      toggleMenu: () => set({ isMenuOpen: !get().isMenuOpen }),
      setMenuOpen: (open) => set({ isMenuOpen: open }),

      isSearchOpen: false,
      toggleSearch: () => set({ isSearchOpen: !get().isSearchOpen }),
      setSearchOpen: (open) => set({ isSearchOpen: open }),
    }),
    {
      name: 'luna-bijoux-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
      }),
    }
  )
);
