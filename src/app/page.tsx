import Cover from "@/sections/Cover";
import Intro from "@/sections/Intro";
import Founder from "@/sections/Founder";
import Audience from "@/sections/Audience";
import Numbers from "@/sections/Numbers";
import ContentPillars from "@/sections/ContentPillars";
import Creator from "@/sections/Creator";
import BrandStory from "@/sections/BrandStory";
import GlobalCommunity from "@/sections/GlobalCommunity";
import Collaboration from "@/sections/Collaboration";
import Impact from "@/sections/Impact";
import Contact from "@/sections/Contact";

import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />

      <Cover />
      <Intro />
      <Founder />
      <Audience />
      <Numbers />
      <ContentPillars />
      <Creator />
      <BrandStory />
      <GlobalCommunity />
      <Collaboration />
      <Impact />
      <Contact />
    </main>
  );
}
