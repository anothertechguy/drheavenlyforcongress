import content from "@/data/content.json";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold uppercase tracking-widest mb-6">
              Dr. Heavenly
              <span className="block text-gold text-sm tracking-[0.3em] mt-2">For Congress</span>
            </h2>
            <p className="font-serif text-xl text-white/70 mb-8">
              {content.home.footer.heading} — Building a healthier, wealthier, stronger Georgia District 13.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap gap-4 items-center">
                <a href={content.urls.donate} className="btn-crimson py-3 px-6 text-xs">Donate</a>
                <a href={content.urls.volunteer} className="btn-outline border-white/20 text-white hover:border-gold hover:text-gold py-3 px-6 text-xs">Volunteer</a>
              </div>
              <SocialLinks />
            </div>
          </div>

          <div className="lg:text-right">
            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-white/50 mb-6">Campaign</h4>
            <p className="font-sans text-white/80 mb-6">{content.home.election.heading}</p>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl inline-block lg:w-[300px]">
              <p className="font-sans text-[10px] text-white/60 text-center uppercase tracking-widest leading-relaxed">
                Paid for by<br/>Dr. Heavenly for Congress
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Dr. Heavenly Kimes. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Huge Display Typo in Background */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center overflow-hidden opacity-[0.03]">
        <span className="font-display font-bold text-[15vw] leading-none whitespace-nowrap">DISTRICT 13</span>
      </div>
    </footer>
  );
};

export default Footer;
