import SectionImage from "@/components/SectionImage";

export default function Impact() {
  return (
    <section className="section section--dark">
      <div className="section__inner">
        <span className="section-number">11 / 12</span>
        <h2 className="editorial-heading">MAKE AN <span className="orange">IMPACT</span></h2>
        <SectionImage
                  src="/images/images/media-kit/audience/berlin-commuter.jpg"
                  label="Learning that moves people"
                  position="center 80%"
                  tone="dark"
                />
      </div>
    </section>
  );
}
