"use client";
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  threshold?: number;
  triggerOnce?: boolean;
}

export function FadeInUp({ children, className, delay = 0, threshold = 0.1, triggerOnce = true }: FadeInUpProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure this code only runs on the client
    if (typeof window === 'undefined' || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce && ref.current) { // Check ref.current again inside timeout
                observer.unobserve(ref.current);
              }
            }, delay);
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current; // Capture ref.current
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use captured ref in cleanup
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
}
