import { motion } from "framer-motion";

const counties = [
  { name: "Rockdale", url: "https://rockdalecountyga.gov/board-of-elections" },
  { name: "Newton", url: "https://newtoncountyga.gov/elections" },
  { name: "Clayton", url: "https://claytonelections.com" },
  { name: "Gwinnett", url: "https://gwinnettcounty.com/elections" },
  { name: "DeKalb", url: "https://dekalbvotes.com" },
  { name: "Henry", url: "https://henrycountyga.gov/elections" },
];

const VoterInformation = () => {
  return (
    <section className="py-24 bg-pearl relative overflow-hidden">
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
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
            Your Voice, Your Vote:<br />
            <span className="text-crimson">Election 2026</span>
          </h2>
          <p className="font-serif text-lg md:text-xl text-navy/70 max-w-2xl mx-auto">
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
          {counties.map((county, index) => (
            <motion.div
              key={county.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-navy/5 border border-navy/5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-crimson/0 to-navy/0 group-hover:from-crimson/[0.02] group-hover:to-navy/[0.02] rounded-2xl transition-colors duration-300" />
              
              <div className="relative z-10 flex-grow">
                <div className="w-12 h-12 rounded-full bg-navy/5 text-navy flex items-center justify-center mb-6 group-hover:bg-crimson group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="heading-display text-3xl text-navy mb-8 group-hover:text-crimson transition-colors duration-300">
                  {county.name}
                </h3>
              </div>
              
              <div className="relative z-10 mt-auto pt-6 border-t border-navy/5">
                <a 
                  href={county.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-sans font-bold uppercase tracking-widest text-navy group-hover:text-crimson transition-colors duration-300 w-full"
                >
                  Visit Election Site
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VoterInformation;
