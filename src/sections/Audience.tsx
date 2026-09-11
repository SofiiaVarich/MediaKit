import SectionImage from "@/components/SectionImage";
import MediaGallery from "@/components/MediaGallery";
import { mediaKit } from "@/data/mediaKit";

export default function Audience() {
  return (
    <section className="section section--dark"><div className="section__inner">
      <span className="section-number">04 / 12</span><h2 className="editorial-heading">WHO WE <span className="orange">CONNECT WITH</span></h2>
      <div className="section-copy"><p>A global community of curious, ambitious and open-minded people who want to learn German and connect with new opportunities in Germany and beyond.</p><ol className="numbered-list">{mediaKit.audience.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div>
      <SectionImage src="/images/images/media-kit/audience/community-group.jpg" label="People connected by language" position="65% center" tone="dark" />
            <MediaGallery section="audience" />
    </div></section>
  );
}
