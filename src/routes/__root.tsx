import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import kikLogoWhite from '../assets/logokik-w.png';

const RootLayout = () => (
  <>
    <div className="flex justify-between">
      <div className="flex gap-2 p-2">
        <Link to="/" className="bg-brand-700 p-2">
          <img src={kikLogoWhite} alt="KIK Logo block w-4 h-auto" />
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <div className="flex gap-2 p-2">
        <button className="rounded bg-gray-100 p-2">ENGLISH (EN)</button>
        <button className="rounded bg-gray-100 p-2">KOREAN (KO)</button>
        <button className="rounded bg-gray-100 p-2">CHINESE (CN)</button>
      </div>
    </div>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
