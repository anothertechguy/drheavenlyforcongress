import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-family.webp";
import content from "@/data/content.json";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], 
      delay: i * 0.1 
    },
  }),
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  // High-end parallax scaling and movement
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const words = content.home.hero.heading.split(". ");

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center bg-navy overflow-hidden">
      {/* Background Image Parallax & Ken Burns */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y: imageY }}
        animate={{ scale: [1.05, 1.15] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <img
          src={heroImage}
          alt="Dr. Heavenly Kimes and Family"
          className="object-cover w-full h-full object-center opacity-80 mix-blend-luminosity brightness-90 contrast-110"
        />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-navy/50 to-navy/30 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(10,20,35,0.7)_100%)] z-10" />

      {/* Bottom Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Content Container */}
      <div className="container relative z-20 flex flex-col justify-end pb-16 h-full pt-[30vh]">
        <motion.div className="max-w-5xl mx-auto text-center flex flex-col items-center" style={{ y: textY }}>
          
          <motion.div
            className="flex flex-col items-center gap-4 mb-8"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <span className="font-sans font-bold tracking-[0.4em] uppercase text-gold text-xs md:text-sm drop-shadow-md">
              Candidate for Georgia's 13th District
            </span>
            <div className="h-[1px] w-24 bg-gold shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
          </motion.div>
          
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white font-medium mb-6 drop-shadow-2xl flex flex-wrap justify-center gap-x-6 gap-y-4"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {words.map((part, i, arr) => (
              <span key={i} className="block whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-white via-pearl to-white/80 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                {part}{i !== arr.length - 1 && <span className="text-gold mx-2">.</span>}
                {i === arr.length - 1 && <span className="text-gold hidden">.</span>}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {content.home.hero.sub_heading}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 w-full px-6 sm:px-0"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Link
              to="/#voter-info"
              className="btn-navy w-full sm:w-auto text-center"
            >
              VOTE NOW
            </Link>

            <a
              href={content.urls.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crimson w-full sm:w-auto text-center"
            >
              {content.home.hero.buttons.contribute}
            </a>
            
            <a
              href={content.urls.volunteer}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white/20 text-white hover:border-gold hover:text-gold hover:bg-gold/5 w-full sm:w-auto text-center"
            >
              {content.home.hero.buttons.volunteer}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-12 z-20 hidden md:flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/50 text-[10px] font-sans font-bold tracking-[0.3em] uppercase rotate-[-90deg] origin-left translate-y-6">Scroll</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-gold via-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
