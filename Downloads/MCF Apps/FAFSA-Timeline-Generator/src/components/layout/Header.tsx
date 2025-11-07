import { Moon, Sun } from 'lucide-react';
import { OwlLogo } from '@/assets/owl-logo';
import { useState, useEffect } from 'react';

export function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('mcf-theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('mcf-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4">
        {/* Logo and Branding */}
        <a
          href="https://www.mycollegefinance.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity"
        >
          <OwlLogo size={65} className="w-[50px] sm:w-[65px]" />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black tracking-tight" style={{ color: 'var(--brand-blue)' }}>
              MY COLLEGE FINANCE
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground tracking-wider font-medium">
              EDUCATE • MOTIVATE • ELEVATE
            </span>
          </div>
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Moon className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      </div>
    </header>
  );
}
