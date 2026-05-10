"use client";

import { motion } from "framer-motion";

interface BulldogLogoProps {
  size?: number;
  className?: string;
}

export default function BulldogLogo({ size = 48, className = "" }: BulldogLogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.08, rotate: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Broad head shape - wider, more muscular */}
      <motion.path
        d="M8 30C8 18 18 9 32 9C46 9 56 18 56 30V36C56 48 46 54 32 54C18 54 8 48 8 36V30Z"
        fill="#1e293b"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Left ear - pointed, alert */}
      <motion.path
        d="M12 26L6 10L20 18Z"
        fill="#1e293b"
        stroke="#0f172a"
        strokeWidth="0.5"
        animate={{ rotate: [0, -2, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{ transformOrigin: "16px 20px" }}
      />
      <path d="M13 24L8 12L19 19Z" fill="#334155" />

      {/* Right ear - pointed, alert */}
      <motion.path
        d="M52 26L58 10L44 18Z"
        fill="#1e293b"
        stroke="#0f172a"
        strokeWidth="0.5"
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2 }}
        style={{ transformOrigin: "48px 20px" }}
      />
      <path d="M51 24L56 12L45 19Z" fill="#334155" />

      {/* Brow ridge - heavy, aggressive */}
      <path
        d="M14 24C14 24 20 20 32 20C44 20 50 24 50 24C50 24 46 22 32 22C18 22 14 24 14 24Z"
        fill="#0f172a"
      />

      {/* Deep-set angry eyebrows */}
      <motion.path
        d="M18 22L27 24"
        stroke="#0f172a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M18 22L27 24", "M18 21L27 23.5", "M18 22L27 24"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M46 22L37 24"
        stroke="#0f172a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M46 22L37 24", "M46 21L37 23.5", "M46 22L37 24"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left eye - narrow, intense */}
      <motion.g
        animate={{ scaleY: [1, 1, 0.15, 1, 1] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.48, 0.5, 0.52, 1] }}
        style={{ transformOrigin: "24px 28px" }}
      >
        <ellipse cx="24" cy="28" rx="4.5" ry="3.5" fill="#fbbf24" />
        <motion.ellipse
          cx="24"
          cy="28"
          rx="2.5"
          ry="3"
          fill="#0f172a"
          animate={{ cx: [24, 25, 24, 23, 24] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <ellipse cx="25" cy="27" rx="0.8" ry="0.6" fill="#fbbf24" opacity="0.4" />
      </motion.g>

      {/* Right eye - narrow, intense */}
      <motion.g
        animate={{ scaleY: [1, 1, 0.15, 1, 1] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.48, 0.5, 0.52, 1] }}
        style={{ transformOrigin: "40px 28px" }}
      >
        <ellipse cx="40" cy="28" rx="4.5" ry="3.5" fill="#fbbf24" />
        <motion.ellipse
          cx="40"
          cy="28"
          rx="2.5"
          ry="3"
          fill="#0f172a"
          animate={{ cx: [40, 41, 40, 39, 40] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <ellipse cx="41" cy="27" rx="0.8" ry="0.6" fill="#fbbf24" opacity="0.4" />
      </motion.g>

      {/* Wide muzzle */}
      <path
        d="M18 34C18 34 22 44 32 44C42 44 46 34 46 34V40C46 47 40 50 32 50C24 50 18 47 18 40V34Z"
        fill="#475569"
      />

      {/* Jowls - heavy, droopy */}
      <path
        d="M14 32C14 32 12 38 14 42C16 46 20 46 22 44"
        fill="#334155"
      />
      <path
        d="M50 32C50 32 52 38 50 42C48 46 44 46 42 44"
        fill="#334155"
      />

      {/* Wrinkles - more pronounced */}
      <path d="M22 16C22 16 32 13 42 16" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M24 18.5C24 18.5 32 16 40 18.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M26 20.5C26 20.5 32 18.5 38 20.5" stroke="#334155" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Big nose */}
      <motion.path
        d="M26 35C26 33 28 31 32 31C36 31 38 33 38 35C38 37 36 39 32 39C28 39 26 37 26 35Z"
        fill="#0f172a"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "32px 35px" }}
      />
      {/* Nostrils */}
      <ellipse cx="29.5" cy="35.5" rx="1.5" ry="1.2" fill="#1e293b" />
      <ellipse cx="34.5" cy="35.5" rx="1.5" ry="1.2" fill="#1e293b" />
      {/* Nose shine */}
      <ellipse cx="30.5" cy="33.5" rx="1" ry="0.6" fill="#334155" opacity="0.4" />

      {/* Mouth - showing teeth, snarl */}
      <path
        d="M24 42C24 42 28 45 32 45C36 45 40 42 40 42"
        stroke="#1e293b"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Underbite teeth */}
      <motion.g
        animate={{ y: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="27" y="44" width="3" height="3" rx="0.5" fill="white" />
        <rect x="31" y="44.5" width="2.5" height="2.5" rx="0.5" fill="white" />
        <rect x="34.5" y="44" width="3" height="3" rx="0.5" fill="white" />
      </motion.g>

      {/* Fangs peeking from sides */}
      <path d="M23 42L24.5 46L26 42" fill="white" />
      <path d="M38 42L39.5 46L41 42" fill="white" />

      {/* Spiked collar */}
      <motion.g
        animate={{ y: [0, 0.5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M16 50C16 50 24 55 32 55C40 55 48 50 48 50"
          stroke="#0c93e7"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Spikes */}
        <circle cx="20" cy="51" r="1.5" fill="#94a3b8" stroke="#64748b" strokeWidth="0.5" />
        <circle cx="26" cy="53" r="1.5" fill="#94a3b8" stroke="#64748b" strokeWidth="0.5" />
        <circle cx="32" cy="54" r="1.5" fill="#94a3b8" stroke="#64748b" strokeWidth="0.5" />
        <circle cx="38" cy="53" r="1.5" fill="#94a3b8" stroke="#64748b" strokeWidth="0.5" />
        <circle cx="44" cy="51" r="1.5" fill="#94a3b8" stroke="#64748b" strokeWidth="0.5" />
        {/* Tag */}
        <motion.g
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "32px 55px" }}
        >
          <circle cx="32" cy="59" r="3.5" fill="#0c93e7" stroke="#0074c5" strokeWidth="0.5" />
          <text x="30" y="61" fontSize="4.5" fill="white" fontWeight="bold">Z</text>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}
