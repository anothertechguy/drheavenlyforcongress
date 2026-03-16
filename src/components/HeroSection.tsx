import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "../assets/hero-family.webp";
import content from "@/data/content.json";

const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const words = content.home.hero.heading.split(". ");

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center bg-navy overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ y: imageY }}
        animate={{ scale: isMobile() ? [1.0, 0.95] : [1.05, 1.15] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <img
          src={heroImage}
          alt="Dr. Heavenly Kimes and Family"
          className="object-cover w-full h-full object-[62%_center] md:object-center opacity-95 contrast-105"
        />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(5,10,25,0.4)_100%)] z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Content */}
      <div className="container relative z-20 flex flex-col min-h-[100svh] py-0">

        {/* TOP: Tag + Heading — sits just below nav on mobile */}
        <motion.div
          className="max-w-5xl mx-auto text-center flex flex-col items-center w-full pt-20 md:hidden"
          style={{ y: textY }}
        >
          <motion.div
            className="flex flex-col items-center gap-3 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans font-bold tracking-[0.4em] uppercase text-gold text-xs drop-shadow-md">
              Candidate for Georgia's 13th District
            </span>
            <div className="h-[1px] w-20 bg-gold/70 shadow-[0_0_12px_rgba(255,200,50,0.5)]" />
          </motion.div>

          <h1 className="font-display text-4xl leading-[1.15] text-white font-medium mb-0 flex flex-wrap justify-center gap-x-5 gap-y-3">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="block whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/75 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
                initial={{ opacity: 0, y: 50, scale: 0.88, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.45 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {word.replace(/\.$/, '')}
                <span className="text-gold ml-1">.</span>
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* BOTTOM on mobile: sub-text + buttons (mt-auto pushes to bottom) */}
        <motion.div
          className="max-w-5xl mx-auto text-center flex flex-col items-center w-full mt-auto mb-8 md:hidden px-4"
          style={{ y: textY }}
        >
          <motion.p
            className="font-sans text-base text-white/85 max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 + words.length * 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {content.home.hero.sub_heading}
          </motion.p>
          <motion.div
            className="flex flex-col w-full gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 + words.length * 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="/#voter-info" className="btn-navy w-full text-center">VOTE NOW</a>
            <a href={content.urls.donate} target="_blank" rel="noopener noreferrer" className="btn-crimson w-full text-center">
              {content.home.hero.buttons.contribute}
            </a>
          </motion.div>
        </motion.div>

        {/* DESKTOP: all content bottom-anchored */}
        <motion.div
          className="max-w-5xl mx-auto text-center flex-col items-center w-full mt-auto mb-20 hidden md:flex"
          style={{ y: textY }}
        >
          <motion.div
            className="flex flex-col items-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans font-bold tracking-[0.4em] uppercase text-gold text-sm drop-shadow-md">
              Candidate for Georgia's 13th District
            </span>
            <div className="h-[1px] w-20 bg-gold/70 shadow-[0_0_12px_rgba(255,200,50,0.5)]" />
          </motion.div>

          <h1 className="font-display text-6xl lg:text-7xl leading-[1.15] text-white font-medium mb-6 flex flex-wrap justify-center gap-x-5 gap-y-3">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="block whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/75 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
                initial={{ opacity: 0, y: 50, scale: 0.88, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.45 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {word.replace(/\.$/, '')}
                <span className="text-gold ml-1">.</span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="font-sans text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 + words.length * 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {content.home.hero.sub_heading}
          </motion.p>

          <motion.div
            className="flex flex-row flex-wrap justify-center items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 + words.length * 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="/#voter-info" className="btn-navy text-center">VOTE NOW</a>
            <a href={content.urls.donate} target="_blank" rel="noopener noreferrer" className="btn-crimson text-center">
              {content.home.hero.buttons.contribute}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-12 z-20 hidden md:flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="text-white/50 text-[10px] font-sans font-bold tracking-[0.3em] uppercase rotate-[-90deg] origin-left translate-y-6">Scroll</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-gold via-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
