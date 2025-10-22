// Wildflower SVG components inspired by the design

export function FloralCorner({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      {/* Leaves and stems */}
      <path 
        d="M10,190 Q20,170 30,150 Q35,140 40,130" 
        fill="none" 
        stroke="#9C8B7A" 
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path 
        d="M20,180 Q30,165 38,155" 
        fill="none" 
        stroke="#9C8B7A" 
        strokeWidth="1.2"
        opacity="0.5"
      />
      
      {/* Small flowers */}
      <circle cx="45" cy="125" r="4" fill="#C9A690" opacity="0.7" />
      <circle cx="42" cy="128" r="3" fill="#B89176" opacity="0.6" />
      <circle cx="48" cy="128" r="3" fill="#B89176" opacity="0.6" />
      
      <circle cx="32" cy="152" r="5" fill="#9C8B7A" opacity="0.5" />
      <circle cx="28" cy="155" r="3.5" fill="#8B7A6A" opacity="0.4" />
      
      {/* Larger wildflower */}
      <circle cx="25" cy="170" r="6" fill="#6B3E3A" opacity="0.7" />
      <circle cx="20" cy="173" r="4" fill="#5A2D2A" opacity="0.6" />
      <circle cx="30" cy="173" r="4" fill="#5A2D2A" opacity="0.6" />
      <circle cx="25" cy="176" r="4" fill="#5A2D2A" opacity="0.6" />
      
      {/* Delicate leaves */}
      <ellipse cx="15" cy="175" rx="8" ry="3" fill="#C9A690" opacity="0.3" transform="rotate(-45 15 175)" />
      <ellipse cx="35" cy="160" rx="6" ry="2.5" fill="#B89176" opacity="0.3" transform="rotate(-30 35 160)" />
      
      {/* Butterfly */}
      <g transform="translate(55, 110)">
        <ellipse cx="0" cy="0" rx="4" ry="6" fill="#9C8B7A" opacity="0.4" />
        <ellipse cx="8" cy="0" rx="4" ry="6" fill="#9C8B7A" opacity="0.4" />
        <path d="M4,0 L4,8" stroke="#6B3E3A" strokeWidth="0.5" opacity="0.5" />
      </g>
    </svg>
  );
}

export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 80" className={className} preserveAspectRatio="xMidYMid meet">
      {/* Center main flowers */}
      <g transform="translate(300, 40)">
        {/* Main burgundy flower */}
        <circle cx="0" cy="0" r="8" fill="#6B3E3A" opacity="0.7" />
        <circle cx="-6" cy="2" r="5" fill="#5A2D2A" opacity="0.6" />
        <circle cx="6" cy="2" r="5" fill="#5A2D2A" opacity="0.6" />
        <circle cx="0" cy="6" r="5" fill="#5A2D2A" opacity="0.6" />
        <circle cx="0" cy="-6" r="5" fill="#5A2D2A" opacity="0.6" />
      </g>
      
      {/* Left side florals */}
      <g transform="translate(240, 45)">
        <path d="M0,0 Q-15,5 -30,8" stroke="#9C8B7A" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="-20" cy="5" r="4" fill="#C9A690" opacity="0.6" />
        <circle cx="-35" cy="10" r="5" fill="#B89176" opacity="0.5" />
      </g>
      
      {/* Right side florals */}
      <g transform="translate(360, 45)">
        <path d="M0,0 Q15,5 30,8" stroke="#9C8B7A" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="20" cy="5" r="4" fill="#C9A690" opacity="0.6" />
        <circle cx="35" cy="10" r="5" fill="#B89176" opacity="0.5" />
      </g>
      
      {/* Left butterfly */}
      <g transform="translate(200, 35)">
        <ellipse cx="0" cy="0" rx="5" ry="7" fill="#9C8B7A" opacity="0.3" />
        <ellipse cx="10" cy="0" rx="5" ry="7" fill="#9C8B7A" opacity="0.3" />
      </g>
      
      {/* Right butterfly */}
      <g transform="translate(400, 35)">
        <ellipse cx="0" cy="0" rx="5" ry="7" fill="#9C8B7A" opacity="0.3" />
        <ellipse cx="-10" cy="0" rx="5" ry="7" fill="#9C8B7A" opacity="0.3" />
      </g>
      
      {/* Delicate leaves scattered */}
      <ellipse cx="270" cy="50" rx="10" ry="3" fill="#C9A690" opacity="0.2" transform="rotate(-20 270 50)" />
      <ellipse cx="330" cy="50" rx="10" ry="3" fill="#C9A690" opacity="0.2" transform="rotate(20 330 50)" />
      <ellipse cx="220" cy="40" rx="8" ry="2.5" fill="#B89176" opacity="0.2" transform="rotate(-35 220 40)" />
      <ellipse cx="380" cy="40" rx="8" ry="2.5" fill="#B89176" opacity="0.2" transform="rotate(35 380 40)" />
    </svg>
  );
}

export function FloralBorder({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className}>
      {/* Top left corner */}
      <g>
        <path d="M20,20 Q40,25 60,35 Q75,42 90,55" stroke="#9C8B7A" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="30" cy="25" r="5" fill="#C9A690" opacity="0.6" />
        <circle cx="50" cy="32" r="6" fill="#B89176" opacity="0.5" />
        <circle cx="75" cy="48" r="7" fill="#6B3E3A" opacity="0.6" />
        <ellipse cx="40" cy="30" rx="8" ry="3" fill="#9C8B7A" opacity="0.3" transform="rotate(-30 40 30)" />
      </g>
      
      {/* Top right corner */}
      <g>
        <path d="M380,20 Q360,25 340,35 Q325,42 310,55" stroke="#9C8B7A" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="370" cy="25" r="5" fill="#C9A690" opacity="0.6" />
        <circle cx="350" cy="32" r="6" fill="#B89176" opacity="0.5" />
        <circle cx="325" cy="48" r="7" fill="#6B3E3A" opacity="0.6" />
        <ellipse cx="360" cy="30" rx="8" ry="3" fill="#9C8B7A" opacity="0.3" transform="rotate(30 360 30)" />
      </g>
      
      {/* Bottom left corner */}
      <g>
        <path d="M20,380 Q40,375 60,365 Q75,358 90,345" stroke="#9C8B7A" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="30" cy="375" r="5" fill="#C9A690" opacity="0.6" />
        <circle cx="50" cy="368" r="6" fill="#B89176" opacity="0.5" />
        <circle cx="75" cy="352" r="7" fill="#6B3E3A" opacity="0.6" />
        <ellipse cx="40" cy="370" rx="8" ry="3" fill="#9C8B7A" opacity="0.3" transform="rotate(30 40 370)" />
      </g>
      
      {/* Bottom right corner */}
      <g>
        <path d="M380,380 Q360,375 340,365 Q325,358 310,345" stroke="#9C8B7A" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="370" cy="375" r="5" fill="#C9A690" opacity="0.6" />
        <circle cx="350" cy="368" r="6" fill="#B89176" opacity="0.5" />
        <circle cx="325" cy="352" r="7" fill="#6B3E3A" opacity="0.6" />
        <ellipse cx="360" cy="370" rx="8" ry="3" fill="#9C8B7A" opacity="0.3" transform="rotate(-30 360 370)" />
      </g>
      
      {/* Butterflies */}
      <g transform="translate(100, 100)" opacity="0.4">
        <ellipse cx="0" cy="0" rx="4" ry="6" fill="#9C8B7A" />
        <ellipse cx="8" cy="0" rx="4" ry="6" fill="#9C8B7A" />
      </g>
      <g transform="translate(300, 300)" opacity="0.4">
        <ellipse cx="0" cy="0" rx="4" ry="6" fill="#6B3E3A" />
        <ellipse cx="8" cy="0" rx="4" ry="6" fill="#6B3E3A" />
      </g>
    </svg>
  );
}
