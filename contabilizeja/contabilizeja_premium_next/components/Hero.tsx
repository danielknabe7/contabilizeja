import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="noise relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-hero-grid bg-[length:46px_46px] opacity-70" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-2 text-sm font-bold text-mint">
            <Sparkles size={16} /> Contabilidade online com experiência de fintech
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[.95] tracking-[-.07em] md:text-7xl">
            A contabilidade premium para abrir, proteger e escalar sua empresa.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Plataforma digital, atendimento humano, automações fiscais, área do cliente,
            cálculo inteligente de impostos e especialistas cuidando da burocracia.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a className="inline-flex items-center gap-2 rounded-full bg-mint px-7 py-4 font-black text-ink shadow-glow transition hover:-translate-y-1" href="#simulador">
              Simular abertura <ArrowRight size={18} />
            </a>
            <a className="rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white/10" href={whatsappLink("Olá! Quero falar com um contador da ContabilizeJá.")} target="_blank">
              Falar com contador
            </a>
          </div>
          <div className="mt-9 grid max-w-2xl gap-4 text-sm text-white/75 sm:grid-cols-3">
            <span className="flex gap-2"><ShieldCheck className="text-mint" size={20}/> Segurança fiscal</span>
            <span className="flex gap-2"><TrendingUp className="text-mint" size={20}/> Menos burocracia</span>
            <span className="flex gap-2"><Sparkles className="text-mint" size={20}/> Operação digital</span>
          </div>
        </div>

        <div className="glass relative rounded-[2.5rem] p-5 animate-float">
          <div className="rounded-[2rem] bg-white p-5 text-ink">
            <div className="rounded-3xl bg-ink p-5 text-white">
              <p className="text-sm text-white/60">Dashboard fiscal</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-white/60">Impostos do mês</p>
                  <b className="mt-2 block text-2xl text-mint">R$ 842</b>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-white/60">Economia estimada</p>
                  <b className="mt-2 block text-2xl text-mint">32%</b>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-gradient-to-r from-mint/25 to-sky-400/20 p-4">
                <p className="text-sm text-white/70">Próximas obrigações</p>
                <div className="mt-3 space-y-3">
                  {["DAS Simples Nacional", "Pró-labore", "Declaração mensal"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                      <span>{item}</span><span className="text-mint">em dia</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-cloud p-4"><b>5 dias</b><p className="text-xs text-slate-500">abertura</p></div>
              <div className="rounded-2xl bg-cloud p-4"><b>24/7</b><p className="text-xs text-slate-500">portal</p></div>
              <div className="rounded-2xl bg-cloud p-4"><b>+60%</b><p className="text-xs text-slate-500">agilidade</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
