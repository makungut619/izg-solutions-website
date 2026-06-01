"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BulldogLogoProps {
  size?: number;
  className?: string;
}

export default function BulldogLogo({ size = 48, className = "" }: BulldogLogoProps) {
  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.08, rotate: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <Image
        src="/bulldog-logo.png"
        alt="IZG Solutions Bulldog Logo"
        width={size}
        height={size}
        className=""
        priority
      />
    </motion.div>
  );
}
