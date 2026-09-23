import { useState } from 'react';

interface EvoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
}

export function EvoLogo({ className = '', size = 'md', showSlogan = true }: EvoLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const sizeDimensions = {
    sm: { height: 'h-10', iconSize: 36, textEvo: 'text-xl', textEn: 'text-sm', slogan: 'text-[9px]' },
    md: { height: 'h-14', iconSize: 52, textEvo: 'text-2xl', textEn: 'text-lg', slogan: 'text-[11px]' },
    lg: { height: 'h-20', iconSize: 72, textEvo: 'text-4xl', textEn: 'text-2xl', slogan: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* If EVO ENGLISH.jpg exists on disk, load it with graceful fallback */}
      {!imgFailed ? (
        <img
          src="/EVO ENGLISH.jpg"
          alt="EVO English - Evolve Your Future"
          className={`${sizeDimensions.height} w-auto object-contain transition-opacity duration-300`}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
        />
      ) : (
        /* High-fidelity Vector SVG replica of EVO English logo */
        <div className="flex items-center gap-3">
          <svg
            width={sizeDimensions.iconSize}
            height={sizeDimensions.iconSize}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 drop-shadow-sm"
            aria-label="Biểu trưng EVO English"
          >
            <defs>
              <linearGradient id="orangeFlame" x1="20%" y1="90%" x2="50%" y2="10%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="50%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
              <linearGradient id="blueFlame" x1="80%" y1="90%" x2="50%" y2="10%">
                <stop offset="0%" stopColor="#0369A1" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
              <linearGradient id="sunGrad" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FDE047" />
              </linearGradient>
            </defs>

            {/* Orange Flame Wing (Left) */}
            <path
              d="M 36 22 C 34 32 30 42 24 55 C 19 66 22 78 30 84 C 36 89 44 89 50 85 C 41 83 37 75 36 67 C 35 58 40 50 44 43 C 48 36 49 28 36 22 Z"
              fill="url(#orangeFlame)"
            />

            {/* Blue Wave/Flame Wing (Right) */}
            <path
              d="M 46 29 C 48 37 53 45 61 52 C 70 60 76 68 76 77 C 76 86 69 91 60 92 C 72 90 79 82 78 71 C 77 62 69 54 62 48 C 55 42 51 35 46 29 Z"
              fill="url(#blueFlame)"
            />

            {/* Rising Sun */}
            <circle cx="50" cy="54" r="9" fill="url(#sunGrad)" />
            {/* Sun Rays */}
            <path
              d="M 50 40 L 50 43 M 42 43 L 44 45 M 58 43 L 56 45 M 36 50 L 39 51 M 64 50 L 61 51"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Open Book in Center */}
            <path
              d="M 50 64 C 44 60 38 60 33 63 L 33 72 C 38 69 44 69 50 73 C 56 69 62 69 67 72 L 67 63 C 62 60 56 60 50 64 Z"
              fill="#FFFFFF"
              stroke="#0369A1"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Center book spine */}
            <line x1="50" y1="64" x2="50" y2="73" stroke="#0369A1" strokeWidth="1.8" />
          </svg>

          {/* Typography */}
          <div className="flex flex-col leading-tight">
            <div className="flex items-baseline gap-1.5 font-extrabold tracking-tight">
              <span className={`text-[#0A4D8C] ${sizeDimensions.textEvo} font-black`}>EVO</span>
              <span className={`text-[#F37021] ${sizeDimensions.textEn} tracking-wider font-extrabold`}>ENGLISH</span>
            </div>
            {showSlogan && (
              <span className={`text-slate-500 font-semibold tracking-widest uppercase ${sizeDimensions.slogan}`}>
                EVOLVE YOUR FUTURE
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
