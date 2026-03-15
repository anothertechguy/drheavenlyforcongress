import { motion, Variants } from "framer-motion";
import content from "@/data/content.json";
import drHeavImage from "../assets/dr-heavenly-flag.jpg";
import SocialLinks from "@/components/SocialLinks";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggeredChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const VocalLeadership = () => {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-24 lg:pb-48 bg-pearl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 hidden md:block" />
      
      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-10%" }}
           className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center"
        >
          {/* Image Column */}
          <motion.div variants={itemVariants} className="relative w-full max-w-[500px] mx-auto lg:max-w-none aspect-[4/5] lg:aspect-auto lg:h-[700px] xl:h-[800px]">
            {/* High-end Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-gold/30 via-crimson/20 to-navy/10 blur-3xl rounded-[3rem] opacity-70 mix-blend-multiply transition-opacity duration-1000 ease-in-out" />
            
            {/* Image Container */}
            <motion.div 
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/50 z-10"
              animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={drHeavImage} 
                alt="Dr. Heavenly Kimes" 
                className="w-full h-full object-cover object-[center_top] contrast-[1.15] saturate-[1.1] brightness-[1.05]" 
              />
              {/* Gloss/Shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 via-transparent to-transparent pointer-events-none shadow-[inset_0_-20px_40px_rgba(0,0,0,0.4)]" />
            </motion.div>
            
            {/* Decorative subtle pulse */}
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gold/10 rounded-full blur-2xl z-0 animate-pulse" />
          </motion.div>

          {/* Text Column */}
          <div className="flex flex-col justify-center">
             <motion.h2 
               variants={itemVariants}
               className="heading-display text-5xl md:text-6xl lg:text-7xl mb-12 leading-[1.1]"
             >
               {content.home.vocal_leadership.heading}
             </motion.h2>

             <motion.div variants={itemVariants} className="space-y-8 pr-0 lg:pr-8">
               {content.home.vocal_leadership.paragraphs.map((text, i) => (
                 <p key={i} className="font-serif text-xl md:text-2xl text-navy/80 leading-relaxed font-light">
                   {text}
                 </p>
               ))}
               <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                 <a href={content.urls.about} className="btn-navy">
                   {content.home.vocal_leadership.button}
                 </a>
                 <div className="hidden sm:block w-[1px] h-12 bg-navy/10" />
                 <SocialLinks 
                   iconClassName="w-12 h-12 bg-white border-navy/10 text-navy hover:border-crimson hover:bg-crimson hover:text-white shadow-sm"
                 />
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VocalLeadership;
