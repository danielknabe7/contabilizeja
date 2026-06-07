import { Header } from "@/components/Header";
import { FinalCTA, FeatureGrid, Plans } from "@/components/Sections";
import { OpeningSimulator } from "@/components/OpeningSimulator";
import { TaxCalculator } from "@/components/TaxCalculator";

export const metadata = {
  title: "Área do cliente",
  description: "Portal do cliente ContabilizeJá.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="noise px-5 py-24 text-center">
          <p className="font-black uppercase tracking-[.2em] text-mint">Portal premium</p>
          <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-black tracking-[-.07em] md:text-7xl">Área do cliente para visualizar guias, documentos e tarefas fiscais.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/65">Protótipo de dashboard para sua operação contábil, pronto para evoluir com login, banco de dados e CRM.</p>
        </section>
        <FeatureGrid />
        <FinalCTA source="Área do cliente" />
      </main>
    </>
  );
}
