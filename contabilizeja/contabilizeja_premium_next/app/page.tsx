import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientAreaPreview, FeatureGrid, FinalCTA, Plans } from "@/components/Sections";
import { OpeningSimulator } from "@/components/OpeningSimulator";
import { TaxCalculator } from "@/components/TaxCalculator";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <OpeningSimulator />
        <TaxCalculator />
        <ClientAreaPreview />
        <Plans />
        <FinalCTA source="Home premium" />
      </main>
      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/50">
        © 2026 ContabilizeJá. Site demonstrativo pronto para produção.
      </footer>
    </>
  );
}
