import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { CheckIcon, ChevronLeft } from '../components/Icons';
import { useStore } from '../store/useStore';
import { CheckoutFormData } from '../types';

const shippingMethods = [
  { value: 'standard' as const, label: 'Standard Shipping', description: '5–7 business days', price: 0 },
  { value: 'express' as const, label: 'Express Shipping', description: '2–3 business days', price: 25 },
  { value: 'overnight' as const, label: 'Overnight Shipping', description: 'Next business day', price: 50 },
];

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useStore();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});

  const [form, setForm] = useState<CheckoutFormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    phone: '',
    shippingMethod: 'standard',
  });

  const subtotal = cartTotal();
  const shipping = shippingMethods.find(m => m.value === form.shippingMethod)?.price || 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(price);

  const updateField = (field: keyof CheckoutFormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
    if (!form.email || !form.email.includes('@')) newErrors.email = 'Valid email required';
    if (!form.firstName.trim()) newErrors.firstName = 'First name required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name required';
    if (!form.address.trim()) newErrors.address = 'Address required';
    if (!form.city.trim()) newErrors.city = 'City required';
    if (!form.state.trim()) newErrors.state = 'State required';
    if (!form.zip.trim()) newErrors.zip = 'ZIP code required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep('success');
      clearCart();
      window.scrollTo(0, 0);
    }
  };

  if (cart.length === 0 && step !== 'success') {
    return (
      <PageTransition>
        <div className="pt-32 pb-20 text-center bg-ivory min-h-screen">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Your bag is empty</h1>
          <p className="text-sm text-warm-gray mb-6">Add some pieces before checking out.</p>
          <Link
            to="/collections"
            className="inline-block px-8 py-3 bg-charcoal text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-24 md:pt-28 pb-20 bg-ivory min-h-screen">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            {step === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-lg mx-auto text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckIcon size={28} className="text-ivory" />
                </motion.div>
                <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Thank You</h1>
                <p className="text-sm text-warm-gray mb-2">
                  Your order has been placed successfully.
                </p>
                <p className="text-xs text-warm-gray mb-8">
                  Order confirmation has been sent to {form.email}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/collections"
                    className="px-8 py-3 bg-charcoal text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold transition-colors"
                  >
                    Continue Shopping
                  </Link>
                  <Link
                    to="/"
                    className="px-8 py-3 border border-charcoal/15 text-charcoal text-[11px] tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors"
                  >
                    Return Home
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Link
                  to="/collections"
                  className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase text-warm-gray hover:text-charcoal transition-colors mb-8"
                >
                  <ChevronLeft size={14} />
                  Continue Shopping
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
                    <div>
                      <h2 className="font-serif text-2xl text-charcoal mb-6">Contact Information</h2>
                      <InputField
                        label="Email"
                        value={form.email}
                        onChange={v => updateField('email', v)}
                        error={errors.email}
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl text-charcoal mb-6">Shipping Address</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <InputField
                          label="First Name"
                          value={form.firstName}
                          onChange={v => updateField('firstName', v)}
                          error={errors.firstName}
                        />
                        <InputField
                          label="Last Name"
                          value={form.lastName}
                          onChange={v => updateField('lastName', v)}
                          error={errors.lastName}
                        />
                        <div className="col-span-2">
                          <InputField
                            label="Address"
                            value={form.address}
                            onChange={v => updateField('address', v)}
                            error={errors.address}
                          />
                        </div>
                        <div className="col-span-2">
                          <InputField
                            label="Apartment, suite, etc. (optional)"
                            value={form.apartment}
                            onChange={v => updateField('apartment', v)}
                          />
                        </div>
                        <InputField
                          label="City"
                          value={form.city}
                          onChange={v => updateField('city', v)}
                          error={errors.city}
                        />
                        <InputField
                          label="State"
                          value={form.state}
                          onChange={v => updateField('state', v)}
                          error={errors.state}
                        />
                        <InputField
                          label="ZIP Code"
                          value={form.zip}
                          onChange={v => updateField('zip', v)}
                          error={errors.zip}
                        />
                        <InputField
                          label="Phone (optional)"
                          value={form.phone}
                          onChange={v => updateField('phone', v)}
                          type="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl text-charcoal mb-6">Shipping Method</h2>
                      <div className="space-y-3">
                        {shippingMethods.map(method => (
                          <label
                            key={method.value}
                            className={`flex items-center justify-between p-4 border cursor-pointer transition-all ${
                              form.shippingMethod === method.value
                                ? 'border-gold bg-gold/5'
                                : 'border-charcoal/10 hover:border-charcoal/30'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                  form.shippingMethod === method.value ? 'border-gold' : 'border-charcoal/20'
                                }`}
                              >
                                {form.shippingMethod === method.value && (
                                  <span className="w-2 h-2 rounded-full bg-gold" />
                                )}
                              </span>
                              <div>
                                <p className="text-sm text-charcoal">{method.label}</p>
                                <p className="text-[10px] text-warm-gray">{method.description}</p>
                              </div>
                            </div>
                            <span className="text-sm font-medium">
                              {method.price === 0 ? 'Free' : formatPrice(method.price)}
                            </span>
                            <input
                              type="radio"
                              name="shipping"
                              value={method.value}
                              checked={form.shippingMethod === method.value}
                              onChange={() => updateField('shippingMethod', method.value)}
                              className="sr-only"
                            />
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-charcoal text-ivory text-[11px] tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-300"
                    >
                      Place Order — {formatPrice(total)}
                    </button>
                  </form>

                  {/* Order Summary */}
                  <div className="lg:col-span-2">
                    <div className="sticky top-28 bg-light-gray p-6 lg:p-8">
                      <h2 className="font-serif text-xl text-charcoal mb-6">Order Summary</h2>
                      <div className="space-y-4 mb-6">
                        {cart.map(item => (
                          <div key={item.product.id} className="flex gap-3">
                            <div className="relative w-16 h-16 bg-beige flex-shrink-0">
                              <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-charcoal text-ivory text-[9px] flex items-center justify-center rounded-full">
                                {item.quantity}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-charcoal truncate">{item.product.name}</p>
                              <p className="text-[10px] text-warm-gray capitalize">{item.product.category}</p>
                            </div>
                            <span className="text-sm font-medium">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2 pt-4 border-t border-charcoal/10">
                        <div className="flex justify-between text-sm">
                          <span className="text-warm-gray">Subtotal</span>
                          <span>{formatPrice(subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-warm-gray">Shipping</span>
                          <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-warm-gray">Estimated Tax</span>
                          <span>{formatPrice(tax)}</span>
                        </div>
                      </div>

                      <div className="flex justify-between pt-4 mt-4 border-t border-charcoal/10">
                        <span className="font-medium">Total</span>
                        <span className="font-serif text-xl font-medium">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}

function InputField({
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[10px] tracking-[0.1em] uppercase text-warm-gray">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border text-sm bg-white outline-none transition-colors placeholder:text-warm-gray/40 ${
          error
            ? 'border-red-400 focus:border-red-400'
            : 'border-charcoal/15 focus:border-gold'
        }`}
      />
      {error && <p className="text-[10px] text-red-500">{error}</p>}
    </div>
  );
}
