import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Building2, BriefcaseBusiness, Home, Shield, Users, Truck, HandCoins } from "lucide-react";

const priorities = [
  {
    icon: Building2,
    title: "World-Class VA System",
    body: "Build a world-class VA system with restored staffing and modern facilities.",
  },
  {
    icon: Heart,
    title: "Reduce Wait Times",
    body: "Reduce wait times and expand access to care across South Metro Atlanta.",
  },
  {
    icon: Users,
    title: "Mental Health Services",
    body: "Expand mental health, PTSD treatment, and suicide prevention services.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Veteran-Owned Businesses",
    body: "Support veteran-owned businesses through capital access and federal contracting.",
  },
  {
    icon: HandCoins,
    title: "Workforce Transition",
    body: "Strengthen workforce transition programs and job pipelines with local partners.",
  },
  {
    icon: Home,
    title: "Affordable Housing",
    body: "Expand affordable housing, VA home loans, and homelessness prevention programs.",
  },
  {
    icon: Shield,
    title: "Protect Benefits",
    body: "Protect and fully fund veterans' benefits.",
  },
  {
    icon: Truck,
    title: "Community Access",
    body: "Bring VA services closer to home through community clinics and mobile access points.",
  },
];

const Veterans = () => {
  return (
    <main className="bg-pearl min-h-screen selection:bg-navy selection:text-white">
      <Navigation />

      {/* Cinematic Hero */}
      <section className="bg-navy pt-40 pb-24 relative overflow-hidden rounded-b-[3rem] shadow-glass border-b border-navy/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08)_0%,transparent_70%)]" />
        {/* Subtle star pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="font-sans font-bold uppercase tracking-[0.3em] text-white/70 text-xs">Policy Platform</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-lg"
          >
            Supporting Our <span className="text-gold">Veterans</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-lg md:text-2xl text-white/80 font-light max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            Those who served our country deserve world-class care, opportunity, and respect when they return home.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl mx-auto px-6">
          {/* Lead-in */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <p className="font-serif text-xl md:text-2xl text-navy leading-[1.9] font-light">
              Dr. Heavenly believes that those who have served our country deserve nothing less than world-class care, opportunity, and respect when they return home. As the daughter of a veteran, this commitment is deeply personal. With more than 700,000 veterans in Georgia, including thousands in South Metro Atlanta, our responsibility is clear — deliver real results, not broken promises.
            </p>
          </motion.div>

          {/* Body Paragraphs */}
          <div className="space-y-12 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative pl-8 border-l-2 border-crimson/30"
            >
              <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.9] font-light">
                She is committed to strengthening access to care, expanding economic opportunity, and ensuring every veteran and their family has the support they have earned.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative pl-8 border-l-2 border-gold/30"
            >
              <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.9] font-light">
                Dr. Heavenly will fight to restore critical VA staffing, modernize outdated facilities, and reduce long wait times so veterans can access high-quality care when and where they need it. She will also prioritize mental health by expanding access to PTSD treatment, suicide prevention, and substance use programs — because the invisible wounds of service must be treated with urgency and compassion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-8 border-l-2 border-navy/20"
            >
              <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.9] font-light">
                Beyond healthcare, Dr. Heavenly understands that veterans are a powerful economic force. With over 100,000 veteran-owned businesses in Georgia, she will work to expand access to capital, federal contracts, and entrepreneurship resources — while restoring critical federal investments that support veteran small business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative pl-8 border-l-2 border-crimson/30"
            >
              <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.9] font-light">
                She is also committed to ensuring veterans can successfully transition into civilian life by strengthening workforce programs, partnering with local colleges and HBCUs, and connecting veterans to good-paying jobs right here in Georgia's 13th District.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-8 border-l-2 border-gold/30"
            >
              <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.9] font-light">
                Housing is another critical priority. Dr. Heavenly believes no veteran should face housing insecurity. She will work to expand VA home loan programs, increase access to affordable housing, and invest in supportive and transitional housing across South Metro communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative pl-8 border-l-2 border-navy/20"
            >
              <p className="font-serif text-lg md:text-xl text-navy/80 leading-[1.9] font-light">
                Finally, Dr. Heavenly will always stand firm in protecting veterans' benefits — opposing cuts or privatization efforts and ensuring every veteran receives the full benefits they have earned, without unnecessary delays or barriers.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-6 mb-20">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-navy/15 to-navy/15" />
            <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_12px_rgba(255,215,0,0.6)]" />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-navy/15 to-navy/15" />
          </div>
        </div>
      </section>

      {/* Priorities Grid */}
      <section className="pb-24 md:pb-40">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-4">
              Dr. Heavenly's Priorities
            </h2>
            <div className="h-[2px] w-16 bg-gold mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="relative bg-white rounded-[2rem] p-7 shadow-glass hover:shadow-glass-hover border border-navy/5 transition-all duration-500 hover:-translate-y-2 h-full">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-crimson/10 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-navy/60 group-hover:text-crimson transition-colors duration-500" />
                    </div>
                    <h3 className="font-sans font-bold text-base text-navy mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-serif text-sm text-navy/60 leading-relaxed font-light">
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

export default Veterans;
