import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3 font-black tracking-tight">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-ink shadow-glow">CJ</span>
          <span className="text-xl">ContabilizeJá</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/75 md:flex">
          <Link href="/abrir-empresa">Abrir empresa</Link>
          <Link href="/contabilidade-online">Contabilidade</Link>
          <Link href="/area-cliente">Área do cliente</Link>
          <a href="#calculadora">Calculadora</a>
          <a
            className="rounded-full bg-white px-5 py-3 text-ink transition hover:bg-mint"
            href={whatsappLink("Olá! Quero uma proposta da ContabilizeJá.")}
            target="_blank"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
