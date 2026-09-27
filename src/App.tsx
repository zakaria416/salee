import { useEffect, useRef, useState } from 'react';
import {
  Ruler,
  Wrench,
  Gem,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  Shield,
  Award,
  Clock,
  Star,
} from 'lucide-react';

const HERO_IMAGE =
  'https://images.pexels.com/photos/7546600/pexels-photo-7546600.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

const PRODUCTS = [
  {
    name: 'Roller Blinds',
    description:
      'Sleek, minimalist, and effortlessly functional. Our roller blinds offer precision light control in a clean, modern profile that complements any interior.',
    image:
      'https://images.pexels.com/photos/13005096/pexels-photo-13005096.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    features: ['UV-filtering fabrics', 'Blackout options', 'Cordless operation'],
  },
  {
    name: 'Wooden Shutters',
    description:
      'Timeless craftsmanship meets enduring quality. Hand-finished hardwood shutters that add warmth, architectural character, and lasting value to your home.',
    image:
      'https://images.pexels.com/photos/17373417/pexels-photo-17373417.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    features: ['Premium hardwood', 'Custom louvre sizes', 'Lifetime guarantee'],
  },
  {
    name: 'Motorized Shades',
    description:
      'Effortless control at your fingertips. Smart motorized shades integrate seamlessly with your home automation, offering scheduling, voice control, and remote operation.',
    image:
      'https://images.pexels.com/photos/30710655/pexels-photo-30710655.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    features: ['Smart home compatible', 'Voice & app control', 'Silent motor'],
  },
];

const REASONS = [
  {
    icon: Ruler,
    title: 'Custom Fit',
    text: 'Every window measured to the millimetre and crafted to exact specifications for a flawless, seamless fit.',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    text: 'Our certified fitters handle everything with meticulous care, leaving your home spotless and your windows perfect.',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    text: 'Only the finest hardwoods, architectural-grade aluminium, and designer fabrics from trusted European mills.',
  },
];

const STATS = [
  { value: '25+', label: 'Years of Craftsmanship' },
  { value: '12,000+', label: 'Windows Transformed' },
  { value: '4.9★', label: 'Average Client Rating' },
  { value: '10-Yr', label: 'Product Warranty' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="font-serif text-charcoal-950 font-bold text-lg">L</span>
          </div>
          <span className="font-serif text-white text-xl tracking-wide">
            Lumière<span className="text-gold-400">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-charcoal-200 hover:text-gold-400 transition-colors duration-300 tracking-wide uppercase font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold-500 hover:bg-gold-400 text-charcoal-950 px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
          >
            Get a Free Quote
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-charcoal-950/98 backdrop-blur-md border-t border-charcoal-800 mt-3">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-charcoal-200 hover:text-gold-400 transition-colors text-sm tracking-wide uppercase font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-gold-500 text-charcoal-950 px-6 py-3 rounded-sm text-sm font-semibold tracking-wide text-center mt-2"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/70 to-charcoal-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-5 py-2 mb-8 animate-fade-in">
          <Star size={14} className="text-gold-400" fill="currentColor" />
          <span className="text-gold-200 text-xs tracking-widest uppercase font-medium">
            Premium Window Furnishings Since 2001
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] text-balance animate-fade-up">
          Transform Your Windows,
          <br />
          <span className="text-gold-400 italic">Elevate Your Home</span>
        </h1>

        <p
          className="mt-8 text-charcoal-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Bespoke blinds, shutters, and shades crafted from the world's finest
          materials. Measured precisely, installed flawlessly — designed to last
          a lifetime.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <a
            href="#contact"
            className="group bg-gold-500 hover:bg-gold-400 text-charcoal-950 px-8 py-4 rounded-sm text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25 flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#products"
            className="border border-charcoal-600 hover:border-gold-400 text-white hover:text-gold-400 px-8 py-4 rounded-sm text-base font-medium tracking-wide transition-all duration-300"
          >
            Explore Products
          </a>
        </div>
      </div>

      <a
        href="#why-us"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal-300 hover:text-gold-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}

function WhyChooseUs() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="why-us"
      ref={ref}
      className="bg-charcoal-900 py-24 md:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gold-400 text-sm tracking-widest uppercase font-medium mb-4">
            The Lumière Difference
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
            Why Choose Us
          </h2>
          <div className="mt-6 w-16 h-px bg-gold-500 mx-auto" />
          <p className="mt-6 text-charcoal-300 text-lg leading-relaxed">
            We don't just dress windows. We craft light, shape ambience, and
            bring quiet luxury to every room we touch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`group relative bg-charcoal-800 border border-charcoal-700 rounded-lg p-10 transition-all duration-700 hover:border-gold-500/50 hover:-translate-y-2 ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-700/10 border border-gold-500/20 flex items-center justify-center mb-8 group-hover:from-gold-500/30 group-hover:to-gold-700/20 transition-all duration-500">
                  <Icon
                    size={28}
                    className="text-gold-400 group-hover:scale-110 transition-transform duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-charcoal-300 leading-relaxed">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal-700 rounded-lg overflow-hidden">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-charcoal-850 bg-charcoal-800 px-6 py-10 text-center transition-all duration-700 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${500 + i * 100}ms` }}
            >
              <div className="font-serif text-3xl md:text-4xl text-gold-400 mb-2">
                {stat.value}
              </div>
              <div className="text-charcoal-300 text-sm tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="products"
      ref={ref}
      className="bg-charcoal-950 py-24 md:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gold-400 text-sm tracking-widest uppercase font-medium mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
            Crafted for Every Window
          </h2>
          <div className="mt-6 w-16 h-px bg-gold-500 mx-auto" />
          <p className="mt-6 text-charcoal-300 text-lg leading-relaxed">
            From sleek modern minimalism to timeless architectural elegance,
            explore our signature range of premium window furnishings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <article
              key={product.name}
              className={`group relative overflow-hidden rounded-lg bg-charcoal-800 border border-charcoal-700 transition-all duration-700 hover:border-gold-500/40 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 180}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-charcoal-800/20 to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-charcoal-300 leading-relaxed mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-charcoal-200"
                    >
                      <Check
                        size={16}
                        className="text-gold-400 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium tracking-wide transition-colors group/link"
                >
                  Request a Quote
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    'w-full bg-charcoal-800 border border-charcoal-700 rounded-sm px-4 py-3.5 text-white placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300';

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-charcoal-900 py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gold-400 text-sm tracking-widest uppercase font-medium mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">
              Request Your Free Quote
            </h2>
            <div className="w-16 h-px bg-gold-500 mb-8" />
            <p className="text-charcoal-300 text-lg leading-relaxed mb-10">
              Book a complimentary consultation and measurement visit. Our
              design specialists will guide you through fabrics, finishes, and
              styles — with no obligation and no pressure.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-charcoal-400 text-xs uppercase tracking-wide">
                    Call Us
                  </div>
                  <div className="text-white text-lg">0800 123 4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-charcoal-400 text-xs uppercase tracking-wide">
                    Email
                  </div>
                  <div className="text-white text-lg">
                    hello@lumiere-blinds.co.uk
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-charcoal-400 text-xs uppercase tracking-wide">
                    Showroom
                  </div>
                  <div className="text-white text-lg">
                    24 Design Quarter, London
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-charcoal-300 text-sm">
                <Shield size={16} className="text-gold-400" />
                Fully Insured
              </div>
              <div className="flex items-center gap-2 text-charcoal-300 text-sm">
                <Award size={16} className="text-gold-400" />
                Award Winning
              </div>
              <div className="flex items-center gap-2 text-charcoal-300 text-sm">
                <Clock size={16} className="text-gold-400" />
                10-Year Warranty
              </div>
            </div>
          </div>

          <div
            className={`bg-charcoal-800 border border-charcoal-700 rounded-lg p-8 md:p-10 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {submitted && (
              <div className="mb-6 flex items-center gap-3 bg-gold-500/10 border border-gold-500/30 rounded-sm px-5 py-4 animate-fade-in">
                <Check size={20} className="text-gold-400" />
                <span className="text-gold-200 text-sm">
                  Thank you — we'll be in touch within 24 hours.
                </span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-charcoal-300 text-sm mb-2 tracking-wide"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-charcoal-300 text-sm mb-2 tracking-wide"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-charcoal-300 text-sm mb-2 tracking-wide"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="07123 456789"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-charcoal-300 text-sm mb-2 tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Tell us about your windows and what you're looking for..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 py-4 rounded-sm text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 flex items-center justify-center gap-2"
              >
                Send My Request
                <ArrowRight size={18} />
              </button>
              <p className="text-charcoal-400 text-xs text-center">
                We typically respond within 24 hours. Your details are never
                shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="font-serif text-charcoal-950 font-bold text-sm">
                L
              </span>
            </div>
            <span className="font-serif text-white text-lg tracking-wide">
              Lumière<span className="text-gold-400">.</span>
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-6 justify-center">
            <a
              href="#why-us"
              className="text-charcoal-400 hover:text-gold-400 transition-colors text-sm"
            >
              Why Us
            </a>
            <a
              href="#products"
              className="text-charcoal-400 hover:text-gold-400 transition-colors text-sm"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-charcoal-400 hover:text-gold-400 transition-colors text-sm"
            >
              Contact
            </a>
          </nav>
          <p className="text-charcoal-500 text-sm text-center md:text-right">
            © 2026 Lumière Blinds &amp; Shutters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <Header />
      <Hero />
      <WhyChooseUs />
      <ProductShowcase />
      <ContactForm />
      <Footer />
    </div>
  );
}
