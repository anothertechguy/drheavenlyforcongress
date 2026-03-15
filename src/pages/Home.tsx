import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AnimatedVoiceText from "@/components/AnimatedVoiceText";
import VocalLeadership from "@/components/VocalLeadership";
import PlatformPreview from "@/components/PlatformPreview";
import VoterInformation from "@/components/VoterInformation";
import Footer from "@/components/Footer";

import content from "@/data/content.json";

const Home = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <HeroSection />
      <AnimatedVoiceText />
      <VocalLeadership />
      <PlatformPreview />
      <VoterInformation />
      
      {/* Join Section */}
      <section className="py-32 bg-pearl relative overflow-hidden">
        <div className="container max-w-4xl text-center relative z-10">
          <div className="w-24 h-[1px] bg-crimson mx-auto mb-8" />
          <h2 className="heading-display text-5xl md:text-6xl text-navy mb-12">
            {content.home.join.heading}
          </h2>
          <a href={content.urls.volunteer} target="_blank" rel="noopener noreferrer" className="btn-crimson inline-block">
            {content.home.join.button}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
