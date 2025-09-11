import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Header } from '../components/header';
import { ThemeProvider } from '@/components/theme-provider';
import patternImage from '../assets/pattern.png';

const RootLayout = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Header />
    {/* implement repeating pattern in this div below, the file is in public folder */}
    <div
      // className="relative h-screen w-full bg-[url('/pattern.png')] bg-center bg-repeat"
      // style={{ backgroundSize: '40px auto' }}
      className="relative h-screen w-full overflow-hidden"
    >
      <Outlet />
      <div
        className="pointer-events-none absolute inset-0 opacity-[2%]"
        style={{
          backgroundImage: `url(${patternImage})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px auto',
        }}
      />
    </div>
    <TanStackRouterDevtools />
  </ThemeProvider>
);

export const Route = createRootRoute({ component: RootLayout });
