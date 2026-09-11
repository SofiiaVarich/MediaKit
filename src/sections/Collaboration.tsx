import SectionImage from "@/components/SectionImage";
import MediaGallery from "@/components/MediaGallery";
import { mediaKit } from "@/data/mediaKit";

export default function Collaboration() {
  return <section className="section section--dark"><div className="section__inner"><span className="section-number">10 / 12</span><h2 className="editorial-heading">LET’S <span className="orange">BUILD</span><br />A BRIGHTER TOMORROW.</h2><p className="section-copy">Meaningful collaborations create real opportunities for people, for brands, for a more connected world.</p><h3 className="section-kicker">Collaborate with us</h3><div className="brand-list">{mediaKit.collaborationTypes.map((type) => <span key={type}>{type}</span>)}</div><p className="quote">“When people, ideas and cultures connect, extraordinary things become possible.”</p><h3 className="section-kicker">Trusted by forward-thinking brands</h3><div className="brand-list">{mediaKit.trustedBrands.map((brand) => <span key={brand}>{brand}</span>)}</div><SectionImage src="/images/images/media-kit/collaboration/berlin-skyline-partnership.jpg" label="Built for meaningful collaborations" position="55% center" tone="dark" /><MediaGallery section="collaboration" /></div></section>;
}
