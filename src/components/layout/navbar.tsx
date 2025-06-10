"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Photography', href: '#photography' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sectionIds = navItems.map(item => item.href.substring(1));
  const activeId = useScrollSpy(sectionIds, { rootMargin: '-20% 0px -70% 0px' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-card shadow-lg py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          VP
        </Link>
        
        <nav className="hidden md:flex space-x-1 xl:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              asChild
              className={cn(
                'font-medium hover:text-primary transition-colors px-2 lg:px-3',
                activeId === item.href.substring(1) ? 'text-primary underline underline-offset-4' : 'text-foreground/80'
              )}
            >
              <Link href={item.href} onClick={(e) => handleScrollTo(e, item.href)}>
                {item.label}
              </Link>
            </Button>
          ))}
           <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="/files/Vrishank_Paladugu_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg py-2 animate-in fade-in-20 slide-in-from-top-5">
          <nav className="flex flex-col items-center space-y-2 py-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className={cn(
                  'w-full text-center font-medium hover:text-primary transition-colors',
                  activeId === item.href.substring(1) ? 'text-primary underline underline-offset-4' : 'text-foreground/80'
                )}
              >
                <Link href={item.href} onClick={(e) => handleScrollTo(e, item.href)}>
                  {item.label}
                </Link>
              </Button>
            ))}
            <Button variant="outline" asChild className="w-11/12 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="/files/Vrishank_Paladugu_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
