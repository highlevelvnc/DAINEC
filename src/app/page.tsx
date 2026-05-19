import { Loader } from "@/components/Loader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { FAQ_ITEMS } from "@/lib/faq";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: COMPANY.name,
      legalName: COMPANY.fullName,
      url: SITE,
      logo: `${SITE}/logo.png`,
      sameAs: [COMPANY.instagram, COMPANY.facebook],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE_TEL,
          contactType: "customer service",
          areaServed: "PT",
          availableLanguage: "pt-PT",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: COMPANY.name,
      legalName: COMPANY.fullName,
      description:
        "Serviços de eletricidade, instalações elétricas, reparações, remodelações e construção em Portugal.",
      image: `${SITE}/og-image.png`,
      telephone: PHONE_TEL,
      url: SITE,
      areaServed: { "@type": "Country", name: "Portugal" },
      sameAs: [COMPANY.instagram, COMPANY.facebook],
      priceRange: "€€",
      makesOffer: [
        "Instalações Elétricas",
        "Reparações Elétricas",
        "Quadros Elétricos",
        "Iluminação Interior e Exterior",
        "Remodelações",
        "Construção e Acabamentos",
        "Manutenção Técnica",
        "Apoio a Obras e Projetos",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "DAINEC",
      inLanguage: "pt-PT",
      publisher: { "@id": `${SITE}/#org` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: FAQ_ITEMS.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
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
        <Marquee />
        <Services />
        <Process />
        <WhyUs />
        <About />
        <Portfolio />
        <CTA />
        <FAQ />
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
