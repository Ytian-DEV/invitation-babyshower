import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { FloralCorner } from './FloralSVG';

interface EnvelopeLandingProps {
  onOpen: () => void;
}

export function EnvelopeLanding({ onOpen }: EnvelopeLandingProps) {
  return (
    <div className="min-h-screen bg-[#F5F1EC] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floral decorations */}
      <motion.div 
        className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 pointer-events-none opacity-60"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <FloralCorner className="w-full h-full" />
      </motion.div>

      <motion.div 
        className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 pointer-events-none opacity-60"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <FloralCorner className="w-full h-full transform rotate-180" flip />
      </motion.div>

      {/* Subtle butterflies */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-8 h-8 opacity-20"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 40 40">
          <ellipse cx="15" cy="20" rx="8" ry="12" fill="#9C8B7A" />
          <ellipse cx="25" cy="20" rx="8" ry="12" fill="#9C8B7A" />
          <path d="M20,15 L20,25" stroke="#6B3E3A" strokeWidth="1" />
        </svg>
      </motion.div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#6B3E3A] mb-2 text-5xl md:text-7xl font-serif italic tracking-wide">
            You're Invited
          </h1>
          <p className="text-[#9C8B7A] mb-12 text-lg md:text-xl tracking-widest uppercase">
            To A Special Celebration
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mb-12"
        >
          {/* Envelope */}
          <div className="relative w-64 h-40 md:w-80 md:h-48 mx-auto">
            {/* Envelope body */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#E8DDD0] to-[#D4C4B0] rounded-lg shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 border-4 border-[#C9A690]/40 rounded-lg"></div>
              
              {/* Decorative lines */}
              <div className="absolute bottom-8 left-8 right-8 space-y-2">
                <div className="h-0.5 bg-[#9C8B7A] opacity-30 w-3/4"></div>
                <div className="h-0.5 bg-[#9C8B7A] opacity-30 w-1/2"></div>
              </div>
            </motion.div>

            {/* Envelope flap */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-24 md:h-28 origin-top"
              style={{
                background: 'linear-gradient(135deg, #C9A690 0%, #B89176 100%)',
                clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              }}
              whileHover={{ rotateX: 15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 border-t-4 border-x-4 border-[#9C8B7A]/30" style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}></div>
            </motion.div>

            {/* Wax seal with floral */}
            <motion.div
              className="absolute top-16 md:top-20 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#6B3E3A] rounded-full flex items-center justify-center shadow-lg z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <circle cx="20" cy="20" r="6" fill="#D4C4B0" opacity="0.8" />
                <circle cx="16" cy="22" r="3" fill="#D4C4B0" opacity="0.7" />
                <circle cx="24" cy="22" r="3" fill="#D4C4B0" opacity="0.7" />
                <circle cx="20" cy="25" r="3" fill="#D4C4B0" opacity="0.7" />
                <circle cx="20" cy="17" r="3" fill="#D4C4B0" opacity="0.7" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.button
          onClick={onOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#6B3E3A] text-[#F5F1EC] px-12 py-4 rounded-full tracking-widest hover:bg-[#5A2D2A] transition-colors shadow-2xl border-2 border-[#9C8B7A]/30"
        >
          OPEN INVITATION
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-[#9C8B7A] mt-8 text-sm tracking-wide"
        >
          Click to reveal the details
        </motion.p>
      </div>
    </div>
  );
}
