import { createFileRoute, Link } from '@tanstack/react-router';

// import kikLogo from '../assets/logokik.png';
import logo from '../assets/logo.png';
import logoW from '../assets/logo-w.png';
import sezLogo from '../assets/logosez.png';
import jababekaLogo from '../assets/logojababeka.png';
import jababekaLogoW from '../assets/logojababeka-w.png';
import sembcorpLogo from '../assets/logosembcorp.png';
import { useI18n } from '../i18n';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { copy } = useI18n();

  return (
    <div className="to-brand-100 dark:to-brand-900 from-background flex h-full w-full flex-col items-center justify-center bg-gradient-to-br">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8 py-8">
          <img src={logo} className="h-32 w-auto" alt="KIK logo" />
          <h1 className="text-brand-800 dark:text-brand-100 py-8 text-6xl font-bold">
            {copy.pages.index.title}
          </h1>
          <Button size={'lg'} asChild>
            <Link to="/explore">{copy.nav.explore}</Link>
          </Button>
        </div>
        {/* Logos Section */}
        <div className="flex h-12 items-center justify-center gap-12 dark:opacity-50">
          <img
            src={sezLogo}
            className="h-full w-auto dark:brightness-0 dark:invert"
            alt="SEZ logo"
          />
          <div className="h-full w-auto">
            <img src={jababekaLogo} className="h-full w-auto dark:hidden" alt="KIK logo" />
            <img src={jababekaLogoW} className="hidden h-full w-auto dark:block" alt="KIK logo" />
          </div>
          <img
            src={sembcorpLogo}
            className="h-full w-auto dark:brightness-0 dark:invert"
            alt="SEZ logo"
          />
        </div>
      </div>
      <div className="fixed right-10 bottom-10 z-10">
        <img src={logoW} className="h-64 w-auto dark:opacity-10 dark:invert" alt="KIK Watermark" />
      </div>
    </div>
  );
}
