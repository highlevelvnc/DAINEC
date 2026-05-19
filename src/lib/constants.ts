export const WHATSAPP_NUMBER = "351925579499";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá DAINEC, gostaria de pedir um orçamento."
)}`;

export const PHONE_DISPLAY = "925 579 499";
export const PHONE_TEL = "+351925579499";

export const COMPANY = {
  name: "DAINEC",
  tagline: "Eletricidade e Construção",
  fullName:
    "Escritório Dainec — Douglas Alves Instalações Elétricas e Construção Unipessoal LDA",
  region: "Portugal",
  instagram: "https://www.instagram.com/dainec.lda/",
  facebook: "https://www.facebook.com/Dainec.lda/",
  maps: "https://share.google/F9tCEZ08aWVdj9xW7",
} as const;

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
] as const;
