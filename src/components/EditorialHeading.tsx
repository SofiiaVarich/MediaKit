"use client";

import { motion } from "framer-motion";

interface EditorialHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function EditorialHeading({
  children,
  className = "",
}: EditorialHeadingProps) {
  return (
    <motion.h2
      className={`editorial-heading ${className}`}
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.h2>
  );
}
