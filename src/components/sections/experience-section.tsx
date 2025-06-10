import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import {FadeInUp} from '@/components/animations/fade-in-up';

interface ExperienceSectionProps {
  id: string;
}

export function ExperienceSection({ id }: ExperienceSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <FadeInUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Experience
        </h2>
        </FadeInUp>
        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <FadeInUp key={index} delay={100 + index * 100}>
              <div className="md:flex items-center w-full">
                {/* Timeline Dot - Desktop */}
                <div className="hidden md:block absolute w-4 h-4 bg-primary rounded-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 border-2 border-background"></div>
                
                <Card className={`w-full md:w-[calc(50%-2rem)] shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-primary flex items-center">
                          <Briefcase className="mr-2 h-5 w-5" /> {exp.role}
                        </CardTitle>
                        <p className="text-md font-semibold text-foreground/90">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
                        <CalendarDays className="mr-1 h-4 w-4" /> {exp.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-foreground/80 text-sm">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
