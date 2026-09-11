import SectionImage from "@/components/SectionImage";
import MediaGallery from "@/components/MediaGallery";

const impactStats = [["600+", "MONTHLY USERS"], ["3", "LANGUAGES · EN / PL / TR"], ["157", "PAGES OF LEARNING CONTENT"], ["A0–C1", "FOR EVERY LEARNING JOURNEY"]];

export default function Impact() {
  return <section className="section section--dark"><div className="section__inner"><span className="section-number">11 / 12</span><h2 className="editorial-heading">MORE THAN <span className="orange">LANGUAGE.</span></h2><p className="section-copy">Konnektoren is a community, a mindset and a movement for a more open, connected and kinder world.</p><h3 className="section-kicker">Our impact</h3><div className="content-grid">{impactStats.map(([value, label]) => <article className="content-card" key={label}><h3>{value}</h3><p>{label}</p></article>)}</div><p className="quote">“A more connected tomorrow is possible.”</p><h3 className="section-kicker">Together we can</h3><ul className="numbered-list">{["Create opportunities", "Break down barriers", "Support learners worldwide", "Bring people and cultures closer", "Build a more inclusive future"].map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul><SectionImage src="/images/images/media-kit/audience/berlin-commuter.jpg" label="Learning that moves people" position="center 80%" tone="dark" /><MediaGallery section="impact" /></div></section>;
}
