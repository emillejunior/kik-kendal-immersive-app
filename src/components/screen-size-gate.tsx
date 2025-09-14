import { useEffect, useState } from 'react';

export default function ScreenSizeGate({ children }: { children: React.ReactNode }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // You can change this breakpoint
    };

    checkSize(); // initial check
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (isSmallScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4 text-center text-white">
        <div>
          <h1 className="mb-2 text-2xl font-bold">Screen Too Small</h1>
          <p>
            This application is designed for desktop or tablet devices. Please use a larger screen.
          </p>
        </div>
      </div>
    );
  }

  return children;
}
