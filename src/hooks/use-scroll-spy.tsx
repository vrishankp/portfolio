"use client";
import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  // Store refs to elements in a ref to ensure they are stable across re-renders
  const elementRefs = useRef<Map<string, Element>>(new Map());

  useEffect(() => {
    // Clear previous refs
    elementRefs.current.clear();
    const elements = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (el) {
        elementRefs.current.set(id, el);
      }
      return el;
    });
    
    if (observer.current) {
      observer.current.disconnect();
    }

    const defaultOptions = {
      rootMargin: '0px 0px -50% 0px', // Adjust this to control when a section becomes active
      threshold: 0, // A section is active if even a pixel is visible with the rootMargin
      ...options,
    };

    observer.current = new IntersectionObserver((entries) => {
      // Find the entry that is intersecting and is closest to the top of the viewport
      // (or has the largest intersection ratio if multiple are intersecting equally close)
      let bestEntry: IntersectionObserverEntry | null = null;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (!bestEntry || entry.boundingClientRect.top < bestEntry.boundingClientRect.top) {
             bestEntry = entry;
          }
        }
      }

      if (bestEntry) {
        setActiveId(bestEntry.target.id);
      } else {
        // If nothing is intersecting based on rootMargin (e.g. scrolled past all sections),
        // check for the topmost visible section if not at top of page
        if (window.scrollY > 0) {
          let topmostVisibleId: string | null = null;
          let minTop = Infinity;
          elements.forEach(el => {
            if (el) {
              const rect = el.getBoundingClientRect();
              // Consider sections whose top is above or at the viewport top but bottom is below viewport top
              if (rect.top <= (window.innerHeight * 0.3) && rect.bottom > (window.innerHeight * 0.3)) { 
                if (rect.top < minTop) {
                  minTop = rect.top;
                  topmostVisibleId = el.id;
                }
              }
            }
          });
          if (topmostVisibleId) {
            setActiveId(topmostVisibleId);
          }
        } else {
          setActiveId(sectionIds[0]); // Default to first section if at top
        }
      }
    }, defaultOptions);
    
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });

    // Set initial active ID
    if (elements[0]) setActiveId(elements[0].id);

    return () => observer.current?.disconnect();
  }, [sectionIds, options]); // Dependencies

  return activeId;
}
