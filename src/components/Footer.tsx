import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80" role="contentinfo">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 py-16 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo color="#FAF9F6" showTagline />
            <p className="mt-6 text-xs leading-relaxed text-ivory/50 max-w-xs">
              Crafting extraordinary jewelry since 2018. Each piece tells a
              story of artistry, heritage, and modern elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {[
                "All Collections",
                "Rings",
                "Necklaces",
                "Bracelets",
                "Earrings",
                "New Arrivals",
                "Best Sellers",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/collections"
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                "Our Story",
                "Craftsmanship",
                "Sustainability",
                "Press",
                "Careers",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/about"
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Customer Care
            </h3>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "Shipping & Returns",
                "Ring Size Guide",
                "Care Instructions",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-ivory/10">
              <p className="text-xs text-ivory/40 mb-1">Customer Service</p>
              <a
                href="mailto:karim@lunabijoux.com"
                className="text-sm text-ivory/60 hover:text-gold transition-colors"
              >
                karim@lunabijoux.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.1em] text-ivory/30">
            © 2025 Luna Bijoux. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <span
                key={item}
                className="text-[10px] tracking-[0.05em] text-ivory/30 hover:text-ivory/60 transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
