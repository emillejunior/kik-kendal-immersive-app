import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';
import { useSwitchSound } from '@/hooks/useSound';

export function ModeToggle() {
  const { setTheme } = useTheme();

  const playSwitch = useSwitchSound(0.3);

  const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
    playSwitch();
    setTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="h-full w-auto">
        <Button variant="outline" className="bg-background p-4" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
