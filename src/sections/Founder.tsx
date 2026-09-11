import SectionImage from "@/components/SectionImage";

export default function Founder() {
  return (
    <section className="section section--dark">
      <div className="section__inner">
        <span className="section-number">03 / 12</span>
        <h2 className="editorial-heading">THE <span className="orange">FOUNDER</span></h2>
        <SectionImage
                  src="/images/images/media-kit/audience/sofiia-reichstag.jpg"
                  label="A Berlin perspective"
                  position="30% center"
                  tone="dark"
                />
      </div>
    </section>
  );
}
