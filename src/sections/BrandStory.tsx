import SectionImage from "@/components/SectionImage";
import MediaGallery from "@/components/MediaGallery";
import { mediaKit } from "@/data/mediaKit";

export default function BrandStory() {
  return <section className="section section--dark"><div className="section__inner"><span className="section-number">08 / 12</span><h2 className="editorial-heading">YOUR BRAND <span className="orange">BELONGS</span><br />IN THE STORY.</h2><p className="section-copy">We create authentic content about language, education, travel, technology and life in Germany — for a global, multilingual audience.</p><h3 className="section-kicker">Collaboration opportunities</h3><div className="content-grid">{mediaKit.collaborationOpportunities.map(([title, description], index) => <article className="content-card" key={title}><h3>{String(index + 1).padStart(2, "0")} {title}</h3><p>{description}</p></article>)}</div><p className="quote">“Great brands don’t just advertise. They become part of people’s lives.”</p><SectionImage src="/images/images/media-kit/brand-story/berlin-skyline-wide.jpg" label="A visual language for learning" position="75% center" tone="dark" /><MediaGallery section="brand-story" /></div></section>;
}
