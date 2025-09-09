import { Link } from '@tanstack/react-router';
import { LANG_META, useI18n, type Lang } from '../i18n';
import clsx from 'clsx';

import kikLogo from '../assets/logokik.png';
import { Button } from './ui/button';

export function Header() {
  const { lang, setLang } = useI18n();

  return (
    <header className="absolute top-0 z-50 flex w-full items-center gap-4 px-8 py-6">
      <nav className="flex items-center gap-3">
        <Link to="/" activeProps={{ style: { fontWeight: 'bold' } }}>
          <img
            src={kikLogo}
            className="h-24 w-auto rounded-lg border border-white bg-gradient-to-tr from-white/50 via-white to-white/80 p-5"
            alt="KIK logo"
          />
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
                'border bg-white/75 p-6',
                pressed
                  ? 'text-foreground border-foreground/80 font-bold'
                  : 'text-foreground/60 border-foreground/30 font-medium'
              )}
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
