import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dainec.pt"),
  title: "DAINEC | Eletricidade e Construção",
  description:
    "Serviços de eletricidade, instalações elétricas, reparações, remodelações e construção com segurança, qualidade e profissionalismo. Peça orçamento à DAINEC.",
  applicationName: "DAINEC",
  keywords: [
    "eletricista Portugal",
    "instalações elétricas",
    "quadros elétricos",
    "remodelações",
    "construção",
    "DAINEC",
  ],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "DAINEC",
    title: "DAINEC | Eletricidade e Construção",
    description:
      "Instalações elétricas, reparações, remodelações e construção em Portugal. Orçamentos rápidos via WhatsApp.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAINEC | Eletricidade e Construção",
    description:
      "Instalações elétricas, reparações, remodelações e construção em Portugal.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${sora.variable} ${inter.variable}`}>
      {/*
        Tracking placeholders — substituir IDs e descomentar quando o cliente fornecer:

        Google Tag Manager (<head>):
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}</Script>

        Meta Pixel:
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){...}; fbq('init','PIXEL_ID'); fbq('track','PageView');
        `}</Script>

        Google Analytics 4:
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date()); gtag('config','G-XXXXXXX');
        `}</Script>
      */}
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
