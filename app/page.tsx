import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import QuizCTASection from "@/components/home/QuizCTASection";
import FounderSection from "@/components/home/FounderSection";
import TransformationsSection from "@/components/home/TransformationsSection";
import StatsSection from "@/components/home/StatsSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import NewsletterSection from "@/components/home/NewsletterSection";

import content from "@/data/content.json";

export default function Home() {
  return (
    <>
      <Navbar
        siteName={content.site.name}
        links={content.navbar.links}
        cta={content.navbar.cta}
      />

      <main className="min-h-screen bg-white">
        <HeroSection
          badge={content.hero.badge}
          subheading={content.hero.subheading}
          cta={content.hero.cta}
          trustPoints={content.hero.trustPoints}
        />

        <ProblemSection
          heading={content.problem.heading}
          items={content.problem.items}
          closing={content.problem.closing}
        />

        <QuizCTASection
          heading={content.quizCTA.heading}
          benefits={content.quizCTA.benefits}
          leadMagnet={content.quizCTA.leadMagnet}
          cta={content.quizCTA.cta}
          socialProof={content.quizCTA.socialProof}
        />

        <FounderSection
          label={content.founder.label}
          name={content.founder.name}
          heading={content.founder.heading}
          paragraphs={content.founder.paragraphs}
          images={content.founder.images}
        />

        <TransformationsSection
          heading={content.transformations.heading}
          items={content.transformations.items}
        />

        <StatsSection
          heading={content.stats.heading}
          items={content.stats.items}
        />

        <BlogPreviewSection
          heading={content.blog.heading}
          posts={content.blog.posts}
          cta={content.blog.cta}
        />

        {/* <NewsletterSection
        heading={content.newsletter.heading}
        description={content.newsletter.description}
        form={content.newsletter.form}
        disclaimer={content.newsletter.disclaimer}
      /> */}
      </main>

      <Footer
        siteName={content.site.name}
        links={content.footer.links}
        social={content.footer.social}
        copyright={content.footer.copyright}
      />
    </>
  );
}
