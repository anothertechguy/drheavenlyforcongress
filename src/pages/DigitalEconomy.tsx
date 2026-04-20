import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, TrendingUp, Users, BookOpen, Scale, Wallet } from "lucide-react";
import heroImage from "../assets/digital-economy-hero.png";

const priorities = [
  {
    icon: Scale,
    title: "Clear Regulatory Framework",
    body: "Create a clear and responsible regulatory framework for cryptocurrency and digital assets.",
  },
  {
    icon: Shield,
    title: "Consumer Protection",
    body: "Protect consumers and investors from fraud, abuse, and unnecessary risk.",
  },
  {
    icon: TrendingUp,
    title: "Support Innovation",
    body: "Support innovation and keep emerging technology jobs and investment in the United States.",
  },
  {
    icon: Users,
    title: "Standards for Business",
    body: "Provide businesses and developers with clear standards for operating responsibly.",
  },
  {
    icon: Wallet,
    title: "Individual Access Rights",
    body: "Protect the right of individuals to safely access and use digital assets.",
  },
  {
    icon: BookOpen,
    title: "Education & Workforce",
    body: "Invest in education and workforce training for the future digital economy.",
  },
];

const DigitalEconomy = () => {
  return (
    <main className="bg-pearl min-h-screen selection:bg-navy selection:text-white">
      <Navigation />

      {/* Cinematic Hero with Background Image */}
      <section className="relative pt-40 pb-28 overflow-hidden rounded-b-[3rem] shadow-glass border-b border-navy/10">
        {/* Background Image */}
        <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-navy/80" />
        {/* Radial gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,215,0,0.12)_0%,transparent_60%)]" />

        <div className="container max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="font-sans font-bold uppercase tracking-[0.3em] text-gold/80 text-xs">Policy Platform</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-lg"
          >
            Digital <span className="text-gold">Economy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-lg md:text-2xl text-white/85 font-light max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            Building the future of our economy with innovation, accountability, and opportunity for every American.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl mx-auto px-6">
          {/* Lead-in with accent background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-glass border border-navy/5 mb-16"
          >
            <div className="absolute -top-3 left-10 bg-gold text-navy font-sans font-bold text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-md">
              Overview
            </div>
            <p className="font-serif text-xl md:text-2xl text-navy leading-[1.9] font-light">
              Dr. Heavenly believes the future of our economy must be built with both innovation and accountability. That means developing a clear and responsible framework for cryptocurrency and digital assets that addresses legitimate regulatory concerns while supporting economic growth and American competitiveness.
            </p>
          </motion.div>

          {/* Body Paragraphs with enhanced styling */}
          <div className="space-y-10 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative pl-8 border-l-[3px] border-gold bg-gradient-to-r from-gold/[0.04] to-transparent py-6 pr-6 rounded-r-2xl"
            >
              <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.9] font-light">
                She supports smart, balanced regulation that protects consumers and investors, prevents fraud and abuse, and promotes the stability of our financial system — without stifling emerging technologies or pushing innovation overseas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative pl-8 border-l-[3px] border-crimson bg-gradient-to-r from-crimson/[0.04] to-transparent py-6 pr-6 rounded-r-2xl"
            >
              <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.9] font-light">
                Heavenly will work to establish clear rules of the road for businesses, developers, and innovators so they can operate with confidence, transparency, and accountability here in the United States. She also supports the right of individuals to safely access and use digital assets, while ensuring strong safeguards are in place wherever risk, custody, and financial security are involved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-8 border-l-[3px] border-navy/40 bg-gradient-to-r from-navy/[0.03] to-transparent py-6 pr-6 rounded-r-2xl"
            >
              <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.9] font-light">
                Equally important, Dr. Heavenly believes our communities must prepare for the opportunities of the digital economy. She supports investing in public education and workforce development so residents have the tools and knowledge to understand digital currency, build wealth responsibly, and participate in the future of innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Priorities Grid — with colored background section */}
      <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.08)_0%,transparent_50%)]" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-4">
              Dr. Heavenly's <span className="text-gold">Priorities</span>
            </h2>
            <div className="h-[2px] w-16 bg-gold mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {priorities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="relative bg-white/[0.07] backdrop-blur-sm rounded-[2rem] p-8 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.12] h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-500">
                      <Icon className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-500" />
                    </div>
                    <h3 className="font-sans font-bold text-lg text-white mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-serif text-base text-white/60 leading-relaxed font-light">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DigitalEconomy;
