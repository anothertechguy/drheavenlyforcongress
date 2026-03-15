import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import content from "@/data/content.json";
import SocialLinks from "@/components/SocialLinks";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding,box-shadow] duration-500 border-b ${
        isScrolled 
          ? "bg-navy/95 backdrop-blur-lg border-white/10 shadow-lg py-4" 
          : "bg-transparent border-transparent py-6 shadow-none"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="/" className="relative z-10 group">
          <h1 className="font-display font-bold text-2xl md:text-3xl text-white tracking-widest uppercase flex items-center gap-2">
            Dr. Heavenly
            <span className="text-gold font-sans text-sm tracking-[0.3em] opacity-80 mt-1 hidden md:block">For Congress</span>
          </h1>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: 'Home', href: '/', show: !isHomePage },
            { name: 'Platform', href: content.urls.platform, show: true },
            { name: 'About', href: content.urls.about, show: true },
          ].filter(item => item.show).map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="font-sans text-sm font-bold tracking-[0.2em] text-white/80 hover:text-gold transition-colors uppercase relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          <SocialLinks 
            className="hidden xl:flex" 
            iconClassName="w-8 h-8 bg-transparent border-white/20 hover:bg-white/10 text-white" 
          />
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
    </motion.header>

    {/* Mobile Navigation Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-navy flex flex-col pt-8 px-6 pb-12 overflow-y-auto"
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-16">
            <h1 className="font-display font-bold text-2xl text-white tracking-widest uppercase flex items-center gap-2">
              Dr. Heavenly
            </h1>
            <button 
              className="text-white p-2 rounded-full bg-white/5 border border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-6 mb-16 items-center w-full">
            {[
              { name: 'Home', href: '/', show: !isHomePage },
              { name: 'Platform', href: content.urls.platform, show: true },
              { name: 'About', href: content.urls.about, show: true },
              { name: 'Store', href: content.urls.shop, show: true },
            ].filter(item => item.show).map((item, i) => (
              <motion.a 
                key={item.name} 
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-4xl text-white hover:text-gold transition-colors block text-center uppercase tracking-wider"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-8 items-center">
            <div className="flex flex-col w-full gap-4 sm:flex-row justify-center max-w-sm mx-auto">
              <a
                href="/#voter-info"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy w-full text-center py-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VOTE NOW
              </a>
              <a
                href={content.urls.donate}
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
