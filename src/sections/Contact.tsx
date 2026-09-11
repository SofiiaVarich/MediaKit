import SectionImage from "@/components/SectionImage";

export default function Contact() {
  return (
    <section className="section section--dark">
      <div className="section__inner">
        <span className="section-number">12 / 12</span>
        <h2 className="editorial-heading">LET'S <span className="orange">TALK</span></h2>
        <SectionImage
                  src="/images/images/media-kit/contact/konnektoren-card.jpg"
                  label="Start a conversation"
                  position="center 20%"
                  tone="dark"
                />
      </div>
    </section>
  );
}
