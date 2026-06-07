import { Header } from "@/components/Header";
import { FinalCTA, FeatureGrid, Plans } from "@/components/Sections";
import { OpeningSimulator } from "@/components/OpeningSimulator";
import { TaxCalculator } from "@/components/TaxCalculator";

export const metadata = {
  title: "Contabilidade online premium",
  description: "Contabilidade digital para empresas modernas.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="noise px-5 py-24 text-center">
          <p className="font-black uppercase tracking-[.2em] text-mint">Contabilidade online</p>
          <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-black tracking-[-.07em] md:text-7xl">Contabilidade digital com atendimento humano e inteligência fiscal.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/65">Organize impostos, guias, folha, pró-labore, documentos e obrigações em uma operação moderna.</p>
        </section>
        <TaxCalculator /><FeatureGrid /><Plans />
        <FinalCTA source="Contabilidade online" />
      </main>
    </>
  );
}
