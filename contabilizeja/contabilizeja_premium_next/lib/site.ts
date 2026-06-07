export const site = {
  name: "ContabilizeJá",
  domain: "https://www.contabilizeja.com.br",
  whatsapp: "5535999524918",
  email: "danielknabe7@gmail.com",
  phone: "(35) 99952-4918",
  description:
    "Contabilidade online premium para abertura de empresas, gestão fiscal, folha, emissão de guias e consultoria tributária.",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
