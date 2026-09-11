import EditorialHeading from "@/components/EditorialHeading";
import SectionImage from "@/components/SectionImage";
import StatCounter from "@/components/StatCounter";

import { mediaKit } from "@/data/mediaKit";

export default function Numbers() {
  return (
    <section className="section section--light">

      <div className="section__inner">

        <span className="section-number">
          05 / 12
        </span>

        <EditorialHeading>
          THE
          <br />

          <span className="orange">
            NUMBERS
          </span>

          <br />

          SPEAK.
        </EditorialHeading>

        <SectionImage
                  src="/images/images/media-kit/audience/berlin-tv-tower-view.jpg"
                  label="Learning in motion"
                  position="center 35%"
                  tone="light"
                />

        <div className="stats-grid">

          {mediaKit.stats.map(
            (stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            )
          )}

        </div>

      </div>

    </section>
  );
}
