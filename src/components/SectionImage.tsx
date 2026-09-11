"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SectionImageProps {
  label: string;
  src: string;
  position?: string;
  tone?: "light" | "dark";
}

export default function SectionImage({
  label,
  src,
  position = "center",
  tone = "light",
}: SectionImageProps) {
  return (
    <motion.figure
      className={`section-image section-image--${tone}`}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes="(max-width: 900px) 92vw, 70vw"
        style={{ objectFit: "cover", objectPosition: position }}
      />
      <figcaption>{label}</figcaption>
    </motion.figure>
  );
}
