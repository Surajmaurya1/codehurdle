import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";

// Code split below-the-fold section components dynamically for zero-blocking LCP
const WhyCodeHurdle = dynamic(
  () => import("@/components/sections/why-codehurdle").then((m) => m.WhyCodeHurdle),
  { ssr: true }
);
const LearningTopics = dynamic(
  () => import("@/components/sections/learning-topics").then((m) => m.LearningTopics),
  { ssr: true }
);
const CodingPractice = dynamic(
  () => import("@/components/sections/coding-practice").then((m) => m.CodingPractice),
  { ssr: true }
);
const ProgressDashboard = dynamic(
  () => import("@/components/sections/progress-dashboard").then((m) => m.ProgressDashboard),
  { ssr: true }
);
const LearningJourney = dynamic(
  () => import("@/components/sections/learning-journey").then((m) => m.LearningJourney),
  { ssr: true }
);
const CompanyPrep = dynamic(
  () => import("@/components/sections/company-prep").then((m) => m.CompanyPrep),
  { ssr: true }
);
const Testimonials = dynamic(
  () => import("@/components/sections/testimonials").then((m) => m.Testimonials),
  { ssr: true }
);
const FAQ = dynamic(() => import("@/components/sections/faq").then((m) => m.FAQ), {
  ssr: true,
});
const CTA = dynamic(() => import("@/components/sections/cta").then((m) => m.CTA), {
  ssr: true,
});
const Footer = dynamic(
  () => import("@/components/sections/footer").then((m) => m.Footer),
  { ssr: true }
);

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

