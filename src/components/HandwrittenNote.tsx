"use client";

import { motion } from "framer-motion";

interface HandwrittenNoteProps {
  children: React.ReactNode;
  className?: string;
}

export default function HandwrittenNote({
  children,
  className = "",
}: HandwrittenNoteProps) {
  return (
    <motion.div
      className={`handwritten-note ${className}`}
      initial={{
        opacity: 0,
        rotate: -10,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        rotate: -5,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.9,
        delay: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}
