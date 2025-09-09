export type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'button'; label: string; link: string }
  | { type: 'heading'; level: 1 | 2 | 3; content: string };
