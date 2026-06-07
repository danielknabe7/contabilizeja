"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

const rates = {
  servicos: 0.06,
  comercio: 0.04,
  tecnologia: 0.06,
  saude: 0.06,
};

export function TaxCalculator() {
  const [revenue, setRevenue] = useState(12000);
  const [activity, setActivity] = useState<keyof typeof rates>("servicos");

  const result = useMemo(() => {
    const tax = revenue * rates[activity];
    const traditional = 650;
    const premium = activity === "comercio" ? 249 : 229;
    return {
      tax,
      premium,
      total: tax + premium,
      saving: Math.max(0, traditional - premium),
    };
  }, [revenue, activity]);

  return (
    <section id="calculadora" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/[.06] p-6 shadow-premium md:grid-cols-[.9fr_1.1fr] md:p-10">
        <div>
          <div className="mb-4 inline-flex rounded-2xl bg-mint/10 p-3 text-mint"><Calculator /></div>
          <p className="font-black uppercase tracking-[.2em] text-mint">Calculadora de impostos</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.05em] md:text-5xl">Simule seu custo mensal em segundos.</h2>
          <p className="mt-5 text-white/65">
            Estimativa comercial baseada em alíquotas iniciais simplificadas. A apuração real depende de CNAE, regime, folha e município.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-6 text-ink">
          <label className="text-sm font-black">Faturamento mensal</label>
          <input
            className="mt-3 w-full accent-teal-500"
            type="range"
            min="1000"
            max="80000"
            step="500"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
          />
          <div className="mt-2 text-3xl font-black">R$ {revenue.toLocaleString("pt-BR")}</div>

          <label className="mt-6 block text-sm font-black">Atividade</label>
          <select className="mt-2 w-full rounded-2xl border-slate-200" value={activity} onChange={(e) => setActivity(e.target.value as keyof typeof rates)}>
            <option value="servicos">Serviços</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="comercio">Comércio</option>
            <option value="saude">Saúde</option>
          </select>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Imposto estimado</p>
              <b className="text-xl">R$ {result.tax.toFixed(2).replace(".", ",")}</b>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Plano sugerido</p>
              <b className="text-xl">R$ {result.premium}</b>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-xs text-emerald-700">Economia contábil</p>
              <b className="text-xl text-emerald-700">R$ {result.saving}</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
