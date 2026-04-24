import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AnimatedVoiceText from "@/components/AnimatedVoiceText";
import VocalLeadership from "@/components/VocalLeadership";
import PlatformPreview from "@/components/PlatformPreview";
import VoterInformation from "@/components/VoterInformation";
import EndorsementsReel from "@/components/EndorsementsReel";
import Footer from "@/components/Footer";
import requestBallot from "../assets/requestballot.jpg";

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
          <div className="flex justify-center gap-4 flex-wrap">
            <a href={content.urls.volunteer} target="_blank" rel="noopener noreferrer" className="btn-crimson inline-block">
              {content.home.join.button}
            </a>
            <a href="/events" className="btn-outline border-navy text-navy hover:bg-navy hover:text-white inline-block">
              EVENTS
            </a>
          </div>
        </div>
      </section>

      {/* Request Ballot Image */}
      <section className="py-12 md:py-20 bg-pearl">
        <div className="container max-w-4xl mx-auto px-6 flex justify-center">
          <img 
            src={requestBallot} 
            alt="Request Your Absentee Ballot" 
            className="w-full max-w-2xl rounded-[2rem] shadow-glass border border-navy/5"
            loading="lazy"
          />
        </div>
      </section>

      <EndorsementsReel />

      <Footer />
    </main>
  );
};

export default Home;
