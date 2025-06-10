import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillsCategorized } from '@/data/portfolio';
import {FadeInUp} from '@/components/animations/fade-in-up';

interface SkillsSectionProps {
  id: string;
}

export function SkillsSection({ id }: SkillsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeInUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Skills
        </h2>
        </FadeInUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategorized.map((category, index) => (
            <FadeInUp key={category.title} delay={100 + index * 100}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    {category.icon && <category.icon className="mr-2 h-5 w-5" />} 
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant="default" className="bg-primary/80 hover:bg-primary text-primary-foreground transition-colors text-sm px-3 py-1">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
