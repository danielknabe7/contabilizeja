"use client";

import { useMemo, useState } from "react";
import { Building2, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function OpeningSimulator() {
  const [city, setCity] = useState("São Paulo");
  const [partners, setPartners] = useState("1 sócio");
  const [activity, setActivity] = useState("Serviços profissionais");

  const score = useMemo(() => {
    let days = city.toLowerCase().includes("são") ? 5 : 7;
    if (partners !== "1 sócio") days += 2;
    if (activity.includes("Saúde")) days += 3;
    return days;
  }, [city, partners, activity]);

  return (
    <section id="simulador" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-8 rounded-[2.5rem] bg-gradient-to-br from-mint to-sky-300 p-6 text-ink md:grid-cols-2 md:p-10">
        <div>
          <Building2 size={42} />
          <h2 className="mt-5 text-4xl font-black tracking-[-.05em] md:text-5xl">Simulador de abertura de empresa</h2>
          <p className="mt-5 max-w-xl text-ink/70">
            Descubra o prazo estimado, documentos e próximos passos para começar com CNPJ regularizado.
          </p>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-premium">
          <div className="grid gap-4">
            <input className="rounded-2xl border-slate-200" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Cidade" />
            <select className="rounded-2xl border-slate-200" value={partners} onChange={(e) => setPartners(e.target.value)}>
              <option>1 sócio</option>
              <option>2 ou mais sócios</option>
            </select>
            <select className="rounded-2xl border-slate-200" value={activity} onChange={(e) => setActivity(e.target.value)}>
              <option>Serviços profissionais</option>
              <option>Tecnologia</option>
              <option>Comércio</option>
              <option>Saúde e bem-estar</option>
            </select>
          </div>
          <div className="mt-6 rounded-3xl bg-ink p-5 text-white">
            <p className="text-white/60">Prazo estimado</p>
            <b className="mt-1 block text-4xl text-mint">{score} dias úteis</b>
            <div className="mt-5 space-y-2 text-sm text-white/75">
              <p className="flex gap-2"><CheckCircle2 className="text-mint" size={18}/> Contrato social ou requerimento</p>
              <p className="flex gap-2"><CheckCircle2 className="text-mint" size={18}/> Enquadramento tributário</p>
              <p className="flex gap-2"><CheckCircle2 className="text-mint" size={18}/> Inscrições e alvarás aplicáveis</p>
            </div>
          </div>
          <a className="mt-5 flex justify-center rounded-full bg-ink px-6 py-4 font-black text-white hover:bg-slate-800" href={whatsappLink(`Quero abrir empresa em ${city}. Atividade: ${activity}. Sócios: ${partners}.`)} target="_blank">
            Enviar simulação no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
