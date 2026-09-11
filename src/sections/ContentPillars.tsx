"use client";

import { motion } from "framer-motion";
import EditorialHeading from "@/components/EditorialHeading";
import MediaGallery from "@/components/MediaGallery";
import SectionImage from "@/components/SectionImage";
import { mediaKit } from "@/data/mediaKit";

export default function ContentPillars() {
  return <section className="section section--light"><div className="section__inner"><span className="section-number">06 / 12</span><EditorialHeading>MORE THAN<br /><span className="orange">LANGUAGE.</span></EditorialHeading><p className="section-copy">Konnektoren brings together education, technology, German culture and the modern Berlin experience.</p><SectionImage src="/images/images/media-kit/brand-story/konnektoren-laptop-note.jpg" label="More ways to connect" position="center 65%" tone="light" /><div className="pillars-grid">{mediaKit.pillars.map((pillar, index) => <motion.article key={pillar.number} className="pillar-card" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.08 }}><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.description}</p></motion.article>)}</div><MediaGallery section="content-pillars" /></div></section>;
}
