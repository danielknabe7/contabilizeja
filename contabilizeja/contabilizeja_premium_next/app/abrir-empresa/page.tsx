import { Header } from "@/components/Header";
import { FinalCTA, FeatureGrid, Plans } from "@/components/Sections";
import { OpeningSimulator } from "@/components/OpeningSimulator";
import { TaxCalculator } from "@/components/TaxCalculator";

export const metadata = {
  title: "Abrir empresa online",
  description: "Abra sua empresa online com suporte especializado.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="noise px-5 py-24 text-center">
          <p className="font-black uppercase tracking-[.2em] text-mint">Abertura de empresa</p>
          <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-black tracking-[-.07em] md:text-7xl">Abra sua empresa com velocidade, segurança e zero burocracia.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/65">Cuidamos de CNPJ, contrato social, regime tributário, inscrições e próximos passos para você começar certo.</p>
        </section>
        <OpeningSimulator /><FeatureGrid /><Plans />
        <FinalCTA source="Abertura de empresa" />
      </main>
    </>
  );
}
