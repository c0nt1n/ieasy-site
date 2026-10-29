// Depoimentos reais copiados do Google (com autorização). Deixe vazio enquanto não houver.
// Exemplo: { name: 'Nome do cliente', text: 'Texto da avaliação', rating: 5 }

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [];
