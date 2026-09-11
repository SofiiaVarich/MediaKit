import SectionImage from "@/components/SectionImage";

export default function BrandStory() {
  return (
    <section className="section section--dark">
      <div className="section__inner">
        <span className="section-number">08 / 12</span>
        <h2 className="editorial-heading">OUR <span className="orange">STORY</span></h2>
        <SectionImage
                  src="/images/images/media-kit/brand-story/berlin-skyline-wide.jpg"
                  label="A visual language for learning"
                  position="75% center"
                  tone="dark"
                />
      </div>
    </section>
  );
}
