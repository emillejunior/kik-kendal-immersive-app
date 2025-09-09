import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Header } from '../components/header';

const RootLayout = () => (
  <>
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <div className="relative flex-1">
        <Outlet />
      </div>
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
