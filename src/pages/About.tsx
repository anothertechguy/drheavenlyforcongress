import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "../assets/dr-heavenly-couple.webp";
import congressBg from "../assets/congress-bg.webp";

const letterParagraphs = [
  "My name is Dr. Heavenly Elaine Kimes, and I am applying for the job of your next Representative in the United States Congress.",
  "My resume follows, but the story is simple: I am not a career politician. I am a doctor, an entrepreneur, a wife, and a mother who has built a life and several businesses on a foundation of service, discipline, and a deep understanding of people.",
  "As a proud double HBCU graduate of Florida A&M University (Go Rattlers!) and Meharry Medical College, I hold multiple board certifications, but my most important education came from you—my neighbors and patients.",
  "As a local dentist, I didn't just fix smiles; I provided the fresh start and confidence that comes with them. As a small business CEO, I learned that a successful practice is about more than just a business—it's also about meeting payroll, creating jobs, and building a stronger community.",
  "My husband, Dr. Damon Kimes, is also a physician. Our household is, and has always been, dedicated to the health and well-being of others. It is the core of who we are.",
  "And yes, for the past decade, I have navigated one of the most demanding and high-pressure public environments imaginable. I have learned how to communicate with a national audience, how to stand firm in my convictions under intense scrutiny, and how to thrive when every word and action is being judged. Some may see that as a different world; I see it as the perfect training ground for the reality of Washington, D.C.",
  "I am running for Congress because I believe it's time to hire someone with a proven track record of real-world results, not just political promises. I have the qualifications, I have the experience, and I have the strength to be the new voice you deserve.",
  "I am ready to get to work."
];

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);
  const resumeContainerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const { scrollYProgress: sigProgress } = useScroll({ 
    target: signatureRef, 
    offset: ["start 85%", "end 70%"] 
  });
  const sigClip = useTransform(sigProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  const { scrollYProgress: resumeProgress } = useScroll({ target: resumeContainerRef, offset: ["start end", "end start"]});
  const resumeBgY = useTransform(resumeProgress, [0, 1], ["-10%", "10%"]);

  return (
    <main className="bg-pearl min-h-screen selection:bg-navy selection:text-white">
      <Navigation />
      
      {/* 
        HERO SECTION 
        Cinematic full-height reveal
      */}
      <section ref={heroRef} className="relative min-h-[90svh] flex items-center justify-center bg-navy overflow-hidden pt-20">
        <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
          <img
            src={heroImage}
            alt="Dr. Heavenly and Family"
            className="object-cover w-full h-full object-center opacity-50 mix-blend-luminosity brightness-75 contrast-125"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-pearl via-navy/30 to-navy/10 z-10" />
        
        <div className="relative z-20 container text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="font-sans font-bold uppercase tracking-[0.3em] text-gold text-xs">Meet The Candidate</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl"
          >
            Dr. Heavenly Kimes
          </motion.h1>
        </div>
      </section>

      {/* 
        LETTER SECTION 
        Magazine-style editorial layout
      */}
      <section className="relative -mt-20 z-30 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="bg-white rounded-t-[3rem] shadow-glass p-10 md:p-20 border border-white/50 relative overflow-hidden"
          >
            {/* Elegant Background Grid for the Letter */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
            
            <div className="relative z-10 flex flex-col">
              
              {/* Top Title - Typewriter Effect */}
              <div className="mb-12 md:mb-16 border-b border-navy/10 pb-8">
                <motion.h2 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05, delayChildren: 0.5 }
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="heading-display text-4xl md:text-5xl text-navy mb-5 leading-tight flex flex-wrap"
                >
                  {Array.from("A Letter To District 13").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className={char === " " ? "w-3" : ""}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-[2px] bg-gold mb-5" 
                />
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  viewport={{ once: true }}
                  className="font-sans text-sm tracking-widest uppercase text-navy/40 font-bold"
                >
                  A message to the community
                </motion.p>
              </div>

              {/* Text Area */}
              <div className="w-full xl:max-w-5xl flex flex-col space-y-8">
                {letterParagraphs.map((p, index) => {
                  // Style the HBCU grad paragraph distinctly
                  if (p.includes("HBCU")) {
                    return (
                      <div key={index} className="relative my-10 md:my-16">
                        <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 md:w-[6px] bg-gradient-to-b from-gold via-gold/80 to-gold/20 rounded-full" />
                        <p className="font-serif text-2xl lg:text-3xl text-navy font-medium italic leading-relaxed break-words pl-2">
                          "{p}"
                        </p>
                      </div>
                    );
                  }
                  return <p key={index} className="font-serif text-xl md:text-2xl text-navy/80 leading-relaxed font-light">{p}</p>;
                })}
                
                {/* Signature Space */}
                <div ref={signatureRef} className="mt-16 pt-8 border-t border-navy/10">
                  <p className="font-display font-medium text-2xl text-navy mb-2">
                    Sincerely,
                  </p>
                  <motion.div style={{ clipPath: sigClip }} className="inline-block relative">
                    <p className="font-signature text-5xl md:text-7xl text-navy mt-6 transform -rotate-2 origin-left inline-block pr-8">
                      Dr. Heavenly
                    </p>
                    
                    {/* Fake Pen Nib indicator */}
                    <motion.div 
                      className="absolute right-0 bottom-2 w-1 h-8 bg-gold/50 rounded-full blur-[2px]"
                      style={{ opacity: useTransform(sigProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
                    />
                  </motion.div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        RESUME SECTION 
      */}
      <section ref={resumeContainerRef} className="py-16 md:py-32 bg-navy relative overflow-hidden">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: resumeBgY, scale: 1.1 }}>
          <img
            src={congressBg}
            alt="US Capitol"
            className="w-full h-full object-cover object-[center_top] opacity-40 mix-blend-screen"
          />
        </motion.div>
        {/* Gradients to blend edges */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-pearl via-transparent to-pearl" />
        <div className="absolute inset-0 z-0 bg-navy/60" />
        
        <div className="container max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#faf9f6] rounded-[3rem] shadow-[0_30px_80px_rgba(10,20,35,0.08)] border border-white/80 p-8 md:p-16 lg:p-20 relative"
          >
            {/* Header */}
            <div className="mb-16 text-center">
              <h2 className="heading-display text-4xl md:text-5xl text-navy mb-4">Dr. Heavenly Kimes <span className="opacity-50 font-normal">-</span> Resume</h2>
              
              {/* Animated Luxury Divider */}
              <div className="flex items-center justify-center gap-4 my-8 overflow-hidden w-full max-w-xs mx-auto">
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-crimson to-crimson origin-right" 
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                />
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[1px] w-12 bg-gold shadow-[0_0_8px_rgba(255,215,0,0.4)] origin-center" 
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                />
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#3c3b6e] to-[#3c3b6e] origin-left" 
                />
              </div>

              <p className="mt-4 font-sans text-xs md:text-sm tracking-widest text-navy/50 uppercase font-medium">
                heavenly@drheavenlyforgeorgia.com | Resident of Georgia's 13th District
              </p>
            </div>

            <div className="space-y-12">
              {/* Objective Block */}
              <div className="relative group">
                {/* Static 3D Shadow Backdrop */}
                <div className="absolute inset-x-6 -bottom-4 top-4 bg-navy/5 blur-xl rounded-full" />
                <div className="relative bg-white p-8 shadow-sm border border-navy/5 rounded-2xl">
                  <h3 className="font-sans font-bold tracking-[0.2em] uppercase text-navy text-xs mb-4">Objective</h3>
                  <p className="font-serif text-lg md:text-xl text-navy leading-relaxed">
                    To earn the trust and the vote of the people of Georgia's 13th District to serve as their next Representative in the United States Congress, applying over two decades of experience in healthcare, small business leadership, and high-stakes public communication to deliver tangible results for our families.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-sans font-bold tracking-[0.2em] uppercase text-gold text-xs mb-8 ml-2 border-l-2 border-gold pl-4">Professional Experience</h3>
                
                <div className="space-y-8">
                  {/* Experience Card 1 */}
                  <div className="relative">
                    <div className="absolute inset-x-6 -bottom-4 top-4 bg-navy/5 blur-xl rounded-full" />
                    <div className="relative bg-white p-8 shadow-sm border border-navy/5 rounded-2xl">
                      <h4 className="heading-display text-2xl text-navy mb-2">CEO & Founder <span className="font-serif italic font-light opacity-60 ml-2">Heavenly Dental Associates, Inc.</span></h4>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-crimson mb-6">Atlanta, GA</p>
                      <ul className="space-y-3 font-serif text-base md:text-lg text-navy leading-relaxed list-disc list-outside ml-6 marker:text-gold/50">
                        <li>Established and managed all aspects of a thriving dental practice, overseeing a team of professionals and ensuring the delivery of high-quality, compassionate healthcare to thousands of patients.</li>
                        <li>Developed and managed multi-million dollar annual budgets, consistently meeting payroll and investing in new technology to improve patient care.</li>
                        <li>Navigated complex healthcare regulations and insurance policies, gaining an expert-level understanding of the real-world impacts of health policy.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Experience Card 2 */}
                  <div className="relative">
                    <div className="absolute inset-x-6 -bottom-4 top-4 bg-navy/5 blur-xl rounded-full" />
                    <div className="relative bg-white p-8 shadow-sm border border-navy/5 rounded-2xl">
                      <h4 className="heading-display text-2xl text-navy mb-6">Author, Consultant & Public Speaker</h4>
                      <ul className="space-y-3 font-serif text-base md:text-lg text-navy leading-relaxed list-disc list-outside ml-6 marker:text-gold/50">
                        <li>Authored the best-selling book, "Dr. Heavenly's Business Prescriptions," a practical guide designed to help aspiring entrepreneurs scale their businesses.</li>
                        <li>Sought-after national speaker on topics of business development, financial literacy, and personal empowerment.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Experience Card 3 */}
                  <div className="relative">
                    <div className="absolute inset-x-6 -bottom-4 top-4 bg-navy/5 blur-xl rounded-full" />
                    <div className="relative bg-white p-8 shadow-sm border border-navy/5 rounded-2xl">
                      <h4 className="heading-display text-2xl text-navy mb-6">Co-Founder & Investor</h4>
                      <ul className="space-y-3 font-serif text-base md:text-lg text-navy leading-relaxed list-disc list-outside ml-6 marker:text-gold/50">
                        <li>Successfully owns and manages a diverse portfolio of commercial and residential real estate properties.</li>
                        <li>Co-owned and managed a successful mortgage company, providing expertise in both the financial services and housing sectors.</li>
                        <li>Co-founder of Heavenly Beauty, a successful retail enterprise within the multi-billion dollar beauty industry.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Skills Split */}
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                {/* Education */}
                <div className="relative">
                  <div className="absolute inset-x-4 -bottom-4 top-4 bg-navy/10 blur-xl rounded-full" />
                  <div className="bg-navy p-8 md:p-10 shadow-lg border border-navy-light/10 rounded-2xl text-white relative h-full">
                    <h3 className="font-sans font-bold tracking-[0.2em] uppercase text-gold text-xs mb-8 ml-2 border-l-2 border-gold pl-4">Education & Certifications</h3>
                    <ul className="space-y-6 font-serif text-base text-white/95 leading-relaxed">
                      <li>
                        <strong className="text-white font-medium block mb-0.5 text-lg">Meharry Medical College</strong>
                        <span className="text-sm">Doctor of Dental Surgery (DDS)</span>
                      </li>
                      <li>
                        <strong className="text-white font-medium block mb-0.5 text-lg">Florida A&M University</strong>
                        <span className="text-sm">Bachelor of Science in Biology, Minor in Chemistry.</span>
                        <div className="mt-2 text-[10px] tracking-widest font-sans font-bold uppercase text-gold/80">Recipient, Full Army ROTC National Scholarship</div>
                      </li>
                      <li className="pt-4 border-t border-white/10">
                        <strong className="text-white font-medium block mb-2 text-lg">Licenses & Certifications</strong>
                        <ul className="list-disc list-outside ml-4 mt-2 space-y-2 marker:text-gold/50 text-sm">
                          <li>Board Certified Dentist, Member of ADA, GDA, and AGD</li>
                          <li>Current Real Estate License & Insurance License</li>
                          <li>Series 65 Investment Adviser Law Examination</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div className="relative">
                  <div className="absolute inset-x-6 -bottom-4 top-4 bg-navy/5 blur-xl rounded-full" />
                  <div className="relative bg-white p-8 md:p-10 shadow-sm border border-navy/5 rounded-2xl h-full flex flex-col justify-between">
                    <div>
                      <h3 className="font-sans font-bold tracking-[0.2em] uppercase text-crimson text-xs mb-8 ml-2 border-l-2 border-crimson pl-4">Key Skills</h3>
                      <ul className="space-y-4 font-serif text-base text-navy leading-relaxed">
                        <li><strong className="text-navy font-medium">Healthcare Policy:</strong> Over 20 years of hands-on provider experience.</li>
                        <li><strong className="text-navy font-medium">Small Business Management:</strong> Track record of building and scaling successful companies.</li>
                        <li><strong className="text-navy font-medium">Financial Acumen:</strong> Financial management, and investment advising in mortgage & real estate.</li>
                        <li><strong className="text-navy font-medium">Public Communication:</strong> Clear messaging under intense national scrutiny.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        TESTIMONIALS SECTION 
      */}
      <section className="py-24 bg-pearl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="container max-w-7xl relative z-10 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 text-center"
          >
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-4">What Our Clients Say</h2>
            <div className="h-[2px] w-16 bg-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-glass border border-navy/5 relative"
            >
              <div className="text-gold text-8xl font-serif absolute -top-4 left-4 opacity-20">"</div>
              <p className="font-serif text-lg text-navy/80 font-light italic relative z-10 mb-8 mt-4">
                This was my second visit and I have never felt so safe and comfortable like this before. Her knowledge and care is undeniably 10 of 10. I would and am going to refer her to everyone because she's definitely worth it.
              </p>
              <div className="flex items-center gap-4 border-t border-navy/5 pt-6 mt-auto">
                <img src="https://drheavenlyforgeorgia.com/wp-content/uploads/2014/10/imageedit_39_5135534893.jpg" alt="Jason T." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-display text-xl text-navy">Jason T.</h4>
                  <p className="font-sans text-xs font-bold tracking-widest text-gold uppercase">Patient</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-glass border border-navy/5 relative"
            >
              <div className="text-gold text-8xl font-serif absolute -top-4 left-4 opacity-20">"</div>
              <p className="font-serif text-lg text-navy/80 font-light italic relative z-10 mb-8 mt-4">
                You will not be disappointed when you make your appointment with Smiles by Dr. Heavenly. I was nervous coming in, but everyone was kind, patient, and super helpful. The staff also goes the extra mile to find different resources to help you finance your services if you are unable to pay outright. 10/10 experience!!!
              </p>
              <div className="flex items-center gap-4 border-t border-navy/5 pt-6 mt-auto">
                <img src="https://drheavenlyforgeorgia.com/wp-content/uploads/2025/11/Gemini_Generated_Image_3raqa73raqa73raq-150x150.png" alt="Ruby L." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-display text-xl text-navy">Ruby L.</h4>
                  <p className="font-sans text-xs font-bold tracking-widest text-gold uppercase">Patient</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-glass border border-navy/5 relative"
            >
              <div className="text-gold text-8xl font-serif absolute -top-4 left-4 opacity-20">"</div>
              <p className="font-serif text-lg text-navy/80 font-light italic relative z-10 mb-8 mt-4">
                This was my second visit and I have never felt so safe and comfortable like this before. Her knowledge and care is undeniably 10 of 10. I would and am going to refer her to everyone because she's definitely worth it.
              </p>
              <div className="flex items-center gap-4 border-t border-navy/5 pt-6 mt-auto">
                <img src="https://drheavenlyforgeorgia.com/wp-content/uploads/2025/11/Gemini_Generated_Image_3raqa73raqa73raq-150x150.png" alt="Meisha R." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-display text-xl text-navy">Meisha R.</h4>
                  <p className="font-sans text-xs font-bold tracking-widest text-gold uppercase">Patient</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
