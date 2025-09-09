import { createFileRoute, Link } from '@tanstack/react-router';

import kikLogo from '../assets/logokik.png';
import sezLogo from '../assets/logosez.png';
import { useI18n } from '../i18n';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { copy } = useI18n();

  return (
    <div className="bg-brand-50 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8 py-8">
          <h1 className="text-brand-800 py-8 text-4xl font-bold">Kawasan Industri Kendal</h1>
          <Button size={'lg'} asChild>
            <Link to="/explore">{copy.nav.explore}</Link>
          </Button>
        </div>
        <div className="flex h-12 items-center justify-center gap-8">
          <img src={kikLogo} className="h-full w-auto" alt="KIK logo" />
          <img src={sezLogo} className="h-full w-auto" alt="SEZ logo" />
        </div>
      </div>
    </div>
  );
}
