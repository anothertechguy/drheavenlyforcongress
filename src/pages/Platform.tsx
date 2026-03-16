import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VoterInformation from "@/components/VoterInformation";
import heroImage from "../assets/helping patient.webp";
import drHeav1 from "../assets/drheav4.webp";

const platformItems = [
  {
    title: "Access to Healthcare",
    body: "As a doctor and local dentist, I've seen firsthand how rising premiums and out-of-pocket costs crush family budgets. In Congress, I will fight to lower the cost of prescription drugs, protect coverage for pre-existing conditions, and make sure every family in our district has access to the quality, affordable healthcare they deserve.",
  },
  {
    title: "Generational Wealth",
    body: "As a small business owner, I know what it takes to create jobs and meet a payroll. Washington needs to do more to support our local entrepreneurs. I will champion policies that cut red tape, expand access to capital, and invest in our community to bring good-paying jobs and economic opportunity back to the 13th District.",
  },
  {
    title: "Environmental Justice",
    body: "As a healthcare professional, I know clean air and water are basic rights. The Rockdale chemical plant explosion was a devastating reminder that our families are on the front lines of environmental dangers. In Congress, I will fight to hold corporate polluters accountable and secure federal funding to ensure every family has a healthy environment to call home.",
  },
  {
    title: "Modern Transit",
    body: "As a business owner, I know our economy moves at the speed of our transit. Residents in Clayton County and across the district are stuck in traffic, disconnected from jobs and opportunities. In Congress, I will champion federal investment to improve our transit and create the modern, reliable system our community deserves.",
  },
  {
    title: "Education",
    body: "Every child in our district deserves a world-class education that prepares them for the future. As a mother, I'm committed to ensuring our public schools have the federal resources they need to succeed. I'll work to support our teachers, make college more affordable, and tackle the student debt crisis so that the next generation has every opportunity to thrive.",
  },
  {
    title: "Criminal Justice Reform",
    body: "A safe community and a fair justice system are the foundation of a thriving district. We need smart reforms that increase accountability and build trust between law enforcement and the communities they serve. I will be a voice for every family, fighting to protect our civil rights, secure our voting rights, and ensure justice is applied equally to all.",
  },
];

const Platform = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <main className="bg-background min-h-screen relative selection:bg-gold/30 selection:text-white">
      <Navigation />

      {/* Cinematic Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[85vh] flex items-center bg-navy overflow-hidden pt-16 md:pt-32">
        {/* Parallax Image Background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
          <img
            src={heroImage}
            alt="Dr. Heavenly helping patient"
            className="w-full h-full object-cover object-[20%_30%] md:object-[30%_30%] lg:object-[center_30%] opacity-90 contrast-110 saturate-110"
          />
        </motion.div>
        
        {/* High-end Overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-l from-navy/95 via-navy/60 to-navy/20" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-pearl via-navy/20 to-transparent" />
        <div className="absolute inset-0 z-0 bg-navy/15 mix-blend-multiply" />

        <div className="container relative z-10 flex justify-end pb-8 md:pb-0 h-full">
          <div className="max-w-3xl text-right flex flex-col items-end mt-auto md:mt-0 md:justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-end gap-4 mb-4 md:mb-8"
            >
              <span className="font-sans font-bold uppercase tracking-[0.4em] text-gold text-xs md:text-sm drop-shadow-md">
                Our Vision
              </span>
              <div className="h-[1px] w-16 bg-gold shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-display text-5xl md:text-8xl lg:text-9xl text-white mb-6 md:mb-8 leading-[1.05] drop-shadow-lg"
            >
              Platform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-white/90 to-white/60 drop-shadow-md">Map</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-lg sm:text-xl md:text-3xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-xl"
            >
              I am fighting for the issues that matter most to District 13 families. We're building a stronger future together.
            </motion.p>
          </div>
        </div>

        {/* Diagonal Cut out to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-pearl to-transparent z-20" />
      </section>

      {/* High-End Luxury Divider */}
      <div className="relative w-full bg-pearl pt-8 pb-4 flex items-center justify-center z-20 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-6 flex items-center gap-4 hidden md:flex">
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-crimson to-crimson rounded-full origin-right" 
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="h-2 w-2 rounded-full bg-gold shadow-[0_0_15px_rgba(255,215,0,0.8)]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] w-24 bg-gold shadow-[0_0_10px_rgba(255,215,0,0.6)] rounded-full origin-center" 
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="h-2 w-2 rounded-full bg-gold shadow-[0_0_15px_rgba(255,215,0,0.8)]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#3c3b6e] to-[#3c3b6e] rounded-full origin-left" 
          />
        </div>
      </div>

      {/* Dynamic Sticky Scrolling Issues List */}
      <section className="py-12 md:py-32 bg-pearl relative z-10" ref={containerRef}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Sticky Title Area */}
            <div className="lg:col-span-5 lg:sticky lg:top-40 hidden lg:block">
              <h2 className="heading-display text-5xl md:text-6xl text-navy mb-8 leading-[1.1]">
                Delivering Real Results.
              </h2>
              <p className="font-serif text-2xl text-navy/70 max-w-md leading-relaxed font-light mb-12">
                Discover the key pillars of our campaign to bring health, wealth, and opportunity back to our communities.{" "}
                <a
                  href="/drheavenlyforcongress/memorandum.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson font-semibold underline decoration-crimson/40 underline-offset-4 hover:decoration-crimson transition-all"
                >
                  See my memorandum here →
                </a>
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 w-full max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-crimson/5 to-transparent z-10 pointer-events-none" />
                <img 
                  src={drHeav1} 
                  alt="Dr. Heavenly Kimes" 
                  className="relative z-0 w-full object-cover object-center aspect-[4/5] hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>

            {/* Right Scrolling Content Area */}
            <div className="lg:col-span-7 mt-8 md:mt-0 relative pb-24 md:pb-0">
              {platformItems.map((issue, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index === 0 ? 0.2 : 0 }}
                  className="group relative md:static sticky mb-4 md:mb-24 shadow-2xl rounded-[2.2rem]"
                  // Calculate dynamic top offset for mobile stacking: base top (e.g., 6rem) + offset per card
                  style={{ top: `calc(5rem + ${index * 1.5}rem)` }}
                >
                  {/* Animated USA border wrapper */}
                  <div className="usa-border p-[3px] rounded-[2.2rem] shadow-2xl">
                    {/* Card Content */}
                    <div className="relative bg-white backdrop-blur-xl p-8 md:p-14 rounded-[2rem] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700 md:group-hover:-translate-y-2 overflow-hidden h-full">
                    
                      {/* Watermark Number */}
                      <div className="absolute -top-4 -right-2 text-[8rem] md:text-[10rem] leading-none font-display text-gold/[0.18] select-none pointer-events-none group-hover:text-gold/[0.28] transition-colors duration-700">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Subtle inner corner glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full" />

                      <h3 className="heading-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6 relative z-10 group-hover:text-navy-light transition-colors duration-500">
                        {issue.title}
                      </h3>
                      
                      <div className="w-12 h-1 bg-gold/50 mb-8 md:group-hover:w-full transition-all duration-1000 ease-out relative z-10" />
                      
                      <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.8] font-light relative z-10">
                        {issue.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      <VoterInformation />
      <Footer />
    </main>
  );
};

export default Platform;
