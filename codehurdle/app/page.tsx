import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { WhyCodeHurdle } from "@/components/sections/why-codehurdle";
import { LearningTopics } from "@/components/sections/learning-topics";
import { CodingPractice } from "@/components/sections/coding-practice";
import { ProgressDashboard } from "@/components/sections/progress-dashboard";
import { LearningJourney } from "@/components/sections/learning-journey";
import { CompanyPrep } from "@/components/sections/company-prep";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <WhyCodeHurdle />
      <LearningTopics />
      <CodingPractice />
      <ProgressDashboard />
      <LearningJourney />
      <CompanyPrep />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
