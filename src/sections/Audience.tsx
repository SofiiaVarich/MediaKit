import SectionImage from "@/components/SectionImage";

export default function Audience() {
  return (
    <section className="section section--dark">
      <div className="section__inner">
        <span className="section-number">04 / 12</span>
        <h2 className="editorial-heading">OUR <span className="orange">AUDIENCE</span></h2>
        <SectionImage
                  src="/images/images/media-kit/audience/community-group.jpg"
                  label="People connected by language"
                  position="65% center"
                  tone="dark"
                />
      </div>
    </section>
  );
}
