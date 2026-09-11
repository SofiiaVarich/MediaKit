"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import HandwrittenNote from "@/components/HandwrittenNote";

export default function Cover() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      "start start",
      "end start",
    ],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "20%"]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "50%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <section
      ref={ref}
      className="cover"
    >
      <motion.div
        className="cover__image"
        style={{
          y: imageY,
        }}
      >
        <Image
          src="/images/images/cover.jpg"
          alt="Konnektoren Media Kit"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>

      <div className="cover__overlay" />

      <motion.div
        className="cover__content"
        style={{
          y: textY,
          opacity,
        }}
      >
        <motion.div
          className="cover__meta"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          BERLIN · EDUCATION · TECH · CULTURE
        </motion.div>

        <h1 className="cover__title">
          <motion.span
            initial={{
              y: 160,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            KONNEK
          </motion.span>

          <motion.span
            className="orange"
            initial={{
              y: 160,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            TOREN
          </motion.span>
        </h1>

        <motion.div
          className="cover__media-kit"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >
          MEDIA KIT
          <strong>2026</strong>
        </motion.div>

        <HandwrittenNote className="cover__note">
          Mehr als
          <br />
          eine Sprache ♡
        </HandwrittenNote>
      </motion.div>

      <div className="cover__scroll">
        SCROLL TO EXPLORE ↓
      </div>
    </section>
  );
}
