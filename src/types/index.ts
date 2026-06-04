export type Category = 'rings' | 'necklaces' | 'bracelets' | 'earrings';

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: Category;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  images: string[];
  materials: string[];
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  sku: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  shippingMethod: 'standard' | 'express' | 'overnight';
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';

export interface FilterState {
  categories: Category[];
  priceRange: [number, number];
  sortBy: SortOption;
  searchQuery: string;
}
