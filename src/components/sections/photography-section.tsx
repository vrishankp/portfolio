import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FadeInUp } from '@/components/animations/fade-in-up';
import { photographs } from '@/data/photography';
import { Camera, CalendarDays } from 'lucide-react';

interface PhotographySectionProps {
  id: string;
}

export function PhotographySection({ id }: PhotographySectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            Photography
          </h2>
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12">
            Some pics I captured on 35mm film.
          </p>
        </FadeInUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographs.map((photo, index) => (
            <FadeInUp key={photo.id} delay={100 + index * 100}>
              <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden group">
                <CardHeader className="p-0">
                  <div className={`relative w-full ${photo.isPortrait ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
                    <Image
                      src={photo.imageUrl}
                      alt={photo.title}
                      layout="fill"
 objectFit={photo.isPortrait ? 'contain' : 'cover'}
 className={`transition-transform duration-500 ${
 photo.isPortrait ? '' : 'group-hover:scale-110'
 }`}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-lg font-semibold text-primary-foreground">{photo.title}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  {photo.dateTaken && (
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                      {new Date(photo.dateTaken).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                  )}
                </CardContent>
 <CardContent className="p-4 pt-0">
                  {photo.description && (
 <CardDescription className="text-sm text-foreground/80">{photo.description}</CardDescription>
                  )}
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </div>
        <FadeInUp delay={photographs.length * 100 + 200}>
            <div className="text-center mt-12" >
                <p className="text-muted-foreground">
                    More of my work can be found on my photography portfolio (coming soon!).
                </p>
            </div>
        </FadeInUp>
      </div>
    </section>
  );
}
