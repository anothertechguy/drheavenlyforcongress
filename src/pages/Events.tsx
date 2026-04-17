import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

import flyer1 from "../assets/town hall mar 19.jpg";
import flyer2 from "../assets/apr 18.jpeg";
import flyer3 from "../assets/may 23.jpeg";
import flyer4 from "../assets/mar 21.jpeg";
import flyer5 from "../assets/mar 21 (another).jpeg";
import flyer6 from "../assets/mar 29.jpeg";
import flyer7 from "../assets/april 19 3rd flyer.jpeg";
import flyer8 from "../assets/april 19 flyer.jpeg";
import flyer9 from "../assets/april 19 second flyer.jpeg";

const events = [
  {
    id: 1,
    title: "Virtual District 13 Town Hall",
    date: "March 19, 2026",
    sortDate: new Date(2026, 2, 19),
    time: "7:00PM - 8:00PM",
    location: "Rockdale & Newton",
    description: "Come share your concerns, ideas, and visions for a stronger community with Democratic Candidate for Congress, Dr. Heavenly Kimes. Let's talk about the future of District 13 together.",
    image: flyer1,
    zoomLink: "https://us02web.zoom.us/j/82502383959?pwd=QxhRwtXW26g4sAB",
  },
  {
    id: 4,
    title: "Smiles By Dr. Heavenly Dental Relief Initiative Tour",
    date: "March 21, 2026",
    sortDate: new Date(2026, 2, 21),
    time: "10:00AM - 2:00PM",
    location: "Southern Pearl Dentistry (Hampton, GA)",
    description: "Dr. Latonya Gillespie-Johnson will be joining the tour! We're giving away free exams, x-rays, cleanings, and extractions to people in pain.",
    image: flyer4,
  },
  {
    id: 5,
    title: "Meet the Candidates Forum",
    date: "March 21, 2026",
    sortDate: new Date(2026, 2, 21, 12),
    time: "12:00PM (NOON)",
    location: "Trotters Ridge Subdivision Clubhouse (Snellville, GA)",
    description: "Join the Shiloh Rec Center (ShiRec) Board for an exciting opportunity to connect! Hear directly from all 7 Democratic candidates about their vision and plans for our community. Bring a friend and let's build a stronger community together!",
    image: flyer5,
  },
  {
    id: 6,
    title: "Women in Business Expo and Symposium Brunch",
    date: "March 29, 2026",
    sortDate: new Date(2026, 2, 29),
    time: "11:30AM - 1:30PM",
    location: "Sonesta Gwinnett Place Atlanta",
    description: "Celebrating Women's History Month! Join us for an empowering brunch where Dr. Heavenly Kimes will be the Keynote Speaker. Sponsored by 'Say Yes to Profits'.",
    image: flyer6,
  },
  {
    id: 2,
    title: "3rd Annual Thomas Road Day",
    date: "April 18, 2026",
    sortDate: new Date(2026, 3, 18),
    time: "12:00PM - 6:00PM",
    location: "Independence Park",
    description: "Join us for a massive celebration of community! There will be amazing food, music, games, and fun for all. Bring the whole family to Independence Park as we connect with our neighbors.",
    image: flyer2,
  },
  {
    id: 7,
    title: "Brunch in Support of Dr. Heavenly for CD-13",
    date: "April 19, 2026",
    sortDate: new Date(2026, 3, 19, 13),
    time: "1:00PM - 3:00PM",
    location: "Address Provided Upon RSVP",
    description: "Join community leaders Ninette Martin, Dr. Jing Jing Wong Harris, Dr. Nicolle Martin, Dr. Aja Pollard, Dr. Contessa Metcalfe, Onyema Farrey, Esq., and Dr. Lisa Jasper for an exclusive brunch in support of Dr. Heavenly Kimes for Congress. RSVP today!",
    image: flyer7,
  },
  {
    id: 8,
    title: "Meet & Greet with Dr. Heavenly Kimes",
    date: "April 19, 2026",
    sortDate: new Date(2026, 3, 19, 18),
    time: "6:00PM - 8:00PM",
    location: "Love You Brunches — 1805 Parker Rd SE, Conyers, GA 30094",
    description: "East Metro Business Network presents a Meet & Greet with Dr. Heavenly Kimes, candidate for Congress Georgia's District 13. Don't miss this opportunity to connect and hear her vision for our community!",
    image: flyer8,
  },
  {
    id: 9,
    title: "EMBN Meet & Greet with Dr. Heavenly",
    date: "April 19, 2026",
    sortDate: new Date(2026, 3, 19, 18, 1),
    time: "6:00PM - 8:00PM",
    location: "Love You Brunches — 1805 Parker Rd SE, Conyers, GA 30094",
    description: "\"You need to be in the room!\" East Metro Business Network presents Dr. Heavenly Kimes for Congress at Love You Brunches. Come out for an evening of conversation, community, and connection.",
    image: flyer9,
  },
  {
    id: 3,
    title: "Atlanta Caribbean Carnival",
    date: "May 23, 2026",
    sortDate: new Date(2026, 4, 23),
    time: "May 23, 2026",
    location: "Rodney Cook Sr. Park at Vine City",
    description: "The Official Downtown Atlanta Caribbean Carnival. Come celebrate culture, music, and community spirit with us. Looking forward to seeing everyone there!",
    image: flyer3,
  }
];

// Helper Component for the 3D Image Effect
const EventImage3D = ({ src, alt, isPast }: { src: string, alt: string, isPast?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  return (
    <div ref={ref} className="relative w-full aspect-[4/5] perspective-1000">
      <motion.div
        style={{ y, rotateX, rotateY, scale }}
        className={`w-full h-full relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,20,40,0.3)] border-4 border-white transform-gpu ${isPast ? 'grayscale-[40%] opacity-80' : ''}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent z-10 pointer-events-none" />
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover relative z-0" 
        />
        {/* Shine effect overlay */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]) }}
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 z-20 pointer-events-none" 
        />
      </motion.div>
      
      {/* Decorative background shape */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
        className="absolute -inset-4 md:-inset-8 bg-gold/10 rounded-full blur-2xl z-0"
      />
    </div>
  );
};

const Events = () => {
  const { upcomingEvents, pastEvents } = useMemo(() => {
    const now = new Date();
    // Set to start of today so events on today's date are still "upcoming"
    now.setHours(0, 0, 0, 0);

    const upcoming = events
      .filter(e => e.sortDate >= now)
      .sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime());

    const past = events
      .filter(e => e.sortDate < now)
      .sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime()); // Most recent past first

    return { upcomingEvents: upcoming, pastEvents: past };
  }, []);

  return (
    <main className="bg-pearl min-h-screen selection:bg-navy selection:text-white">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-navy pt-40 pb-24 relative overflow-hidden mb-24 rounded-b-[3rem] shadow-glass border-b border-navy/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08)_0%,transparent_70%)]" />
        <div className="container max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="font-sans font-bold uppercase tracking-[0.3em] text-white/70 text-xs shadow-sm">Join The Campaign</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-lg"
          >
            Upcoming <span className="text-gold">Events</span>
          </motion.h1>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container max-w-6xl mx-auto px-6 pb-16">
        {upcomingEvents.length > 0 ? (
          <div className="space-y-32 md:space-y-48">
            {upcomingEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={event.id}
                  className={`flex flex-col gap-12 lg:gap-24 items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <EventImage3D src={event.image} alt={event.title} />
                  </div>

                  <div className="w-full lg:w-1/2 relative z-20">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="inline-block bg-navy text-white px-6 py-2 rounded-full font-sans font-bold tracking-widest text-sm uppercase mb-6 shadow-md border border-white/10">
                        {event.date}
                      </div>

                      <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6 leading-tight">
                        {event.title}
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-start gap-3 text-navy/80">
                          <Clock className="w-5 h-5 text-crimson shrink-0 mt-0.5" />
                          <span className="font-serif text-lg">{event.time}</span>
                        </div>
                        <div className="flex items-start gap-3 text-navy/80">
                          <MapPin className="w-5 h-5 text-crimson shrink-0 mt-0.5" />
                          <span className="font-serif text-lg">{event.location}</span>
                        </div>
                      </div>

                      <p className="font-serif text-xl text-navy/70 leading-relaxed font-light mb-10">
                        {event.description}
                      </p>

                      {event.zoomLink ? (
                        <a 
                          href={event.zoomLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-crimson inline-flex items-center gap-3 px-8 py-4 text-base"
                        >
                          <Video className="w-5 h-5" />
                          <span>Join via Zoom</span>
                        </a>
                      ) : (
                        <a 
                          href="https://secure.numero.ai/signup/Dr-Heavenly-for-Georgia-New-Landing-4" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-outline border-navy text-navy hover:bg-navy hover:text-white inline-flex items-center gap-3 px-8 py-4 text-base"
                        >
                          <Calendar className="w-5 h-5" />
                          <span>Volunteer</span>
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State — no upcoming events */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
              <Calendar className="w-10 h-10 text-gold" />
            </div>
            <h2 className="heading-display text-3xl md:text-4xl text-navy mb-4">
              New Events Coming Soon
            </h2>
            <p className="font-serif text-xl text-navy/60 font-light max-w-lg mx-auto mb-10">
              Stay tuned — exciting events are being planned for District 13. Sign up to volunteer and be the first to know!
            </p>
            <a 
              href="https://secure.numero.ai/signup/Dr-Heavenly-for-Georgia-New-Landing-4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-crimson inline-flex items-center gap-3 px-8 py-4 text-base"
            >
              <Calendar className="w-5 h-5" />
              <span>Volunteer</span>
            </a>
          </motion.div>
        )}
      </section>

      {/* Past Events Divider */}
      {pastEvents.length > 0 && (
        <>
          <section className="container max-w-6xl mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex items-center gap-6"
            >
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-navy/20 to-navy/20" />
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                <span className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-navy/40">Looking Back</span>
                <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-navy/20 to-navy/20" />
            </motion.div>
          </section>

          <section className="container max-w-6xl mx-auto px-6 pb-32">
            <div className="space-y-32 md:space-y-48">
              {pastEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                    key={event.id}
                    className={`flex flex-col gap-12 lg:gap-24 items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="w-full lg:w-1/2">
                      <EventImage3D src={event.image} alt={event.title} isPast />
                    </div>

                    <div className="w-full lg:w-1/2 relative z-20">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="opacity-70"
                      >
                        <div className="inline-block bg-navy/60 text-white/80 px-6 py-2 rounded-full font-sans font-bold tracking-widest text-sm uppercase mb-6 shadow-md border border-white/5">
                          {event.date}
                        </div>

                        <h2 className="heading-display text-4xl md:text-5xl text-navy/70 mb-6 leading-tight">
                          {event.title}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                          <div className="flex items-start gap-3 text-navy/50">
                            <Clock className="w-5 h-5 text-crimson/50 shrink-0 mt-0.5" />
                            <span className="font-serif text-lg">{event.time}</span>
                          </div>
                          <div className="flex items-start gap-3 text-navy/50">
                            <MapPin className="w-5 h-5 text-crimson/50 shrink-0 mt-0.5" />
                            <span className="font-serif text-lg">{event.location}</span>
                          </div>
                        </div>

                        <p className="font-serif text-xl text-navy/50 leading-relaxed font-light">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}

      {/* Floating Mini-Pill for Endorsements */}
      <a 
        href="/#endorsements" 
        className="fixed bottom-8 right-8 z-50 group flex items-center gap-2 bg-white/40 hover:bg-white/90 backdrop-blur-md border border-white/40 shadow-glass hover:shadow-glass-hover px-5 py-2.5 rounded-full transition-all duration-500 ease-out animate-pulse hover:animate-none"
      >
        <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(255,215,0,0.6)] group-hover:scale-150 transition-transform duration-500" />
        <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-navy/70 group-hover:text-navy transition-colors">See Endorsements</span>
      </a>

      <Footer />
    </main>
  );
};

export default Events;
