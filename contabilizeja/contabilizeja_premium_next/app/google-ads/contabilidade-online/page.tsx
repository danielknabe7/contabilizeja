import { Header } from "@/components/Header";
import { FinalCTA, FeatureGrid, Plans } from "@/components/Sections";
import { OpeningSimulator } from "@/components/OpeningSimulator";
import { TaxCalculator } from "@/components/TaxCalculator";

export const metadata = {
  title: "Trocar de contador",
  description: "Landing page para campanha de contabilidade online.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="noise px-5 py-24 text-center">
          <p className="font-black uppercase tracking-[.2em] text-mint">Google Ads</p>
          <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-black tracking-[-.07em] md:text-7xl">Troque de contador e organize sua empresa ainda este mês.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/65">Página otimizada para tráfego pago, com prova de valor, planos e chamada direta para diagnóstico.</p>
        </section>
        <TaxCalculator /><Plans />
        <FinalCTA source="Google Ads contabilidade" />
      </main>
    </>
  );
}
