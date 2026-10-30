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

  // Dados da empresa (opcionais: só aparecem no rodapé se preenchidos)
  legalName: '', // razão social
  cnpj: '',
  instagram: 'https://www.instagram.com/ieasy.oficial/',
  instagramHandle: '@ieasy.oficial',
  hoursText: 'Todos os dias, das 8h30 às 22h30',
  // Formato schema.org (usado pelo Google)
  openingHours: ['Mo-Su 08:30-22:30'],
  warranty: 'Todos os aparelhos lacrados têm garantia de 1 ano da própria Apple.',

  // Sócios (seção Quem somos). `short` é como o nome aparece no texto da seção.
  founders: [
    { name: 'Luigi Contin', short: 'Luigi' },
    { name: 'João Pedro Lorentziadis', short: 'João Pedro' },
  ],
  // Foto dos dois juntos: arquivo em src/assets/equipe/, ex.: 'socios.jpg'. Sem foto, aparecem as iniciais.
  foundersPhoto: '',

  // [PREENCHER] Avaliações no Google
  googleReviewsUrl: 'https://share.google/bHMFhUgTL2cvFjG26',
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

/** Endereço do WhatsApp sem a mensagem (a página do produto monta a mensagem conforme a escolha). */
export const waBase = base;

/** Mensagem para um produto. `detail` vai entre parênteses, ex.: "Lavanda, 256 GB". */
export function waProductMessage(productName: string, detail = '') {
  return `Oi! Vim pelo site e tenho interesse no ${productName}${detail ? ` (${detail})` : ''}`;
}

/** Link do WhatsApp para um produto específico. */
export function waProduct(productName: string, detail = '') {
  return base + encodeURIComponent(waProductMessage(productName, detail));
}

/** Link para avaliação do iPhone usado. */
export function waTradeIn() {
  return base + encodeURIComponent('Oi! Vim pelo site e quero saber quanto vale meu iPhone usado. Modelo e capacidade: ');
}
