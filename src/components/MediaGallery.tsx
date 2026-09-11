"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

const galleries = {
  cover: [
    ["/images/images/cover.jpg", "Konnektoren cover"],
    ["/images/images/media-kit/cover/cover-hero.jpg", "Media Kit cover"],
    ["/images/images/media-kit/pages/01-cover-page.png", "Cover page preview"],
  ],
  intro: [
    ["/images/images/media-kit/intro/berlin-cathedral-community.jpg", "Berlin cathedral community"],
    ["/images/images/media-kit/intro/berlin-tv-tower.jpg", "Berlin TV tower"],
    ["/images/images/media-kit/intro/brandenburg-gate-polaroid.jpg", "Brandenburg Gate"],
    ["/images/images/media-kit/intro/learning-app-devices.jpg", "Learning app devices"],
    ["/images/images/media-kit/pages/02-intro-page.png", "Intro page preview"],
  ],
  founder: [
    ["/images/images/media-kit/founder/berlin-skyline.jpg", "Berlin skyline"],
    ["/images/images/media-kit/founder/learning-desk.jpg", "Learning desk"],
    ["/images/images/media-kit/founder/sofiia-cafe.jpg", "Sofiia at a café"],
    ["/images/images/media-kit/founder/sofiia-portrait-brandenburg.jpg", "Sofiia in Berlin"],
    ["/images/images/media-kit/founder/travel-passport.jpg", "Travel and opportunity"],
    ["/images/images/media-kit/pages/03-founder-page.png", "Founder page preview"],
  ],
  audience: [
    ["/images/images/media-kit/audience/berlin-commuter.jpg", "Berlin commuter"],
    ["/images/images/media-kit/audience/berlin-tv-tower-view.jpg", "Berlin view"],
    ["/images/images/media-kit/audience/berlin-u-bahn.jpg", "Berlin U-Bahn"],
    ["/images/images/media-kit/audience/community-group.jpg", "Community group"],
    ["/images/images/media-kit/audience/konnektoren-tote-bag.jpg", "Konnektoren tote bag"],
    ["/images/images/media-kit/audience/language-learning-desk.jpg", "Language learning"],
    ["/images/images/media-kit/audience/sofiia-reichstag.jpg", "Sofiia at the Reichstag"],
    ["/images/images/media-kit/pages/04-audience-page.png", "Audience page preview"],
  ],
  numbers: [
    ["/images/images/media-kit/numbers/berlin-sculpture.jpg", "Berlin sculpture"],
    ["/images/images/media-kit/numbers/berlin-subway-motion.jpg", "Subway in motion"],
    ["/images/images/media-kit/numbers/berlin-window-tv-tower.jpg", "Berlin through a window"],
    ["/images/images/media-kit/numbers/konnektoren-tote-bag.jpg", "Konnektoren tote bag"],
    ["/images/images/media-kit/numbers/sofiia-city-walk.jpg", "City walk"],
    ["/images/images/media-kit/pages/05-numbers-page.png", "Numbers page preview"],
  ],
  "content-pillars": [
    ["/images/images/media-kit/content-pillars/berlin-u-bahn-hero.jpg", "Berlin U-Bahn"],
    ["/images/images/media-kit/content-pillars/community-friends.jpg", "Community friends"],
    ["/images/images/media-kit/content-pillars/creator-camera.jpg", "Creator camera"],
    ["/images/images/media-kit/content-pillars/education-laptop.jpg", "Education and laptop"],
    ["/images/images/media-kit/content-pillars/germany-brandenburg-gate.jpg", "Germany and Brandenburg Gate"],
    ["/images/images/media-kit/content-pillars/lifestyle-sofiia.jpg", "Sofiia lifestyle"],
    ["/images/images/media-kit/content-pillars/technology-camera.jpg", "Technology camera"],
    ["/images/images/media-kit/pages/06-content-pillars-page.png", "Content pillars page preview"],
  ],
  creator: [
    ["/images/images/media-kit/creator/cafe-content.jpg", "Café content"],
    ["/images/images/media-kit/creator/creative-silhouette.jpg", "Creative silhouette"],
    ["/images/images/media-kit/creator/creator-filming-brandenburg.jpg", "Creator filming"],
    ["/images/images/media-kit/creator/editing-screens-strip.jpg", "Editing screens"],
    ["/images/images/media-kit/creator/editorial-writing.jpg", "Editorial writing"],
    ["/images/images/media-kit/creator/ifa-content.jpg", "IFA content"],
    ["/images/images/media-kit/creator/interview-production.jpg", "Interview production"],
    ["/images/images/media-kit/creator/microphone-production.jpg", "Microphone production"],
    ["/images/images/media-kit/creator/phone-filming.jpg", "Phone filming"],
    ["/images/images/media-kit/creator/street-content-tote.jpg", "Street content"],
    ["/images/images/media-kit/creator/video-editing.jpg", "Video editing"],
    ["/images/images/media-kit/pages/07-creator-page.png", "Creator page preview"],
  ],
  "brand-story": [
    ["/images/images/media-kit/brand-story/berlin-skyline-wide.jpg", "Berlin skyline"],
    ["/images/images/media-kit/brand-story/berlin-tv-tower-note.jpg", "Berlin TV tower note"],
    ["/images/images/media-kit/brand-story/cafe-brand-note.jpg", "Brand story café"],
    ["/images/images/media-kit/brand-story/konnektoren-laptop-note.jpg", "Konnektoren laptop"],
    ["/images/images/media-kit/brand-story/phone-berlin-content.jpg", "Berlin content"],
    ["/images/images/media-kit/brand-story/sofiia-brandenburg-story.jpg", "Sofiia Brandenburg story"],
    ["/images/images/media-kit/pages/08-brand-story-page.png", "Brand story page preview"],
  ],
  "global-community": [
    ["/images/images/media-kit/global-community/berlin-u-bahn-motion.jpg", "Berlin U-Bahn motion"],
    ["/images/images/media-kit/global-community/community-rooftop.jpg", "Community rooftop"],
    ["/images/images/media-kit/global-community/konnektoren-note.jpg", "Konnektoren note"],
    ["/images/images/media-kit/global-community/learning-laptop.jpg", "Learning laptop"],
    ["/images/images/media-kit/global-community/sofiia-rooftop-berlin.jpg", "Sofiia rooftop"],
    ["/images/images/media-kit/pages/09-global-community-page.png", "Global community page preview"],
  ],
  collaboration: [
    ["/images/images/media-kit/collaboration/berlin-skyline-partnership.jpg", "Berlin partnership"],
    ["/images/images/media-kit/collaboration/camera-brand-story.jpg", "Camera brand story"],
    ["/images/images/media-kit/collaboration/ifa-event.jpg", "IFA event"],
    ["/images/images/media-kit/collaboration/konnektoren-tote.jpg", "Konnektoren tote"],
    ["/images/images/media-kit/collaboration/partnership-note-cup.jpg", "Partnership note"],
    ["/images/images/media-kit/collaboration/sofiia-berlin-subway.jpg", "Sofiia in the subway"],
    ["/images/images/media-kit/pages/10-collaboration-page.png", "Collaboration page preview"],
  ],
  impact: [
    ["/images/images/media-kit/impact/berlin-city-note.jpg", "Berlin city note"],
    ["/images/images/media-kit/impact/brandenburger-tor-station.jpg", "Brandenburg Gate station"],
    ["/images/images/media-kit/impact/community-cup.jpg", "Community cup"],
    ["/images/images/media-kit/impact/good-people-sign.jpg", "Good people"],
    ["/images/images/media-kit/impact/heart-over-berlin.jpg", "Heart over Berlin"],
    ["/images/images/media-kit/impact/language-laptop.jpg", "Language laptop"],
    ["/images/images/media-kit/impact/sofiia-rooftop-sunset.jpg", "Sofiia at sunset"],
    ["/images/images/media-kit/pages/11-impact-page.png", "Impact page preview"],
  ],
  contact: [
    ["/images/images/media-kit/contact/berlin-skyline-note.jpg", "Berlin skyline note"],
    ["/images/images/media-kit/contact/creator-camera.jpg", "Creator camera"],
    ["/images/images/media-kit/contact/konnektoren-card.jpg", "Konnektoren card"],
    ["/images/images/media-kit/contact/language-laptop.jpg", "Language laptop"],
    ["/images/images/media-kit/contact/sofiia-heart-berlin.jpg", "Sofiia heart Berlin"],
    ["/images/images/media-kit/pages/12-contact-page.png", "Contact page preview"],
  ],
} as const;

type GalleryName = keyof typeof galleries;

export default function MediaGallery({ section }: { section: GalleryName }) {
  return (
    <div className="media-gallery" aria-label={`${section} image gallery`}>
      {galleries[section].map(([src, alt], index) => (
        <motion.figure
          className="media-gallery__item"
          key={src}
          initial={{ opacity: 0, y: 45, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <Image src={assetPath(src)} alt={alt} fill sizes="(max-width: 600px) 46vw, 22vw" style={{ objectFit: "cover" }} />
          <figcaption>{alt}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
