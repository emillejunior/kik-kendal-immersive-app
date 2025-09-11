import React from 'react';
import type { ContentBlock } from './types';

export type Lang = 'en' | 'ko' | 'zh';

// Static, locale-independent labels for the header
export const LANG_META: Record<Lang, { label: string; flag: string; code: string }> = {
  en: { label: 'English', flag: '🇺🇸', code: 'EN' },
  ko: { label: '한국어', flag: '🇰🇷', code: 'KO' },
  zh: { label: '中文', flag: '🇨🇳', code: 'ZH' },
};
const TRANSLATIONS = {
  en: {
    siteTitle: 'Kendal Industrial Park',
    nav: {
      home: 'Home',
      explore: 'Explore',
      play: 'Play',
      about: 'About',
      phase1: 'Pioneer Hub',
      phase2: 'Future Development',
    },
    pages: {
      index: {
        title: 'Welcome to Kendal Industrial Park',
        blocks: [
          { type: 'heading', level: 2, content: 'Our Mission' },
          { type: 'text', content: 'We aim to support sustainable industrial growth in Kendal.' },
          { type: 'image', src: '/images/factory.jpg', alt: 'Factory overview' },
        ] as ContentBlock[],
      },
      explore: {
        title: 'Explore KIK',
        blocks: [{ type: 'text', content: 'Select a phase to explore.' }],
      },
      phase1: {
        title: 'Pioneer Hub',
        blocks: [{ type: 'text', content: 'Details for the Pioneer Hub.' }],
      },
      phase2: {
        title: 'Future Development',
        blocks: [{ type: 'text', content: 'Details for the Future Development.' }],
      },
      about: {
        title: 'About',
        blocks: [{ type: 'text', content: 'This site is built by Digipro PRS' }],
      },
      lang: { en: 'English', ko: 'Korean', zh: 'Chinese' },
    },
  },
  ko: {
    siteTitle: 'Kendal Industrial Park',
    nav: {
      home: '홈',
      explore: '탐색',
      play: '플레이',
      about: '소개',
      phase1: '파이오니어 허브',
      phase2: '미래 개발',
    },
    pages: {
      index: {
        title: `"켄달 산업단지"에 오신 것을 환영합니다`,
        blocks: [
          { type: 'heading', level: 2, content: '우리의 사명' },
          {
            type: 'text',
            content: '우리는 켄달의 지속 가능한 산업 성장을 지원하는 것을 목표로 합니다.',
          },
          { type: 'image', src: '/images/factory.jpg', alt: '공장 전경' },
        ] as ContentBlock[],
      },
      explore: {
        title: '탐색',
        blocks: [{ type: 'text', content: '단계를 선택하세요.' }],
      },
      phase1: {
        title: '파이오니어 허브',
        blocks: [{ type: 'text', content: '파이오니어 허브에 대한 상세 정보입니다.' }],
      },
      phase2: {
        title: '미래 개발',
        blocks: [{ type: 'text', content: '미래 개발에 대한 상세 정보입니다.' }],
      },
      about: {
        title: '소개',
        blocks: [{ type: 'text', content: '이 사이트는 "Digipro PRS"에 의해 구축되었습니다.' }],
      },
      lang: { en: '영어', ko: '한국어', zh: '중국어' },
    },
  },
  zh: {
    siteTitle: '肯达尔工业园区',
    nav: {
      home: '首页',
      explore: '探索',
      play: '体验',
      about: '关于',
      phase1: '先锋中心',
      phase2: '未来开发',
    },
    pages: {
      index: {
        title: '欢迎来到肯达尔工业园区',
        blocks: [
          { type: 'heading', level: 2, content: '我们的使命' },
          { type: 'text', content: '我们致力于支持肯达尔的可持续工业发展。' },
          { type: 'image', src: '/images/factory.jpg', alt: '工厂全景' },
        ] as ContentBlock[],
      },
      explore: {
        title: '探索',
        blocks: [{ type: 'text', content: '请选择一个阶段进行探索。' }],
      },
      phase1: {
        title: '先锋中心',
        blocks: [{ type: 'text', content: '关于先锋中心的详细信息。' }],
      },
      phase2: {
        title: '未来开发',
        blocks: [{ type: 'text', content: '关于未来开发的详细信息。' }],
      },
      about: {
        title: '关于',
        blocks: [{ type: 'text', content: '本网站由 Digipro PRS 构建。' }],
      },
      lang: { en: '英文', ko: '韩文', zh: '中文' },
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
