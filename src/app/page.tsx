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
import { InteractionsInit } from "@/components/InteractionsInit";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Tracking } from "@/components/Tracking";
import { COMPANY, PHONE_TEL } from "@/lib/constants";

const SITE = "https://dainec.pt";
const SERVICES = [
  "Instalações elétricas",
  "Reparações elétricas",
  "Quadros elétricos",
  "Iluminação interior e exterior",
  "Remodelações",
  "Construção e acabamentos",
  "Manutenção técnica",
  "Apoio a obras e projetos",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: COMPANY.name,
      inLanguage: "pt-PT",
      publisher: { "@id": `${SITE}/#business` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: SITE,
      name: "DAINEC | Eletricidade e Construção em Portugal",
      inLanguage: "pt-PT",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#business` },
      primaryImageOfPage: `${SITE}/og-image.png`,
    },
    {
      "@type": ["LocalBusiness", "Electrician", "GeneralContractor"],
      "@id": `${SITE}/#business`,
      name: COMPANY.name,
      legalName: COMPANY.fullName,
      description:
        "Serviços de eletricidade, instalações elétricas, reparações, remodelações e construção em Portugal.",
      url: SITE,
      logo: `${SITE}/logo.png`,
      image: `${SITE}/og-image.png`,
      telephone: PHONE_TEL,
      priceRange: "€€",
      areaServed: { "@type": "Country", name: "Portugal" },
      address: { "@type": "PostalAddress", addressCountry: "PT" },
      sameAs: [COMPANY.instagram, COMPANY.facebook],
      makesOffer: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_TEL,
        contactType: "customer service",
        availableLanguage: ["Portuguese"],
        areaServed: "PT",
      },
    },
    {
      "@type": "Service",
      name: "Eletricidade e Construção",
      provider: { "@id": `${SITE}/#business` },
      areaServed: { "@type": "Country", name: "Portugal" },
      serviceType: SERVICES,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Loader />
      <ScrollProgress />
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
      <InteractionsInit />
      <Tracking />
    </>
  );
}
