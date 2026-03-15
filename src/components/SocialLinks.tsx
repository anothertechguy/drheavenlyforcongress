import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/dr_heavenly/?hl=en",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Heavenly-Williams-Kimes/1553209297/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    )
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@dr_heavenly",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.4c-.05 2.73-1.67 5.12-4.14 6.07-2.6.99-5.58.26-7.51-1.85-1.89-2.07-2.12-5.19-.54-7.52 1.55-2.27 4.41-3.21 6.94-2.24v4.25c-1.23-.39-2.61-.13-3.6.72-.98.85-1.37 2.22-.96 3.44.41 1.25 1.61 2.05 2.92 2.06 1.41.02 2.65-.96 2.95-2.34.1-.47.16-1.95.16-2.43V.02z"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Dr_Heavenly",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
    )
  }
];

export const SocialLinks = ({ 
  className = "", 
  iconClassName = "w-10 h-10 bg-white/5 border-white/10 hover:border-gold hover:bg-gold/10 text-white group-hover:text-gold" 
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex items-center justify-center rounded-full border transition-all duration-300 overflow-hidden ${iconClassName}`}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          title={social.name}
        >
          {/* American Flag Gradient Hover Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3161] via-[#0A3161]/80 to-[#B31942] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          
          <div className="w-1/2 h-1/2 flex items-center justify-center relative z-10 transition-colors duration-300 text-inherit group-hover:text-white group-hover:drop-shadow-md">
            {social.icon}
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
