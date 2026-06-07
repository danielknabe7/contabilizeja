import { BarChart3, FileText, Landmark, LockKeyhole, MessageCircle, ReceiptText, Rocket, Users } from "lucide-react";
import { LeadCapture } from "@/components/LeadCapture";

const features = [
  ["Abertura de empresa", "CNPJ, contrato, inscrições e regime tributário.", Rocket],
  ["Contabilidade mensal", "Impostos, guias, obrigações e demonstrativos.", ReceiptText],
  ["Consultoria tributária", "Planejamento para pagar o imposto correto.", Landmark],
  ["Área do cliente", "Documentos, guias, status fiscal e chamados.", LockKeyhole],
  ["Folha e pró-labore", "Processos trabalhistas e remuneração de sócios.", Users],
  ["Relatórios executivos", "Visão gerencial para tomada de decisão.", BarChart3],
];

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-3xl">
        <p className="font-black uppercase tracking-[.2em] text-mint">Suite ContabilizeJá</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-.05em] md:text-6xl">Uma operação contábil completa, digital e humana.</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {features.map(([title, desc, Icon]) => (
          <div key={title as string} className="glass rounded-[2rem] p-6 transition hover:-translate-y-2">
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
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-8 md:grid-cols-[.95fr_1.05fr]">
        <div>
          <p className="font-black uppercase tracking-[.2em] text-mint">Área do cliente</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.05em] md:text-6xl">Seu escritório contábil dentro de um dashboard premium.</h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            Simulação visual de portal para acompanhar documentos, tarefas fiscais, guias, chamados e relatórios.
          </p>
        </div>
        <div className="glass rounded-[2.5rem] p-5">
          <div className="rounded-[2rem] bg-white p-5 text-ink">
            <div className="flex items-center justify-between">
              <b>Portal ContabilizeJá</b><span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">Regular</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Guias pagas", "Notas emitidas", "Chamados", "Documentos"].map((item, i) => (
                <div className="rounded-2xl bg-slate-50 p-4" key={item}>
                  <p className="text-sm text-slate-500">{item}</p>
                  <b className="text-3xl">{[12, 48, 2, 31][i]}</b>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-slate-100 p-4">
              <p className="font-black">Checklist mensal</p>
              {["Enviar extrato", "Conferir notas", "Pagar DAS"].map((item) => (
                <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3" key={item}>
                  <span>{item}</span><span className="text-emerald-600">ok</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Plans() {
  const plans = [
    ["Start", "R$ 149", "Para MEI e pequenos prestadores.", ["Contabilidade essencial", "Guias mensais", "Suporte digital"]],
    ["Scale", "R$ 249", "Para empresas em crescimento.", ["Pró-labore", "Consultoria tributária", "Atendimento prioritário"]],
    ["Prime", "R$ 499", "Para operação com folha e gestão.", ["Folha de pagamento", "Relatórios gerenciais", "Reunião consultiva"]],
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="text-center">
        <p className="font-black uppercase tracking-[.2em] text-mint">Planos</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-.05em] md:text-6xl">Preço claro, operação premium.</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {plans.map((plan, i) => (
          <div key={plan[0] as string} className={`rounded-[2rem] p-6 ${i === 1 ? "bg-mint text-ink shadow-glow" : "glass"}`}>
            {i === 1 && <span className="rounded-full bg-ink px-3 py-1 text-xs font-black text-white">Mais escolhido</span>}
            <h3 className="mt-5 text-2xl font-black">{plan[0]}</h3>
            <p className={i === 1 ? "mt-2 text-ink/70" : "mt-2 text-white/60"}>{plan[2]}</p>
            <b className="mt-6 block text-5xl tracking-[-.05em]">{plan[1]}<span className="text-base">/mês</span></b>
            <ul className="mt-6 space-y-3">
              {(plan[3] as string[]).map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
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
