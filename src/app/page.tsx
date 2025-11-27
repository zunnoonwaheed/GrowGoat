import {
  Header,
  Hero,
  Stats,
  Services,
  Portfolio,
  Team,
  Testimonials,
  Pricing,
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
        <Pricing />
        <FAQ />
        <Accolades />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
