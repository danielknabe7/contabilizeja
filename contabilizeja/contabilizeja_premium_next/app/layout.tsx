import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.contabilizeja.com.br"),
  title: {
    default: "ContabilizeJá | Contabilidade online premium",
    template: "%s | ContabilizeJá",
  },
  description:
    "Contabilidade online premium para abrir, regularizar e gerenciar empresas com atendimento humano e tecnologia.",
  keywords: [
    "contabilidade online",
    "abrir empresa",
    "contador online",
    "Simples Nacional",
    "MEI",
    "contabilidade para PJ",
  ],
  openGraph: {
    title: "ContabilizeJá",
    description: "Sua contabilidade digital com experiência de fintech.",
    url: "https://www.contabilizeja.com.br",
    siteName: "ContabilizeJá",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
