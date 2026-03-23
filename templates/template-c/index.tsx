import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { ProblemStatement } from "./components/ProblemStatement";
import { TwoTrackLayout } from "./components/TwoTrackLayout";
import { SolutionsOverview } from "./components/SolutionsOverview";
import { HowItWorks } from "./components/HowItWorks";
import { MidCTA } from "./components/MidCTA";
import { ResultsNumbers } from "./components/ResultsNumbers";
import { Testimonials } from "./components/Testimonials";
import { CaseResultSpotlight } from "./components/CaseResultSpotlight";
import { IRSNoticeCallout } from "./components/IRSNoticeCallout";
import { HomeFAQ } from "./components/HomeFAQ";
import { HomeContactForm } from "./components/HomeContactForm";
import { BlogPreview } from "./components/BlogPreview";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export function TemplateC() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white flex flex-col"
    >
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemStatement />
        <TwoTrackLayout />
        <SolutionsOverview />
        <HowItWorks />
        <MidCTA />
        <ResultsNumbers />
        <Testimonials />
        <CaseResultSpotlight />
        <IRSNoticeCallout />
        <HomeFAQ />
        <HomeContactForm />
        <BlogPreview />
        <FinalCTA />
      </main>
      <Footer />
    </motion.div>
  );
}
