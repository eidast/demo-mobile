export type Quote = {
  id: string;
  text: string;
  author?: string;
};

export const QUOTES: Quote[] = [
  { id: 'q1', text: 'Disciplina > motivación.', author: 'Anónimo' },
  { id: 'q2', text: 'Lo que no se mide, no se mejora.', author: 'Peter Drucker (atr.)' },
  { id: 'q3', text: 'Hazlo simple, luego hazlo mejor.', author: 'Anónimo' },
  { id: 'q4', text: 'La consistencia vence a la intensidad.', author: 'Anónimo' },
  { id: 'q5', text: 'La claridad es poder.', author: 'Anónimo' },
];
