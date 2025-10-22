import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { RSVPForm } from './RSVPForm';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FloralCorner, FloralDivider, FloralBorder } from './FloralSVG';
import dressCodeImage from '../assets/a60a670b1d282df087da822b9d29fac98fde1577.png';

export default function InvitationContent() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-13T19:00:00');

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
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * 100 - 50],
              x: [null, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
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
              <div className="text-7xl md:text-9xl text-[#B89176] italic" style={{ fontFamily: 'serif' }}>
                Baby Shower
              </div>
              <div className="absolute -top-4 -right-4 text-4xl md:text-6xl">✨</div>
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
            <h2 className="text-4xl md:text-5xl mb-4 text-[#6B3E3A] font-serif italic">Counting Down</h2>
            <div className="w-24 h-px bg-[#9C8B7A] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 md:p-8 rounded-xl border-2 border-[#C9A690] shadow-lg"
              >
                <div className="text-4xl md:text-6xl mb-2 text-[#6B3E3A]">{item.value}</div>
                <div className="text-sm md:text-base tracking-widest text-[#9C8B7A] uppercase">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery with Quote */}
      <section className="py-20 bg-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[#6B3E3A] font-serif italic">Celebrating Maria Chezka</h2>
            <div className="w-24 h-px bg-[#9C8B7A] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'https://images.unsplash.com/photo-1758738180856-7538f9dd4ac4?w=1080',
              'https://images.unsplash.com/photo-1758738181955-3f917d756275?w=1080',
              'https://images.unsplash.com/photo-1755704282977-340323fa52df?w=1080',
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group overflow-hidden rounded-lg aspect-[3/4] shadow-xl border-4 border-white"
              >
                <ImageWithFallback
                  src={src}
                  alt={`Celebration moment ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-white p-8 md:p-12 rounded-lg shadow-lg border-2 border-[#C9A690]"
          >
            <p className="text-2xl md:text-3xl text-[#6B3E3A] italic font-serif leading-relaxed">
              "Let's celebrate a quarter century of amazing memories and create new ones together!"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#F5F1EC] to-[#E8DDD0] overflow-hidden">
        {/* Subtle floral corners */}
        <div className="absolute top-10 left-0 w-32 md:w-48 h-32 md:h-48 opacity-10 pointer-events-none">
          <FloralCorner className="w-full h-full" />
        </div>
        <div className="absolute top-10 right-0 w-32 md:w-48 h-32 md:h-48 opacity-10 pointer-events-none">
          <FloralCorner className="w-full h-full transform rotate-90" flip />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[#6B3E3A] font-serif italic">Event Details</h2>
            <div className="w-24 h-px bg-[#9C8B7A] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                icon: Calendar,
                title: 'The Date',
                detail: 'April 13, 2026',
              },
              {
                icon: Clock,
                title: 'The Time',
                detail: '7:00 PM',
              },
              {
                icon: MapPin,
                title: 'The Place',
                detail: 'Ritz Tower\nTacloban City',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md border-2 border-[#C9A690] text-center hover:shadow-xl transition-shadow"
              >
                <item.icon className="w-10 h-10 text-[#6B3E3A] mb-3 mx-auto" />
                <h3 className="text-lg mb-2 text-[#9C8B7A] uppercase tracking-wider text-sm">{item.title}</h3>
                <p className="text-base text-[#6B3E3A] whitespace-pre-line">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* The Colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#C9A690]">
              <h3 className="text-lg mb-6 text-[#9C8B7A] uppercase tracking-wider text-sm text-center">The Colors</h3>
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
              <h3 className="text-lg mb-6 text-[#9C8B7A] uppercase tracking-wider text-sm text-center">The Dress</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-32 h-48 rounded-lg overflow-hidden shadow-lg">
                  <img src={dressCodeImage} alt="Dress code" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[#6B3E3A] mb-2">
                    <span className="block text-sm text-[#9C8B7A] uppercase tracking-wider mb-1">Color</span>
                    Black Attire
                  </p>
                  <p className="text-[#6B3E3A] text-sm">
                    <span className="block text-sm text-[#9C8B7A] uppercase tracking-wider mb-1">Style</span>
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
            <h2 className="text-4xl md:text-5xl mb-4 text-[#6B3E3A] font-serif italic">RSVP</h2>
            <div className="w-24 h-px bg-[#9C8B7A] mx-auto mb-6"></div>
            <p className="text-[#6B3E3A] text-lg">
              Please respond by April 1, 2026
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
          <p className="text-[#E8DDD0] mb-2 text-lg">We can't wait to celebrate with you!</p>
          <p className="text-sm text-[#C9A690]">Maria Chezka's 25th Birthday Celebration</p>
        </div>
      </footer>
    </div>
  );
}
