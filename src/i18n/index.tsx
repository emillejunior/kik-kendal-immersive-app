import React from 'react';
import type { ContentBlock } from './types';

export type Lang = 'en' | 'ko';

// Static, locale-independent labels for the header
export const LANG_META: Record<Lang, { label: string; flag: string; code: string }> = {
  en: { label: 'English', flag: '🇺🇸', code: 'EN' },
  ko: { label: '한국어', flag: '🇰🇷', code: 'KO' },
};

const TRANSLATIONS = {
  en: {
    siteTitle: 'Kendal Industrial Park',
    nav: {
      home: 'Home',
      explore: 'Explore',
      about: 'About',
      phase1: 'Phase 1',
      phase2: 'Phase 2',
    },
    pages: {
      index: {
        title: 'Welcome',
        blocks: [
          {
            type: 'heading',
            level: 2,
            content: 'Our Mission',
          },
          {
            type: 'text',
            content: 'We aim to support sustainable industrial growth in Kendal.',
          },
          {
            type: 'image',
            src: '/images/factory.jpg',
            alt: 'Factory overview',
          },
        ] as ContentBlock[],
      },
      explore: {
        title: 'Explore KIK',
        blocks: [{ type: 'text', content: 'Pick a phase to explore.' }] as ContentBlock[],
      },
      phase1: {
        title: 'Phase 1',
        blocks: [{ type: 'text', content: 'Details for Phase 1.' }] as ContentBlock[],
      },
      phase2: {
        title: 'Phase 2',
        blocks: [{ type: 'text', content: 'Details for Phase 2.' }] as ContentBlock[],
      },
      about: {
        title: 'About',
        blocks: [{ type: 'text', content: 'This site is built by Digipro PRS' }] as ContentBlock[],
      },
      lang: { en: 'English', ko: 'Korean' },
    },
  },
  ko: {
    siteTitle: 'Kendal Industrial Park',
    nav: {
      home: '홈',
      explore: '탐색',
      about: '소개',
      phase1: '1단계',
      phase2: '2단계',
    },
    pages: {
      index: {
        title: '환영합니다',
        blocks: [
          {
            type: 'heading',
            level: 2,
            content: '우리의 사명',
          },
          {
            type: 'text',
            content: '우리는 켄달의 지속 가능한 산업 성장을 지원하는 것을 목표로 합니다.',
          },
          {
            type: 'image',
            src: '/images/factory.jpg',
            alt: '공장 전경',
          },
        ] as ContentBlock[],
      },
      explore: { title: '탐색', blocks: [{ type: 'text', content: '단계를 선택하세요.' }] },
      phase1: { title: '1단계', blocks: [{ type: 'text', content: '1단계 상세.' }] },
      phase2: { title: '2단계', blocks: [{ type: 'text', content: '2단계 상세.' }] },
      about: {
        title: '소개',
        blocks: [{ type: 'text', content: '이 사이트는 "Digipro PRS"에 의해 구축되었습니다.' }],
      },
      lang: { en: '영어', ko: '한국어' },
    },
  },
} as const;

type Dict = typeof TRANSLATIONS;
type Copy = Dict[Lang];

const LanguageContext = React.createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  copy: Copy;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Lang>(() => {
    const saved = localStorage.getItem('lang');
    return (saved as Lang) || 'en';
  });
  React.useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const value = React.useMemo(() => ({ lang, setLang, copy: TRANSLATIONS[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}
