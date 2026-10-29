// Dados gerais da loja. Campos vazios ('') aparecem no site como [PREENCHER].

export const site = {
  name: 'iEasy',
  // O domínio do site fica em astro.config.mjs (SITE_URL).
  title: 'iEasy | iPhone e produtos Apple originais com entrega em Alphaville',
  description:
    'Produtos Apple originais e lacrados com entrega em Alphaville, Tamboré, Barueri, Santana de Parnaíba, Aldeia da Serra, Osasco e São Paulo. Pix ou até 10x sem juros e seu iPhone usado na troca. Atendimento todos os dias pelo WhatsApp.',

  whatsapp: {
    number: '5555991388746',
    display: '(55) 99138-8746',
  },

  // [PREENCHER] Dados da empresa
  legalName: '', // razão social
  cnpj: '',
  instagram: 'https://www.instagram.com/ieasy.oficial/',
  instagramHandle: '@ieasy.oficial',
  hoursText: 'Todos os dias, das 8h30 às 22h30',
  // Formato schema.org (usado pelo Google)
  openingHours: ['Mo-Su 08:30-22:30'],
  warranty: '', // ex.: '90 dias de garantia da loja, além da garantia do fabricante quando aplicável'

  // [PREENCHER] Quem atende
  attendantName: '',
  attendantRole: '', // ex.: 'Fundador e consultor'
  attendantPhoto: '', // nome do arquivo em src/assets/equipe/, ex.: 'foto.jpg'

  // [PREENCHER] Avaliações no Google
  googleReviewsUrl: '',
  googleRating: '', // ex.: '4,9'
  googleReviewsCount: '', // ex.: '120'

  areas: [
    'Alphaville (Barueri)',
    'Alphaville (Santana de Parnaíba)',
    'Tamboré',
    'Barueri',
    'Santana de Parnaíba',
    'Aldeia da Serra',
    'Osasco',
    'São Paulo (capital)',
  ],
};

/** Horário em minúsculas, para usar no meio de frases: "todos os dias, das 8h30 às 22h30". */
export const hoursInline = site.hoursText.charAt(0).toLowerCase() + site.hoursText.slice(1);

/** Lista das áreas em texto corrido: "A, B e C". */
export const areasText = site.areas.slice(0, -1).join(', ') + ' e ' + site.areas[site.areas.length - 1];

const base = `https://wa.me/${site.whatsapp.number}?text=`;

/** Link geral do WhatsApp. `extra` é anexado depois de "tenho interesse em: ". */
export function waGeneral(extra = '') {
  return base + encodeURIComponent(`Oi! Vim pelo site e tenho interesse em: ${extra}`);
}

/** Link do WhatsApp para um produto específico. */
export function waProduct(productName: string) {
  return base + encodeURIComponent(`Oi! Vim pelo site e tenho interesse no ${productName}`);
}

/** Link para avaliação do iPhone usado. */
export function waTradeIn() {
  return base + encodeURIComponent('Oi! Vim pelo site e quero saber quanto vale meu iPhone usado. Modelo e capacidade: ');
}
