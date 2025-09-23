import { createFileRoute, Link } from '@tanstack/react-router';

// assets
import { ChevronRight } from 'lucide-react';

// components
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/play/')({
  component: play,
});

function play() {
  return (
    <div className="to-brand-100 dark:to-brand-900 from-background flex h-full w-full flex-col items-center justify-center bg-gradient-to-br">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8 py-8">
          <h1 className="text-xl font-bold">Playing Main Immersion...</h1>
          <p className="italic">This feature/page is under development</p>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant={'outline'} size={'lg'} asChild>
            <Link className="flex items-center justify-start gap-2" to="/">
              <ChevronRight />
              Back to Home
            </Link>
          </Button>
          <Button variant={'outline'} size={'lg'} asChild>
            <Link className="flex items-center justify-start gap-2" to="/explore">
              <ChevronRight />
              Explore
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
