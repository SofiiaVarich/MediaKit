import SectionImage from "@/components/SectionImage";
import MediaGallery from "@/components/MediaGallery";
import { mediaKit } from "@/data/mediaKit";

export default function GlobalCommunity() {
  return <section className="section section--dark"><div className="section__inner"><span className="section-number">09 / 12</span><h2 className="editorial-heading">A GLOBAL <span className="orange">COMMUNITY</span><br />IN PROGRESS.</h2><div className="section-copy"><p>Learners. Creators. Developers. Expats. Adventurers. Young people. Together across languages, cultures and borders.</p><div className="stats-grid">{mediaKit.stats.filter((stat) => ["MONTHLY USERS", "PAGES OF LEARNING CONTENT", "LANGUAGES"].includes(stat.label)).map((stat) => <Stat key={stat.label} value={`${stat.value}${stat.suffix}`} label={stat.label} />)}</div><h3 className="section-kicker">Our audience</h3><ol className="numbered-list">{mediaKit.audience.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div><SectionImage src="/images/images/media-kit/audience/berlin-u-bahn.jpg" label="One community, many perspectives" position="20% center" tone="dark" /><MediaGallery section="global-community" /></div></section>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="stat-counter"><div className="stat-counter__number">{value}</div><div className="stat-counter__label">{label}</div></div>;
}
