import { Loader } from "@/components/Loader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { RevealInit } from "@/components/RevealInit";
import { CardSpotInit } from "@/components/CardSpotInit";
import { Tracking } from "@/components/Tracking";
import { COMPANY, PHONE_TEL } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dainec.pt/#business",
  name: COMPANY.name,
  legalName: COMPANY.fullName,
  description:
    "Serviços de eletricidade, instalações elétricas, reparações, remodelações e construção em Portugal.",
  telephone: PHONE_TEL,
  url: "https://dainec.pt",
  areaServed: { "@type": "Country", name: "Portugal" },
  sameAs: [COMPANY.instagram, COMPANY.facebook],
  priceRange: "€€",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Loader />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <RevealInit />
      <CardSpotInit />
      <Tracking />
    </>
  );
}
