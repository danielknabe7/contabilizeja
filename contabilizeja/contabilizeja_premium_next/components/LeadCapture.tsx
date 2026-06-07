"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";

export function LeadCapture({ source = "Site" }: { source?: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-3 rounded-[2rem] bg-white p-5 text-ink shadow-premium"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input className="rounded-2xl border-slate-200" placeholder="Nome" required />
      <input className="rounded-2xl border-slate-200" placeholder="E-mail" type="email" required />
      <input className="rounded-2xl border-slate-200" placeholder="WhatsApp" required />
      <select className="rounded-2xl border-slate-200" required>
        <option value="">O que você precisa?</option>
        <option>Abrir empresa</option>
        <option>Trocar de contador</option>
        <option>Regularizar CNPJ</option>
        <option>Área do cliente</option>
      </select>
      <button className="rounded-full bg-mint px-6 py-4 font-black text-ink" type="submit">
        Receber diagnóstico gratuito
      </button>
      <a className="text-center text-sm font-bold text-ocean" href={whatsappLink(`Olá! Vim da campanha ${source} e quero atendimento.`)} target="_blank">
        Preferir atendimento pelo WhatsApp
      </a>
      {sent && <p className="rounded-2xl bg-emerald-50 p-3 text-sm font-bold text-emerald-700">Lead capturado! Conecte este formulário ao seu CRM, RD Station, HubSpot ou endpoint.</p>}
    </form>
  );
}
