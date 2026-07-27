import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { LogoGrid } from "@/components/sections/logo-grid";
import { DotMatrixBand } from "@/components/sections/dot-matrix-band";
import { ProductOverview } from "@/components/sections/product-overview";
import { InterviewTerminal } from "@/components/sections/interview-terminal";
import { Features } from "@/components/sections/features";
import { WhyCodeHurdle } from "@/components/sections/why-codehurdle";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Ticker />
      <LogoGrid />
      <DotMatrixBand />
      <ProductOverview />
      <InterviewTerminal />
      <Features />
      <WhyCodeHurdle />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
