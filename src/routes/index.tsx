import { createFileRoute, Link } from '@tanstack/react-router';

// import kikLogo from '../assets/logokik.png';
import logo from '../assets/logo.png';
import logoW from '../assets/logo-w.png';
import sezLogo from '../assets/logosez.png';
import jababekaLogo from '../assets/logojababeka.png';
import sembcorpLogo from '../assets/logosembcorp.png';
import { useI18n } from '../i18n';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { copy } = useI18n();

  return (
    <div className="to-brand-100 flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-white">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8 py-8">
          <img src={logo} className="h-32 w-auto" alt="KIK logo" />
          <h1 className="text-brand-800 py-8 text-6xl font-bold">{copy.pages.index.title}</h1>
          <Button size={'lg'} asChild>
            <Link to="/explore">{copy.nav.explore}</Link>
          </Button>
        </div>
        <div className="flex h-12 items-center justify-center gap-12">
          <img src={sezLogo} className="h-full w-auto" alt="SEZ logo" />
          <img src={jababekaLogo} className="h-full w-auto" alt="KIK logo" />
          <img src={sembcorpLogo} className="h-full w-auto" alt="SEZ logo" />
        </div>
      </div>
      <div className="fixed right-10 bottom-10 z-10">
        <img src={logoW} className="h-64 w-auto" alt="KIK Watermark" />
      </div>
    </div>
  );
}
