import {
  Header,
  Hero,
  Stats,
  Services,
  Portfolio,
  Team,
  Testimonials,
  Pricing,
  RevenueCalculator,
  FAQ,
  Accolades,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <RevenueCalculator />
        <Pricing />
        <FAQ />
        <Accolades />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
