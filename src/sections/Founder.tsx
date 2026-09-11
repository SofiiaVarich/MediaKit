import SectionImage from "@/components/SectionImage";
import MediaGallery from "@/components/MediaGallery";

export default function Founder() {
  return (
    <section className="section section--dark"><div className="section__inner">
      <span className="section-number">03 / 12</span>
      <h2 className="editorial-heading">BEHIND <span className="orange">KONNEKTOREN</span></h2>
      <div className="section-copy"><h3 className="section-kicker">Sofiia Varich</h3><p>FOUNDER · DEVELOPER · CREATOR</p><p>I founded Konnektoren to make learning German more interactive, visual and engaging — and to help people connect with Germany through language, culture and real opportunities.</p><p>With a background in technology, education and international experience, I combine my passion for learning, innovation and storytelling to build tools that make a real impact.</p><p className="section-kicker">Technology & Development · Education & Languages · Content Creation · Travel & Lifestyle</p><p className="quote">“A more connected, open and kind world through language.”</p></div>
      <SectionImage src="/images/images/media-kit/audience/sofiia-reichstag.jpg" label="A Berlin perspective" position="30% center" tone="dark" />
            <MediaGallery section="founder" />
    </div></section>
  );
}
