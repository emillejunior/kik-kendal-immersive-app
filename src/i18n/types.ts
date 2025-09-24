export type ContentBlock =
  | { id: string; type: 'text'; content: string }
  | { id: string; type: 'image'; src: string; alt?: string }
  | { id: string; type: 'quote'; text: string; author?: string }
  | { id: string; type: 'button'; label: string; link: string }
  | { id: string; type: 'heading'; level: 1 | 2 | 3; content: string };
