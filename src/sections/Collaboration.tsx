import SectionImage from "@/components/SectionImage";

export default function Collaboration() {
  return (
    <section className="section section--dark">
      <div className="section__inner">
        <span className="section-number">10 / 12</span>
        <h2 className="editorial-heading">LET'S <span className="orange">CONNECT</span></h2>
        <SectionImage
                  src="/images/images/media-kit/collaboration/berlin-skyline-partnership.jpg"
                  label="Built for meaningful collaborations"
                  position="55% center"
                  tone="dark"
                />
      </div>
    </section>
  );
}
