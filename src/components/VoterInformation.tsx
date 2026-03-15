import { motion } from "framer-motion";
import { countyPaths } from "@/data/countyPaths";

const counties = [
  { name: "Rockdale", url: "https://rockdalecountyga.gov/board-of-elections", theme: "navy" },
  { name: "Newton", url: "https://newtoncountyga.gov/elections", theme: "crimson" },
  { name: "Clayton", url: "https://claytonelections.com", theme: "gold" },
  { name: "Gwinnett", url: "https://gwinnettcounty.com/elections", theme: "pattern" },
  { name: "DeKalb", url: "https://dekalbvotes.com", theme: "navy" },
  { name: "Henry", url: "https://henrycountyga.gov/elections", theme: "crimson" },
];

// Helper to return specific styling per theme
const getThemeClasses = (theme: string) => {
  switch (theme) {
    case "crimson":
      return {
        bgGradient: "from-[#B31942]/10 to-transparent",
        svgFill: "text-[#B31942]/[0.05]",
        svgStroke: "text-[#B31942]/20",
        hoverGradient: "group-hover:from-[#B31942]/20 group-hover:to-transparent"
      };
    case "gold":
      return {
        bgGradient: "from-[#CFB53B]/10 to-transparent",
        svgFill: "text-[#CFB53B]/[0.1]",
        svgStroke: "text-[#CFB53B]/30",
        hoverGradient: "group-hover:from-[#CFB53B]/20 group-hover:to-transparent"
      };
    case "pattern":
      return {
        bgGradient: "from-navy/10 to-transparent",
        svgFill: "text-navy/[0.05]",
        svgStroke: "text-navy/20",
        hoverGradient: "group-hover:from-navy/20 group-hover:to-transparent pattern-boxes pattern-white/5 pattern-size-4"
      };
    default: // navy
      return {
        bgGradient: "from-[#0A3161]/10 to-transparent",
        svgFill: "text-[#0A3161]/[0.05]",
        svgStroke: "text-[#0A3161]/20",
        hoverGradient: "group-hover:from-[#0A3161]/20 group-hover:to-transparent"
      };
  }
};

const VoterInformation = () => {
  return (
    <section id="voter-info" className="py-24 bg-pearl relative overflow-hidden scroll-mt-24">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-navy/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-crimson" />
            <span className="font-sans font-bold uppercase tracking-[0.3em] text-crimson text-xs">Voter Information</span>
            <div className="h-[1px] w-12 bg-crimson" />
          </div>
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
              Your Voice, Your Vote:<br />
              <span className="text-crimson">Election 2026</span>
            </h2>
            <div className="inline-block bg-navy/5 border border-navy/10 rounded-full px-6 py-2">
              <span className="font-sans font-bold text-navy text-sm uppercase tracking-widest">
                Primary Election: <span className="text-crimson">May 19, 2026</span>
              </span>
            </div>
          </div>
          <p className="font-serif text-lg md:text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-navy font-semibold">Early voting starts on April 27 and runs through May 15.</strong><br/>
            Find your official county election portal below to register, request an absentee ballot, or find your early voting location.
          </p>
        </motion.div>

        {/* Highlight Callout Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(10,20,35,0.05)] border border-navy/5 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
        >
          {/* Decorative Edge */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-crimson via-gold to-navy" />
          
          <div className="md:w-2/3">
            <h3 className="font-display text-2xl md:text-3xl text-navy mb-3">Important Note: Check Your District</h3>
            <p className="font-serif text-lg text-navy/80 leading-relaxed">
              Recent redistricting means your voting district may have changed. Ensure you are eligible to vote in Georgia's 13th Congressional District before heading to the polls.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end w-full">
            <a 
              href="https://mvp.sos.ga.gov/s/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-navy w-full text-center"
            >
              GEORGIA MY VOTER PAGE
            </a>
          </div>
        </motion.div>

        {/* 3x2 County Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {counties.map((county) => {
            const theme = getThemeClasses(county.theme);
            const pathData = countyPaths[county.name];

            return (
              <motion.div
                key={county.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-navy/10 border border-navy/10 transition-shadow duration-300 overflow-hidden flex flex-col h-[280px] will-change-transform"
              >
                {/* Background Map Graphic Base */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgGradient} ${theme.hoverGradient} transition-colors duration-500`} />
                
                {/* American Stripes Overlay on Hover (Subtle) */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_48%,rgba(179,25,66,0.03)_50%,transparent_52%)] bg-[length:100%_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none" />

                {/* Highly Scaled County SVG Map Background */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[15%] w-[130%] h-[130%] opacity-80 group-hover:scale-110 group-hover:-translate-x-4 transition-transform duration-700 ease-out pointer-events-none flex items-center justify-center z-0 will-change-transform">
                  {pathData ? (
                    <svg viewBox="0 0 100 100" className={`w-full h-full ${theme.svgFill}`}>
                      <path d={pathData} fill="currentColor" stroke="currentColor" strokeWidth="0.5" className={theme.svgStroke} />
                    </svg>
                  ) : (
                    <div className="w-full h-full bg-navy/5 rounded-full blur-2xl" /> // Fallback shape
                  )}
                </div>
                
                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full p-8">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md border border-navy/5 text-navy flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h3 className="heading-display text-4xl text-navy mb-8 group-hover:text-navy transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                    {county.name}
                  </h3>
                  
                  <div className="mt-auto pt-6 border-t border-navy/10 relative">
                    <div className="absolute top-0 left-0 w-0 h-[1px] bg-crimson group-hover:w-full transition-all duration-700 ease-out" />
                    <a 
                      href={county.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-sans font-bold uppercase tracking-widest text-navy group-hover:text-crimson transition-colors duration-300 w-full"
                    >
                      Visit Election Site
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VoterInformation;
