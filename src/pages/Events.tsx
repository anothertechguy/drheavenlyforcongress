import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

import flyer1 from "../assets/town hall mar 19.jpg";
import flyer2 from "../assets/apr 18.jpeg";
import flyer3 from "../assets/may 23.jpeg";

const events = [
  {
    id: 1,
    title: "Virtual District 13 Town Hall",
    date: "March 19, 2026",
    time: "7:00PM - 8:00PM",
    location: "Rockdale & Newton",
    description: "Come share your concerns, ideas, and visions for a stronger community with Democratic Candidate for Congress, Dr. Heavenly Kimes. Let's talk about the future of District 13 together.",
    image: flyer1,
    zoomLink: "https://us02web.zoom.us/j/82502383959?pwd=QxhRwtXW26g4sAB",
  },
  {
    id: 2,
    title: "3rd Annual Thomas Road Day",
    date: "April 18, 2026",
    time: "12:00PM - 6:00PM",
    location: "Independence Park",
    description: "Join us for a massive celebration of community! There will be amazing food, music, games, and fun for all. Bring the whole family to Independence Park as we connect with our neighbors.",
    image: flyer2,
  },
  {
    id: 3,
    title: "Atlanta Caribbean Carnival",
    date: "May 23, 2026",
    time: "TBD",
    location: "Rodney Cook Sr. Park at Vine City",
    description: "The Official Downtown Atlanta Caribbean Carnival. Come celebrate culture, music, and community spirit with us. Looking forward to seeing everyone there!",
    image: flyer3,
  }
];

// Helper Component for the 3D Image Effect
const EventImage3D = ({ src, alt }: { src: string, alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  });
  
  // Create dynamic 3D floating and tilting effect
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  return (
    <div ref={ref} className="relative w-full aspect-[4/5] perspective-1000">
      <motion.div
        style={{ y, rotateX, rotateY, scale }}
        className="w-full h-full relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,20,40,0.3)] border-4 border-white transform-gpu"
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

      {/* Events List */}
      <section className="container max-w-6xl mx-auto px-6 pb-32">
        <div className="space-y-32 md:space-y-48">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={event.id}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Side with 3D Effect */}
                <div className="w-full lg:w-1/2">
                  <EventImage3D src={event.image} alt={event.title} />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 relative z-20">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {/* Date Badge */}
                    <div className="inline-block bg-navy text-white px-6 py-2 rounded-full font-sans font-bold tracking-widest text-sm uppercase mb-6 shadow-md border border-white/10">
                      {event.date}
                    </div>

                    <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6 leading-tight">
                      {event.title}
                    </h2>

                    {/* Metadata Grid */}
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

                    {/* Action Button - specific for Zoom vs normal event */}
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
                        <span>RSVP / Volunteer</span>
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Events;
