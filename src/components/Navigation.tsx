import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import content from "@/data/content.json";
import SocialLinks from "@/components/SocialLinks";
import menuHero from "../assets/menu-hero.webp";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding,box-shadow] duration-300 border-b ${
        isScrolled 
          ? "bg-navy/95 backdrop-blur-lg border-white/10 shadow-lg py-3" 
          : "bg-transparent backdrop-blur-sm border-transparent py-4 shadow-none"
      }`}
    >
      {/* Main Row */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="relative z-10 group">
          <h1 className="font-display font-bold text-xl md:text-3xl text-white tracking-widest uppercase flex items-baseline gap-2">
            Dr. Heavenly
            <span className="text-gold font-sans text-[10px] md:text-sm tracking-[0.3em] opacity-80 mt-1">For Congress</span>
          </h1>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {/* Platform Dropdown */}
          <div className="relative group">
            <Link 
              to={content.urls.platform}
              className="font-sans text-sm font-bold tracking-[0.2em] text-white/80 hover:text-gold transition-colors uppercase relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Platform
            </Link>
            {/* Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-navy/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-5 py-3 whitespace-nowrap">
                <Link
                  to="/digital-economy"
                  className="block font-sans text-xs font-bold tracking-[0.15em] text-white/70 hover:text-gold transition-colors uppercase py-1.5"
                >
                  Digital Economy
                </Link>
              </div>
            </div>
          </div>

          {[
            { name: 'About', href: content.urls.about },
            { name: 'Events', href: '/events' },
            { name: 'Endorsements', href: '/endorsements' },
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.href}
              className="font-sans text-sm font-bold tracking-[0.2em] text-white/80 hover:text-gold transition-colors uppercase relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/#voter-info"
              className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy px-5 py-2.5 text-xs lg:text-sm"
            >
              VOTE NOW
            </a>
            <a
              href={content.urls.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crimson px-5 py-2.5 text-xs lg:text-sm"
            >
              {content.home.support.donate_button}
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Social Icons Row — collapses on scroll */}
      <motion.div
        initial={false}
        animate={{ 
          height: isScrolled ? 0 : "auto", 
          opacity: isScrolled ? 0 : 1,
          marginTop: isScrolled ? 0 : 6 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden hidden xl:block"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-end">
          <SocialLinks 
            className="flex" 
            iconClassName="w-7 h-7 bg-transparent border-white/20 hover:bg-white/10 text-white" 
          />
        </div>
      </motion.div>
    </motion.header>

    {/* Mobile Navigation Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col pt-8 px-6 pb-12 overflow-y-auto"
        >
          {/* Background image with USA flag gradient overlays */}
          <div className="absolute inset-0 z-0">
            <img src={menuHero} alt="" className="w-full h-full object-cover object-[center_30%]" />
            {/* Deep navy overlay to darken and make text legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/75 to-navy/95" />
            {/* Subtle USA crimson stripe at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson via-white/30 to-[#3c3b6e]" />
            {/* Subtle USA crimson stripe at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3c3b6e] via-white/30 to-crimson" />
          </div>

          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-12 relative z-10">
            <h1 className="font-display font-bold text-xl text-white tracking-widest uppercase flex items-baseline gap-2">
              Dr. Heavenly
              <span className="text-gold font-sans text-[10px] tracking-[0.3em] opacity-90">For Congress</span>
            </h1>
            <button 
              className="text-white p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-6 mb-10 items-center w-full relative z-10">
            {[
              { name: 'Platform', href: content.urls.platform, external: false },
              { name: 'Digital Economy', href: '/digital-economy', external: false },
              { name: 'About', href: content.urls.about, external: false },
              { name: 'Events', href: '/events', external: false },
              { name: 'Endorsements', href: '/endorsements', external: false },
              { name: 'Store', href: content.urls.shop, external: true },
            ].filter(item => item).map((item, i) => (
              <motion.div 
                key={item.name} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-4xl text-white hover:text-gold transition-colors block text-center uppercase tracking-wider drop-shadow-lg"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-4xl text-white hover:text-gold transition-colors block text-center uppercase tracking-wider drop-shadow-lg"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-6 items-center relative z-10">
            <div className="flex flex-col w-full gap-4 sm:flex-row justify-center max-w-sm mx-auto">
              <a
                href={`${import.meta.env.BASE_URL}#voter-info`}
                className="btn-outline border-white/70 text-white hover:bg-white hover:text-navy w-full text-center py-4 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VOTE NOW
              </a>
              <a
                href={content.urls.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crimson w-full text-center py-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate
              </a>
            </div>
            <SocialLinks className="justify-center" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navigation;
