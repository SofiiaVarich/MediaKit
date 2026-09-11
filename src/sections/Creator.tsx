import SectionImage from "@/components/SectionImage";

export default function Creator() {
  return (
    <section className="section section--dark">
      <div className="section__inner">
        <span className="section-number">07 / 12</span>
        <h2 className="editorial-heading">THE <span className="orange">CREATOR</span></h2>
        <SectionImage
                  src="/images/images/media-kit/contact/creator-camera.jpg"
                  label="Stories made to be shared"
                  position="45% center"
                  tone="dark"
                />
      </div>
    </section>
  );
}
