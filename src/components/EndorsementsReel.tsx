import { motion } from "framer-motion";
import endorsement1 from "../assets/endorsements/endorsement1.webp";
import endorsement2 from "../assets/endorsements/endorsement2.webp";
import endorsement3 from "../assets/endorsements/endorsement3.webp";
import endorsement4 from "../assets/endorsements/endorsement4.webp";
import endorsement5 from "../assets/endorsements/endorsement5.webp";
import endorsement6 from "../assets/endorsements/endorsement6.webp";
import endorsement7 from "../assets/endorsements/endorsement7.webp";
import endorsement8 from "../assets/endorsements/endorsement8.webp";
import endorsement9 from "../assets/endorsements/endorsement9.webp";
import endorsement10 from "../assets/endorsements/endorsement10.webp";
import endorsement11 from "../assets/endorsements/endorsement11.jpeg";
import endorsement12 from "../assets/endorsements/endorsement12.jpeg";
import endorsement13 from "../assets/endorsements/endorsement13.jpeg";

const endorsements = [
  endorsement11, endorsement12, endorsement13,
  endorsement1, endorsement2, endorsement3, endorsement4, endorsement5,
  endorsement6, endorsement7, endorsement8, endorsement9, endorsement10
];

const EndorsementsReel = () => {
  return (
    <section id="endorsements" className="py-20 bg-pearl relative overflow-hidden">
      <div className="container text-center mb-12 relative z-10 px-6">
        <h2 className="heading-display text-4xl md:text-5xl text-navy mb-4">
          Trusted by Leaders Across Georgia
        </h2>
        <div className="h-[2px] w-16 bg-gold mx-auto mb-6" />
        <p className="font-serif text-lg md:text-xl text-navy/80 font-light max-w-2xl mx-auto italic">
          Discover who stands with Dr. Heavenly. A continuous testament to her commitment, vision, and proven track record of genuine community service.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-r from-pearl to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-l from-pearl to-transparent z-20 pointer-events-none" />

        <motion.div
           className="flex gap-6 md:gap-12 w-max px-6"
           animate={{
             x: ["0%", "-50%"]
           }}
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 40
           }}
        >
          {/* We map double to create an infinite loop effect */}
          {[...endorsements, ...endorsements].map((imgUrl, index) => (
             <div 
               key={index} 
               className="w-[280px] md:w-[350px] shrink-0 rounded-[2rem] overflow-hidden shadow-glass hover:shadow-glass-hover border border-navy/5 bg-white/50 backdrop-blur-sm transition-shadow duration-500"
             >
               <img 
                 src={imgUrl} 
                 alt={`Endorsement ${index + 1}`} 
                 className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                 loading="lazy"
               />
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EndorsementsReel;
