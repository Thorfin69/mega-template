import React from "react";
import { motion } from "motion/react";
import { STNavbar } from "./components/STNavbar";
import { STHero } from "./components/STHero";
import { STTrustBar } from "./components/STTrustBar";
import { STProblems } from "./components/STProblems";
import { STTwoTrack } from "./components/STTwoTrack";
import { STServicesTabs } from "./components/STServicesTabs";
import { STSolutions } from "./components/STSolutions";
import { STHowItWorks } from "./components/STHowItWorks";
import { STTestimonials } from "./components/STTestimonials";
import { STIRSNotice } from "./components/STIRSNotice";
import { STStats } from "./components/STStats";
import { STBlog } from "./components/STBlog";
import { STFAQ } from "./components/STFAQ";
import { STCTA } from "./components/STCTA";
import { STFooter } from "./components/STFooter";

export function SympleTaxPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white flex flex-col"
    >
      <STNavbar />
      <STHero />
      <STTrustBar />
      <STProblems />
      <STTwoTrack />
      <STServicesTabs />
      <STSolutions />
      <STHowItWorks />
      <STTestimonials />
      <STIRSNotice />
      <STStats />
      <STBlog />
      <STFAQ />
      <STCTA />
      <STFooter />
    </motion.div>
  );
}
