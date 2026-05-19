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

const SITE_URL = "https://dainec.pt";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DAINEC | Eletricidade e Construção em Portugal",
    template: "%s · DAINEC",
  },
  description:
    "Serviços de eletricidade, instalações elétricas, reparações, quadros elétricos, iluminação, remodelações e construção. Atendimento a particulares e empresas em Portugal. Orçamentos rápidos via WhatsApp.",
  applicationName: "DAINEC",
  authors: [{ name: "DAINEC" }],
  creator: "DAINEC",
  publisher: "DAINEC",
  keywords: [
    "eletricista Portugal",
    "instalações elétricas",
    "reparações elétricas",
    "quadros elétricos",
    "iluminação LED",
    "remodelações",
    "construção civil",
    "manutenção técnica",
    "obras Portugal",
    "DAINEC",
    "Dainec.lda",
  ],
  category: "Construction & Electrical Services",
  alternates: {
    canonical: "/",
    languages: { "pt-PT": "/" },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "DAINEC",
    title: "DAINEC | Eletricidade e Construção em Portugal",
    description:
      "Instalações elétricas, reparações, remodelações e construção em Portugal. Orçamentos rápidos via WhatsApp.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DAINEC — Eletricidade e Construção",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAINEC | Eletricidade e Construção em Portugal",
    description:
      "Instalações elétricas, reparações, remodelações e construção em Portugal.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: true, email: true, address: false },
  other: {
    "format-detection": "telephone=yes",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
