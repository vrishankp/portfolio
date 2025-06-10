"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {FadeInUp} from '@/components/animations/fade-in-up';
import { ArrowDown, Briefcase, Mail } from 'lucide-react';

interface HeroSectionProps {
  id: string;
}

export function HeroSection({ id }: HeroSectionProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 py-20 pt-32 md:pt-20">
      <div className="container mx-auto px-4 text-center">
        <FadeInUp>
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-primary">
            <Image
              src="/images/profile.png"
              alt="Vrishank Paladugu"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </FadeInUp>
        <FadeInUp delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-3">
            Vrishank Paladugu
          </h1>
        </FadeInUp>
        <FadeInUp delay={200}>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Software Engineer & Full Stack Developer
          </p>
        </FadeInUp>
        <FadeInUp delay={300}>
          <div className="space-x-0 space-y-3 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <Button size="lg" asChild className="transition-transform hover:scale-105">
              <Link href="#projects" onClick={(e) => handleScrollTo(e, '#projects')}>
                <Briefcase className="mr-2 h-5 w-5" /> View My Work
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
                <Mail className="mr-2 h-5 w-5" /> Get In Touch
              </Link>
            </Button>
          </div>
        </FadeInUp>
        <FadeInUp delay={400}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <Link href="#about" onClick={(e) => handleScrollTo(e, '#about')} aria-label="Scroll to about section">
                <ArrowDown className="h-8 w-8 text-primary/70 animate-bounce" />
              </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
