import { createFileRoute } from '@tanstack/react-router';

import kikLogo from '../assets/logokik.png';
import sezLogo from '../assets/logosez.png';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="bg-brand-50 flex h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-brand-800 text-4xl font-bold">Kawasan Industri Kendal</h1>
          <a href="/experience" className="text-brand-800 w-fit rounded border bg-white p-2">
            Experience
          </a>
        </div>
        <div className="border-brand-700 flex h-32 gap-8 rounded-2xl border p-8">
          <img src={kikLogo} className="h-full w-auto" alt="KIK logo" />
          <img src={sezLogo} className="h-full w-auto" alt="SEZ logo" />
        </div>
      </div>
    </div>
  );
}
