import SectionImage from "@/components/SectionImage";

export default function GlobalCommunity() {
  return (
    <section className="section section--dark">
      <div className="section__inner">
        <span className="section-number">09 / 12</span>
        <h2 className="editorial-heading">GLOBAL <span className="orange">COMMUNITY</span></h2>
        <SectionImage
                  src="/images/images/media-kit/audience/berlin-u-bahn.jpg"
                  label="One community, many perspectives"
                  position="20% center"
                  tone="dark"
                />
      </div>
    </section>
  );
}
