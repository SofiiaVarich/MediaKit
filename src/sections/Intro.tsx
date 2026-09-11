"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import EditorialHeading from "@/components/EditorialHeading";

export default function Intro() {
  return (
    <section className="section section--light">
      <div className="section__inner">

        <span className="section-number">
          02 / 12
        </span>

        <EditorialHeading>
          GERMAN,
          <br />
          BUT{" "}
          <span className="orange">
            DIFFERENT.
          </span>
        </EditorialHeading>

        <div className="intro-grid">

          <motion.div
            className="intro-copy"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <p>
              Konnektoren is a Berlin-based
              educational platform making
              German grammar and vocabulary
              more interactive, visual and engaging.
            </p>

            <p>
              We combine education,
              technology, gamification and
              creator-led storytelling.
            </p>
          </motion.div>

          <div className="intro-visual">
            <motion.div
              className="intro-visual__image"
              initial={{
                opacity: 0,
                scale: 1.12,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-15%",
              }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src="/images/images/media-kit/audience/language-learning-desk.jpg"
                alt="Konnektoren community in Berlin"
                fill
                sizes="(max-width: 900px) 92vw, 42vw"
                style={{ objectFit: "cover" }}
              />
            </motion.div>

            <motion.div
              className="levels"
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
            >
              <strong>A0</strong>
              <span>→</span>
              <strong className="orange">C1</strong>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
