import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

import Footer from "@/components/Footer";

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
  endorsement6, endorsement7, endorsement8, endorsement9, endorsement10,
];

const Endorsements = () => {
  return (
    <main className="bg-pearl min-h-screen selection:bg-navy selection:text-white">
      <Navigation />

      {/* Cinematic Hero */}
      <section className="bg-navy pt-40 pb-24 relative overflow-hidden rounded-b-[3rem] shadow-glass border-b border-navy/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08)_0%,transparent_70%)]" />
        <div className="container max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="font-sans font-bold uppercase tracking-[0.3em] text-white/70 text-xs shadow-sm">Community Leaders</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-lg"
          >
            Endorsed <span className="text-gold">&</span> Trusted
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-lg md:text-2xl text-white/80 font-light max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            A growing coalition of community leaders, organizations, and elected officials stand with Dr. Heavenly — a testament to her commitment, vision, and proven track record of genuine service.
          </motion.p>
        </div>
      </section>

      {/* Endorsements Masonry Grid */}
      <section className="py-20 md:py-32">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-4">
              Voices of Support
            </h2>
            <div className="h-[2px] w-16 bg-gold mx-auto mb-6" />
            <p className="font-serif text-lg md:text-xl text-navy/70 font-light max-w-2xl mx-auto">
              From pastors and physicians to business owners and community organizers — the people who know Dr. Heavenly best are standing behind her candidacy.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {endorsements.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-glass hover:shadow-glass-hover border border-navy/5 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2">
                  {/* Subtle shine overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  <img
                    src={img}
                    alt={`Endorsement ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Endorsements;
