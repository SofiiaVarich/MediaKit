import SectionImage from "@/components/SectionImage";
import MediaGallery from "@/components/MediaGallery";
import { mediaKit } from "@/data/mediaKit";

export default function Creator() {
  return <section className="section section--dark"><div className="section__inner"><span className="section-number">07 / 12</span><h2 className="editorial-heading">WE <span className="orange">CREATE.</span><br />PEOPLE WATCH.</h2><div className="content-grid">{mediaKit.creatorFormats.map(([title, description], index) => <article className="content-card" key={title}><h3>{String(index + 1).padStart(2, "0")} {title}</h3><p>{description}</p></article>)}</div><p className="quote">“Real stories create real connections.”</p><SectionImage src="/images/images/media-kit/contact/creator-camera.jpg" label="Stories made to be shared" position="45% center" tone="dark" /><MediaGallery section="creator" /></div></section>;
}
