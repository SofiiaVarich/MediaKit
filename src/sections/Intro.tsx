"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EditorialHeading from "@/components/EditorialHeading";
import MediaGallery from "@/components/MediaGallery";

export default function Intro() {
  return (
    <section className="section section--light">
      <div className="section__inner">
        <span className="section-number">02 / 12</span>
        <EditorialHeading>GERMAN,<br />BUT <span className="orange">DIFFERENT.</span></EditorialHeading>
        <div className="intro-grid">
          <motion.div className="intro-copy" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <p>Konnektoren is a Berlin-based educational platform making German grammar and vocabulary more interactive, visual and engaging.</p>
            <p>We combine education, technology, gamification and creator-led storytelling to help people connect with Germany through language.</p>
            <p className="section-kicker">Education · Technology · Culture · Community</p>
            <div className="levels"><strong>A0</strong><span>→</span><strong className="orange">C1</strong></div>
            <p className="quote">A platform for real life.</p>
            <p>Whether you are moving to Germany, starting your studies, growing your career or simply curious about the language and culture — Konnektoren is here to support you on your journey.</p>
            <p className="section-kicker">Language opens doors.</p>
            <p>People connect cultures.</p>
          </motion.div>
          <div className="intro-visual">
            <motion.div className="intro-visual__image" initial={{ opacity: 0, scale: 1.12, y: 45 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-15%" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
              <Image src="/images/images/media-kit/audience/language-learning-desk.jpg" alt="Konnektoren community in Berlin" fill sizes="(max-width: 900px) 92vw, 42vw" style={{ objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
        <MediaGallery section="intro" />
      </div>
    </section>
  );
}
