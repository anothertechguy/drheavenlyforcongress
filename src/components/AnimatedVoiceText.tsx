import { motion } from "framer-motion";

const AnimatedVoiceText = () => {
  return (
    <section className="py-8 md:py-12 bg-[#F5F5F0] relative overflow-hidden flex items-center justify-center">
      <div className="container px-6 max-w-6xl mx-auto flex items-center justify-center gap-4 md:gap-8">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="h-[2px] bg-crimson hidden md:block"
        />
        <h2 className="font-sans uppercase text-crimson flex items-center justify-center whitespace-nowrap">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base md:text-xl lg:text-2xl font-bold tracking-[0.2em] md:tracking-[0.25em]"
          >
            We need more than a vote, we need a
          </motion.span>
          <motion.span
            initial={{ scale: 0.6, opacity: 0, x: -20, filter: "blur(4px)" }}
            whileInView={{ scale: 1, opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2, delay: 0.2 }}
            className="inline-block text-3xl md:text-6xl lg:text-[4rem] font-black tracking-widest drop-shadow-[0_10px_20px_rgba(178,34,52,0.3)] ml-3 md:ml-6 leading-none"
          >
            VOICE!
          </motion.span>
        </h2>
      </div>
    </section>
  );
};

export default AnimatedVoiceText;
