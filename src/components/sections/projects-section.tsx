import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';
import {FadeInUp} from '@/components/animations/fade-in-up';

interface ProjectsSectionProps {
  id: string;
}

export function ProjectsSection({ id }: ProjectsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <FadeInUp>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Projects
        </h2>
        </FadeInUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInUp key={project.title} delay={100 + index * 100}>
              <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden group">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4 text-foreground/80">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
