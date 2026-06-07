import { Header } from "@/components/Header";
import { FinalCTA, FeatureGrid, Plans } from "@/components/Sections";
import { OpeningSimulator } from "@/components/OpeningSimulator";
import { TaxCalculator } from "@/components/TaxCalculator";

export const metadata = {
  title: "Abrir CNPJ rápido",
  description: "Landing page para campanha de abertura de empresa.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="noise px-5 py-24 text-center">
          <p className="font-black uppercase tracking-[.2em] text-mint">Google Ads</p>
          <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-black tracking-[-.07em] md:text-7xl">Abra seu CNPJ com contador especialista e atendimento pelo WhatsApp.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/65">Página otimizada para conversão, captura de leads e campanhas pagas de abertura de empresa.</p>
        </section>
        <OpeningSimulator /><Plans />
        <FinalCTA source="Google Ads abertura" />
      </main>
    </>
  );
}
