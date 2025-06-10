import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {FadeInUp} from '@/components/animations/fade-in-up';
import { School, Palette, Camera } from 'lucide-react';

interface AboutSectionProps {
  id: string;
}

const interests = [
  { name: "Web Development", icon: <Palette className="h-6 w-6 text-primary" />, description: "Crafting responsive and engaging user experiences on the web." },
  { name: "Analog Photography", icon: <Camera className="h-6 w-6 text-primary" />, description: "Taking film photographs with dream like aesthetics" },
];

export function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            About Me
          </h2>
        </FadeInUp>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <FadeInUp delay={100} className="md:col-span-1">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/med.jpg"
                    alt="Vrishank Paladugu - About"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="person coding"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </FadeInUp>

          <FadeInUp delay={200} className="md:col-span-2 space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hello! I'm Vrishank, a passionate Software Engineer driven by curiosity and a love for creating innovative solutions. With a strong foundation in computer science and hands-on experience in full-stack development and AI, I enjoy tackling complex challenges and turning ideas into reality.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I thrive in collaborative environments and am always eager to learn new technologies and methodologies. My goal is to leverage my skills to build impactful software that solves real-world problems.
            </p>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <School className="mr-2 h-6 w-6" /> Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-md font-semibold">University of Wisconsin, Madison</p>
                <p className="text-sm text-muted-foreground">Bachelor of Science in Computer Science, Bachelor of Science in Data Science</p>
              </CardContent>
            </Card>
          </FadeInUp>
        </div>

        <FadeInUp delay={300}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mt-16 mb-10">
            Interests
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <FadeInUp key={interest.name} delay={400 + index * 100}>
                <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-2">
                      {interest.icon}
                    </div>
                    <CardTitle className="text-xl">{interest.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{interest.description}</p>
                  </CardContent>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
