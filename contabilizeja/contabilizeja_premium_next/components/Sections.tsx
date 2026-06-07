import { BarChart3, Landmark, LockKeyhole, ReceiptText, Rocket, Users } from "lucide-react";
import { LeadCapture } from "@/components/LeadCapture";

const features = [
  { title: "Abertura de empresa", desc: "CNPJ, contrato, inscrições e regime tributário.", Icon: Rocket },
  { title: "Contabilidade mensal", desc: "Impostos, guias, obrigações e demonstrativos.", Icon: ReceiptText },
  { title: "Consultoria tributária", desc: "Planejamento para pagar o imposto correto.", Icon: Landmark },
  { title: "Área do cliente", desc: "Documentos, guias, status fiscal e chamados.", Icon: LockKeyhole },
  { title: "Folha e pró-labore", desc: "Processos trabalhistas e remuneração de sócios.", Icon: Users },
  { title: "Relatórios executivos", desc: "Visão gerencial para tomada de decisão.", Icon: BarChart3 },
];

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-3xl">
        <p className="font-black uppercase tracking-[.2em] text-mint">Suite ContabilizeJá</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-.05em] md:text-6xl">Uma operação contábil completa, digital e humana.</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {features.map(({ title, desc, Icon }) => (
          <div key={title} className="glass rounded-[2rem] p-6 transition hover:-translate-y-2">
            <Icon className="text-mint" size={30} />
            <h3 className="mt-5 text-xl font-black">{title}</h3>
            <p className="mt-3 text-white/60">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ClientAreaPreview() {
  return null;
}

export function Plans() {
  return null;
}

export function FinalCTA({ source = "Home" }: { source?: string }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:grid-cols-[1fr_.9fr]">
      <div>
        <p className="font-black uppercase tracking-[.2em] text-mint">Diagnóstico gratuito</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-.05em] md:text-6xl">Transforme sua contabilidade em vantagem competitiva.</h2>
        <p className="mt-5 text-lg text-white/65">Capture leads, envie para WhatsApp e conecte a qualquer CRM.</p>
      </div>
      <LeadCapture source={source} />
    </section>
  );
}
