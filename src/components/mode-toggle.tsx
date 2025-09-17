import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { useSwitchSound } from '@/hooks/useSound';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const playSwitch = useSwitchSound(0.3);

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    playSwitch();
  };

  return (
    <Button variant="outline" className="py-6" onClick={toggleTheme}>
      <span className="flex h-8 items-center gap-1 py-2">
        <Sun className="dark:opacity-1.55 block size-8 p-1.5 opacity-100 transition-all dark:size-7 dark:-rotate-360 dark:opacity-25" />
        <span className="block h-full w-[1px] bg-black opacity-10 dark:bg-white"></span>
        <Moon className="block size-7 rotate-360 p-2 opacity-25 transition-all dark:size-8 dark:rotate-0 dark:opacity-100" />
      </span>
    </Button>
  );
}
