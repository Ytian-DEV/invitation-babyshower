import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { RSVPForm } from "./RSVPForm";
import ImageWithFallback from "./figma/ImageWithFallback";
import { FloralCorner, FloralDivider, FloralBorder } from "./FloralSVG";

// Updated photos list - add this above your component
const photosList = [
  {
    src: "/photos/1.jpg",
    fallback:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    src: "/photos/2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1586024795129-38d4e68bdd0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    src: "/photos/3.jpg",
    fallback:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    src: "/photos/4.jpg",
    fallback:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    src: "/photos/5.jpg",
    fallback:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    src: "/photos/6.jpg",
    fallback:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

// Simple Photo Component - NO POPUP
function PhotoItem({
  photo,
  index,
}: {
  photo: { src: string; fallback: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg border-2 border-[#C9A690] aspect-square"
    >
      <ImageWithFallback
        src={photo.src}
        fallbackSrc={photo.fallback}
        alt={`Celebration moment ${index + 1}`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </motion.div>
  );
}

export default function InvitationContent() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-13T19:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1EC]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F1EC] via-[#E8DDD0] to-[#F5F1EC] overflow-hidden"
      >
        {/* Floral corner decorations */}
        <div className="absolute top-0 left-0 w-48 md:w-72 h-48 md:h-72 opacity-40 pointer-events-none">
          <FloralCorner className="w-full h-full" />
        </div>
        <div className="absolute top-0 right-0 w-48 md:w-72 h-48 md:h-72 opacity-40 pointer-events-none">
          <FloralCorner className="w-full h-full transform rotate-90" flip />
        </div>
        <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 opacity-40 pointer-events-none">
          <FloralCorner className="w-full h-full transform -rotate-90" />
        </div>
        <div className="absolute bottom-0 right-0 w-48 md:w-72 h-48 md:h-72 opacity-40 pointer-events-none">
          <FloralCorner className="w-full h-full transform rotate-180" flip />
        </div>

        {/* Floating butterflies */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 opacity-20 pointer-events-none"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * 100 - 50],
              x: [null, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg viewBox="0 0 40 40">
              <ellipse cx="15" cy="20" rx="8" ry="12" fill="#9C8B7A" />
              <ellipse cx="25" cy="20" rx="8" ry="12" fill="#9C8B7A" />
            </svg>
          </motion.div>
        ))}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="mb-8">
              <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-6">
                <circle cx="50" cy="50" r="20" fill="#6B3E3A" opacity="0.3" />
                <circle cx="42" cy="52" r="12" fill="#6B3E3A" opacity="0.5" />
                <circle cx="58" cy="52" r="12" fill="#6B3E3A" opacity="0.5" />
                <circle cx="50" cy="58" r="12" fill="#6B3E3A" opacity="0.5" />
                <circle cx="50" cy="46" r="12" fill="#6B3E3A" opacity="0.5" />
              </svg>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl text-[#6B3E3A] mb-6 font-serif italic">
              Yzabelle Yang
            </h1>
            <div className="relative inline-block my-8">
              <div
                className="text-7xl md:text-9xl text-[#B89176] italic"
                style={{ fontFamily: "serif" }}
              >
                Baby Shower
              </div>
              <div className="absolute -top-4 -right-4 text-4xl md:text-6xl">
                ✨
              </div>
            </div>

            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#9C8B7A] to-transparent mx-auto my-8"></div>

            <p className="text-xl md:text-2xl text-[#6B3E3A] tracking-widest uppercase">
              Join Us!
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#9C8B7A] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#9C8B7A] rounded-full"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Floral Divider */}
      <div className="relative h-24 bg-[#F5F1EC] flex items-center justify-center">
        <FloralDivider className="w-full max-w-3xl h-full" />
      </div>

      {/* Countdown Section */}
      <section className="py-20 bg-gradient-to-b from-[#F5F1EC] to-[#E8DDD0]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[#6B3E3A] font-serif italic">
              Counting Down
            </h2>
            <div className="w-24 h-px bg-[#9C8B7A] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-white to-[#F8F4F0] p-8 rounded-xl shadow-lg border-2 border-[#C9A690] text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                {/* Background floral pattern */}
                <div className="absolute -right-2 -bottom-2 w-15 h-15 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FloralCorner className="w-full h-full" />
                </div>

                <div className="relative z-10">
                  {/* Countdown value with enhanced styling */}
                  <div className="text-4xl md:text-5xl mb-3 text-[#6B3E3A] font-bold bg-gradient-to-br from-[#6B3E3A] to-[#5A2D2A] bg-clip-text text-transparent">
                    {item.value}
                  </div>

                  {/* Label with enhanced styling */}
                  <div className="text-sm tracking-widest text-[#9C8B7A] uppercase font-semibold border-t border-[#C9A690] pt-2">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery with Quote */}
      <section className="py-20 bg-gradient-to-b from-[#F5F1EC] to-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[#6B3E3A] font-serif italic">
              Gallery
            </h2>
            <div className="w-24 h-px bg-[#9C8B7A] mx-auto"></div>
            <p className="text-[#9C8B7A] mt-4 text-lg">
              Beautiful moments to cherish
            </p>
          </motion.div>

          {/* Photo Grid - Simple grid without popup */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photosList.map((photo, index) => (
                <PhotoItem key={index} photo={photo} index={index} />
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-white p-8 md:p-12 rounded-lg shadow-lg border-2 border-[#C9A690]"
          >
            <p className="text-2xl md:text-3xl text-[#6B3E3A] italic font-serif leading-relaxed">
              "Let's celebrate the new life about to arrive and create wonderful
              memories together!"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F8F4F0] via-[#F1EAE0] to-[#E8DDD0] overflow-hidden">
        {/* Subtle floral corners */}
        <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 opacity-15 pointer-events-none">
          <FloralCorner className="w-full h-full" />
        </div>
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 opacity-15 pointer-events-none">
          <FloralCorner className="w-full h-full transform rotate-90" flip />
        </div>
        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 opacity-15 pointer-events-none">
          <FloralCorner className="w-full h-full transform -rotate-90" />
        </div>
        <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 opacity-15 pointer-events-none">
          <FloralCorner className="w-full h-full transform rotate-180" flip />
        </div>

        {/* Floating floral elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 opacity-10 animate-float">
          <FloralCorner className="w-full h-full" />
        </div>
        <div
          className="absolute top-1/3 right-16 w-16 h-16 opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <FloralCorner className="w-full h-full transform rotate-45" />
        </div>
        <div
          className="absolute bottom-1/4 left-20 w-24 h-24 opacity-10 animate-float"
          style={{ animationDelay: "4s" }}
        >
          <FloralCorner className="w-full h-full transform -rotate-45" />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[#6B3E3A] font-serif italic">
              Event Details
            </h2>
            {/* Floral Divider */}
            <div className="w-48 mx-auto opacity-60">
              <FloralDivider className="w-full" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                icon: Calendar,
                title: "The Date",
                detail: "December 13, 2025",
              },
              {
                icon: Clock,
                title: "The Time",
                detail: "1:00 PM",
              },
              {
                icon: MapPin,
                title: "The Venue",
                detail: "Ritz Tower, Tacloban City",
                mapLink: "https://maps.app.goo.gl/uHytFSWM9ev4By1e6",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-white to-[#F8F4F0] p-6 rounded-xl shadow-lg border-2 border-[#C9A690] text-center hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                {/* Background floral pattern */}
                <div className="absolute -right-4 -bottom-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FloralCorner className="w-full h-full" />
                </div>

                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-[#E8DDD0] to-[#C9A690] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-[#6B3E3A]" />
                  </div>
                  <h3 className="text-lg mb-2 text-[#9C8B7A] uppercase tracking-wider text-sm font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#6B3E3A] whitespace-pre-line font-medium mb-2">
                    {item.detail}
                  </p>

                  {/* Google Maps link for venue */}
                  {item.mapLink && (
                    <a
                      href={item.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#6B3E3A] text-white rounded-lg hover:bg-[#5A2D2A] transition-colors text-sm font-medium"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Google Maps
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Menu Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-[#F8F4F0] to-[#F1EAE0] p-8 rounded-2xl shadow-2xl border-2 border-[#C9A690] relative overflow-hidden">
              {/* Main background floral border */}
              <div className="absolute inset-4 opacity-10 pointer-events-none">
                <FloralBorder className="w-full h-full" />
              </div>

              {/* Enhanced Floral Corner Decorations */}
              <div className="absolute top-4 left-4 w-20 h-20 opacity-25 pointer-events-none">
                <FloralCorner className="w-full h-full" />
              </div>
              <div className="absolute top-4 right-4 w-20 h-20 opacity-25 pointer-events-none">
                <FloralCorner
                  className="w-full h-full transform rotate-90"
                  flip
                />
              </div>
              <div className="absolute bottom-4 left-4 w-20 h-20 opacity-25 pointer-events-none">
                <FloralCorner className="w-full h-full transform -rotate-90" />
              </div>
              <div className="absolute bottom-4 right-4 w-20 h-20 opacity-25 pointer-events-none">
                <FloralCorner
                  className="w-full h-full transform rotate-180"
                  flip
                />
              </div>

              {/* Additional small florals */}
              <div className="absolute top-12 left-12 w-12 h-12 opacity-15">
                <FloralCorner className="w-full h-full transform rotate-30" />
              </div>
              <div className="absolute bottom-12 right-12 w-12 h-12 opacity-15">
                <FloralCorner className="w-full h-full transform -rotate-30" />
              </div>

              <div className="text-center mb-8 relative z-10">
                <h3 className="text-3xl md:text-4xl mb-2 text-[#6B3E3A] font-serif italic">
                  Welcome
                </h3>
                <h4 className="text-2xl md:text-3xl mb-4 text-[#6B3E3A] font-serif">
                  YZABELLE'S BABY SHOWER
                </h4>

                {/* Enhanced Floral Divider */}
                <div className="my-6 opacity-50">
                  <FloralDivider className="w-64 mx-auto" />
                </div>

                <h5 className="italic text-xl md:text-2xl mb-6 text-[#9C8B7A] font-serif bg-gradient-to-r from-transparent via-[#F8F4F0] to-transparent py-2">
                  PROGRAMME
                </h5>
              </div>

              {/* Programme Section - Centered */}
              <div className="flex justify-center mb-8 relative z-10">
                <div className="text-center max-w-2xl">
                  <div className="space-y-4">
                    {[
                      { time: "1:00 PM", activity: "Arrival & Welcome Drinks" },
                      { time: "1:30 PM", activity: "Introduction & Toasts" },
                      { time: "2:00 PM", activity: "Games & Activities" },
                      { time: "2:30 PM", activity: "Cake Cutting Ceremony" },
                      { time: "3:00 PM", activity: "Gift Opening" },
                      { time: "3:30 PM", activity: "Games & Activities" },
                      {
                        time: "4:30 PM",
                        activity: "Chit Chat & Photo Opportunity",
                      },
                      { time: "5:00 PM", activity: "Dinner" },
                      { time: "6:30 PM", activity: "Thank You & Farewell" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative bg-white/50 rounded-lg p-4 hover:bg-white/70 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <h6 className="font-medium text-lg mb-1 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2">
                          {item.time}
                        </h6>
                        <p className="text-[#6B3E3A] font-sm italic">
                          {item.activity}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Floral Divider between sections */}
              <div className="my-8 opacity-40">
                <FloralDivider className="w-48 mx-auto" />
              </div>

              <div className="text-center mb-8 relative z-10">
                <h5 className="text-xl md:text-2xl mb-6 text-[#9C8B7A] font-serif italic bg-gradient-to-r from-transparent via-[#F8F4F0] to-transparent py-2">
                  FILIPINO FEAST MENU
                </h5>
              </div>

              {/* Menu Section - Centered */}
              <div className="flex justify-center relative z-10">
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="text-center bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-colors">
                      <h6 className="text-xl mb-4 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2 font-medium italic">
                        APPETIZERS & SOUPS
                      </h6>
                      <ul className="space-y-4 text-[#6B3E3A]">
                        {[
                          {
                            name: "LUMPIA SHANGHAI",
                            desc: "Crispy spring rolls with pork and vegetables",
                          },
                          {
                            name: "FRESH LUMPIA",
                            desc: "Fresh rolls with shrimp and vegetables",
                          },
                          {
                            name: "CHICKEN SOPAS",
                            desc: "Creamy chicken macaroni soup",
                          },
                        ].map((item, idx) => (
                          <li key={idx} className="flex justify-center">
                            <span className="text-center">
                              <span className="font-medium text-md mb-1 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2">{item.name}</span>
                              <br />
                              <span className="text-sm text-[#9C8B7A] italic">
                                {item.desc}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-colors">
                      <h6 className="text-xl mb-4 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2 font-medium italic">
                        MAIN COURSE
                      </h6>
                      <ul className="space-y-4 text-[#6B3E3A]">
                        {[
                          {
                            name: "LECHON KAWALI",
                            desc: "Crispy fried pork belly with liver sauce",
                          },
                          {
                            name: "CHICKEN ADOBO",
                            desc: "Classic Filipino chicken stew",
                          },
                          {
                            name: "BEEF CALDERETA",
                            desc: "Beef stew with tomato sauce and cheese",
                          },
                          {
                            name: "PANCIT CANTON",
                            desc: "Stir-fried noodles with meat and vegetables",
                          },
                        ].map((item, idx) => (
                          <li key={idx} className="flex justify-center">
                            <span className="text-center">
                              <span className="font-medium text-md mb-1 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2">{item.name}</span>
                              <br />
                              <span className="text-sm text-[#9C8B7A] italic">
                                {item.desc}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="text-center bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-colors">
                      <h6 className="text-xl mb-4 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2 font-medium italic">
                        RICE & SIDES
                      </h6>
                      <ul className="space-y-4 text-[#6B3E3A]">
                        {[
                          {
                            name: "STEAMED JASMINE RICE",
                            desc: "Fragrant white rice",
                          },
                          {
                            name: "GARLIC FRIED RICE",
                            desc: "Sinangag with garlic bits",
                          },
                          {
                            name: "ENSALADANG TALONG",
                            desc: "Grilled eggplant salad",
                          },
                        ].map((item, idx) => (
                          <li key={idx} className="flex justify-center">
                            <span className="text-center">
                              <span className="font-medium text-md mb-1 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2">{item.name}</span>
                              <br />
                              <span className="text-sm text-[#9C8B7A] italic">
                                {item.desc}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-colors">
                      <h6 className="text-xl mb-4 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2 font-medium italic">
                        DESSERTS
                      </h6>
                      <ul className="space-y-4 text-[#6B3E3A]">
                        {[
                          {
                            name: "LECHE FLAN",
                            desc: "Caramel custard dessert",
                          },
                          {
                            name: "BIBINGKA",
                            desc: "Rice cake with salted egg and cheese",
                          },
                          {
                            name: "HALO-HALO",
                            desc: "Mixed dessert with shaved ice and fruits",
                          },
                          {
                            name: "BUKO PANDAN",
                            desc: "Young coconut and pandan jelly dessert",
                          },
                        ].map((item, idx) => (
                          <li key={idx} className="flex justify-center">
                            <span className="text-center">
                              <span className="font-medium text-md mb-1 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2">{item.name}</span>
                              <br />
                              <span className="text-sm text-[#9C8B7A] italic">
                                {item.desc}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center bg-white/50 rounded-xl p-6 hover:bg-white/70 transition-colors">
                      <h6 className="text-xl mb-4 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2 font-medium italic">
                        DRINKS
                      </h6>
                      <ul className="space-y-4 text-[#6B3E3A]">
                        {[
                          {
                            name: "CALAMANSI JUICE",
                            desc: "Refreshing Filipino lime drink",
                          },
                          {
                            name: "BUCO JUICE",
                            desc: "Fresh young coconut water",
                          },
                          {
                            name: "SAMBILOG MOCKTAIL",
                            desc: "Sunrise-inspired fruit punch",
                          },
                        ].map((item, idx) => (
                          <li key={idx} className="flex justify-center">
                            <span className="text-center">
                              <span className="font-medium text-md mb-1 text-[#6B3E3A] uppercase tracking-wider border-b border-[#C9A690] pb-2">{item.name}</span>
                              <br />
                              <span className="text-sm text-[#9C8B7A] italic">
                                {item.desc}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Floral Divider */}
              <div className="my-8 opacity-100">
                <FloralDivider className="w-48 mx-auto" />
              </div>
            </div>
          </motion.div>

          {/* The Colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#C9A690]">
              <h3 className="text-3xl md:text-4xl mb-4 text-[#6B3E3A] font-serif italic justify-center text-center">
                The Colors
              </h3>
              <div className="flex justify-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#E8DDD0] border-2 border-[#C9A690] shadow-md"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A690] border-2 border-[#B89176] shadow-md"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#B89176] border-2 border-[#9C8B7A] shadow-md"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#6B3E3A] border-2 border-[#5A2D2A] shadow-md"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Dress Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#C9A690]">
              <h3 className="text-3xl md:text-4xl mb-2 text-[#6B3E3A] font-serif italic justify-center text-center">
                The Dress
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {" "}
                {/* Added justify-center */}
                <div className="text-center">
                  {" "}
                  {/* Changed from text-center md:text-left to just text-center */}
                  <p className="text-[#6B3E3A] mb-2">
                    <span className="block text-sm text-[#9C8B7A] uppercase tracking-wider mb-1">
                      Color
                    </span>
                    Beige, Khaki, Cream, Light Brown, Brown, or Earth Tones
                  </p>
                  <p className="text-[#6B3E3A] text-sm">
                    <span className="block text-sm text-[#9C8B7A] uppercase tracking-wider mb-1">
                      Style
                    </span>
                    Elegant & Sophisticated
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floral Divider */}
      <div className="relative h-24 bg-[#E8DDD0] flex items-center justify-center">
        <FloralDivider className="w-full max-w-3xl h-full" />
      </div>

      {/* RSVP Section */}
      <section className="py-20 bg-gradient-to-b from-[#E8DDD0] to-[#D4C4B0] relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[#6B3E3A] font-serif italic">
              RSVP
            </h2>
            <div className="w-24 h-px bg-[#9C8B7A] mx-auto mb-6"></div>
            <p className="text-[#6B3E3A] text-lg">
              Please respond by December 13, 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <RSVPForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#6B3E3A] text-[#F5F1EC] py-12 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <FloralBorder className="w-full h-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Heart className="w-8 h-8 text-[#C9A690] mx-auto mb-4" />
          <p className="text-[#E8DDD0] mb-2 text-lg">
            © 2025 Lily Tech Solutions. All rights reserved.
          </p>
          <p className="text-sm text-[#C9A690]">
            Designed by Lily Tech Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
