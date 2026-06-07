export const site = {
  name: "ContabilizeJá",
  domain: "https://www.contabilizeja.com.br",
  whatsapp: "5511999999999",
  email: "contato@contabilizeja.com.br",
  phone: "(11) 99999-9999",
  description:
    "Contabilidade online premium para abertura de empresas, gestão fiscal, folha, emissão de guias e consultoria tributária.",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
