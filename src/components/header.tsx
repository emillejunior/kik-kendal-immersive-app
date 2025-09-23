import { Link, useLocation } from '@tanstack/react-router';
import clsx from 'clsx';
import { motion } from 'motion/react';

// i18n
import { LANG_META, useI18n, type Lang } from '../i18n';

// assets
import kikLogo from '../assets/logo/logokik.png';
import sezLogo from '../assets/logo/logosez.png';

// components
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

export function Header() {
  const { lang, setLang } = useI18n();
  const location = useLocation();

  return (
    <header className="absolute top-0 z-50 flex w-full items-center justify-between gap-4 px-8 py-6">
      <nav className="flex items-center gap-3">
        <Link to="/" activeProps={{ style: { fontWeight: 'bold' } }}>
          <div className="flex items-center gap-2">
            <img
              src={kikLogo}
              className={
                location.pathname === '/'
                  ? 'h-24 w-auto p-4 dark:brightness-0 dark:invert'
                  : 'h-24 w-auto rounded-lg border border-white bg-gradient-to-tr from-white/50 via-white to-white/80 p-4 dark:border-0 dark:from-black/0 dark:via-black/0 dark:to-black/0 dark:brightness-0 dark:invert'
              }
              alt="KIK logo"
            />

            {/* Only show this sezLogo if route is not root */}
            {location.pathname == '/' && (
              <motion.img
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                src={sezLogo}
                className="h-24 w-auto rounded-lg p-4 dark:brightness-0 dark:invert"
                alt="SEZ logo"
              />
            )}
          </div>
        </Link>
      </nav>

      {/* <div style={{ marginLeft: 'auto' }} /> */}

      {/* Language selector and mode toggle */}
      <div className="flex items-center justify-end gap-10">
        <div role="group" aria-label="Language selector" className="flex gap-5">
          {(Object.keys(LANG_META) as Lang[]).map(code => {
            const meta = LANG_META[code];
            const pressed = lang === code;
            return (
              <Button
                key={code}
                variant={'ghost'}
                size={pressed ? 'lg' : 'icon'}
                onClick={() => setLang(code)}
                aria-pressed={pressed}
                title={`${meta.label} (${meta.code})`}
                className={clsx(
                  'bg-background/75 border p-6',
                  pressed
                    ? 'text-foreground border-foreground/80 font-bold'
                    : 'text-foreground/60 border-foreground/30 font-medium'
                )}
              >
                <span aria-hidden="true" style={{ fontSize: 24, lineHeight: 1 }}>
                  {meta.flag}
                </span>
                {pressed ? (
                  <span>{meta.label}</span>
                ) : (
                  <></>
                  // <span style={{ opacity: 0.6, fontSize: 12 }}>{meta.code}</span>
                )}
              </Button>
            );
          })}
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
