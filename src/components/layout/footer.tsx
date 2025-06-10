import { Github, Linkedin, Mail } from 'lucide-react';
import {FadeInUp} from '@/components/animations/fade-in-up';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 text-center">
      <FadeInUp>
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/vrishankp" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground/70 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vrishank-paladugu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:me@vrishankp.com" aria-label="Email" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vrishank Paladugu. All rights reserved.
          </p>
        </div>
      </FadeInUp>
    </footer>
  );
}
