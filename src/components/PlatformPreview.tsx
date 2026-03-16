import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import content from "@/data/content.json";
import ga13Map from "../assets/ga13-map.webp";

const PlatformPreview = () => {
  return (
    <section className="py-32 bg-navy relative overflow-hidden text-white">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          <motion.div 
            className="relative flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "150px 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="font-sans font-bold tracking-[0.2em] uppercase text-gold text-sm">
                {content.home.platform_preview.sub_heading}
              </span>
            </div>
            
            <motion.h2
              className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1] origin-left"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{
                opacity: 1,
                scale: [0.6, 1.08, 0.96, 1.03, 1.0],
                rotate: [0, -1.5, 1.5, -0.75, 0],
              }}
              viewport={{ once: true, margin: "150px 0px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              {content.home.platform_preview.heading}
            </motion.h2>
            
            <div className="space-y-8 text-pearl/90 font-serif text-xl md:text-2xl leading-[1.8] font-light">
              <p>
                {content.home.platform_preview.description.split('\n')[0].split(/(Accessible Healthcare|Building Community Wealth|Education & Opportunity|Supporting Families & Safer Communities|Small Business & Jobs)/g).map((part, i) => 
                  ['Accessible Healthcare', 'Building Community Wealth', 'Education & Opportunity', 'Supporting Families & Safer Communities', 'Small Business & Jobs'].includes(part) 
                    ? <strong key={i} className="font-semibold text-white tracking-wide">{part}</strong>
                    : part
                )}
              </p>
              <p className="font-sans text-base md:text-lg font-light opacity-90 leading-relaxed text-white/80">
                {content.home.platform_preview.description.split('\n')[1].split(/(SOLD OUT TO THE DISTRICT!! Platform)/g).map((part, i) =>
                  part === 'SOLD OUT TO THE DISTRICT!! Platform'
                    ? <Link key={i} to={content.urls.platform} className="font-bold text-white tracking-wide hover:text-gold transition-colors underline decoration-gold/50 underline-offset-4">{part}</Link>
                    : part
                )}
              </p>
            </div>
            
            <div className="mt-14 flex flex-wrap gap-4 items-center">
              <Link 
                to={content.urls.platform} 
                className="btn-gold"
              >
                {content.home.platform_preview.button}
              </Link>
              <a
                href="/drheavenlyforcongress/memorandum.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white/30 text-white hover:border-gold hover:text-gold py-5 px-10"
              >
                Memorandum
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="relative flex items-center justify-center w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px 0px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Dynamic Map Presentation */}
            <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center group mt-12 lg:mt-0">
              {/* Animated Glow Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-crimson/30 via-navy-light/50 to-gold/30 blur-[80px] rounded-full opacity-60 mix-blend-screen transition-opacity duration-1000 group-hover:opacity-100" />
              
              {/* Floating Map Image */}
              <motion.div 
                className="relative z-10 w-full h-full flex items-center justify-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
              >
                <img 
                  src={ga13Map} 
                  alt="Georgia's 13th Congressional District Map" 
                  className="w-full h-full object-contain rounded-2xl filter drop-shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-transform duration-1000 hover:scale-[1.05]"
                  loading="lazy"
                  decoding="async" 
                />
              </motion.div>

              {/* Sleek District Badge */}
              <div className="absolute bottom-4 -right-4 md:bottom-8 md:-right-8 z-20 bg-[#0a1128]/95 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                  <span className="font-sans text-[10px] tracking-widest uppercase text-white/50 font-bold">The Heart of Georgia</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white">District 13</h3>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
