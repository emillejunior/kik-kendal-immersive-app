import { Link } from '@tanstack/react-router';
import { LANG_META, useI18n, type Lang } from '../i18n';
import clsx from 'clsx';

import kikLogo from '../assets/logokik.png';
import { Button } from './ui/button';

export function Header() {
  const { lang, setLang } = useI18n();

  return (
    <header className="sticky top-0 z-50 flex items-center gap-4 border-b border-gray-200 px-8 py-6">
      {/* <strong>{copy.siteTitle}</strong> */}

      <nav className="flex items-center gap-3">
        <Link to="/" activeProps={{ style: { fontWeight: 'bold' } }}>
          <img src={kikLogo} className="h-16 w-auto" alt="KIK logo" />
        </Link>
      </nav>

      <div style={{ marginLeft: 'auto' }} />

      {/* Language selector */}
      <div role="group" aria-label="Language selector" style={{ display: 'flex', gap: 8 }}>
        {(Object.keys(LANG_META) as Lang[]).map(code => {
          const meta = LANG_META[code];
          const pressed = lang === code;
          return (
            <Button
              key={code}
              variant={'ghost'}
              onClick={() => setLang(code)}
              aria-pressed={pressed}
              title={`${meta.label} (${meta.code})`}
              className={clsx(
                'border p-6',
                pressed
                  ? 'text-foreground border-foreground/80 font-bold'
                  : 'text-foreground/60 border-foreground/30 font-medium'
              )}
              // className={clsx(
              //   'inline-flex cursor-pointer items-center gap-1.5 rounded border px-2.5 py-1.5 text-sm transition-colors',
              //   pressed
              //     ? 'border-gray-500 bg-gray-100 font-bold'
              //     : 'border-gray-300 bg-gray-50 font-medium'
              // )}
            >
              <span aria-hidden="true" style={{ fontSize: 16, lineHeight: 1 }}>
                {meta.flag}
              </span>
              <span>{meta.label}</span>
              <span style={{ opacity: 0.6, fontSize: 12 }}>{meta.code}</span>
            </Button>
          );
        })}
      </div>
    </header>
  );
}
