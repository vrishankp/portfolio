'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, useTransition } from "react";
import emailjs from 'emailjs-com';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

interface ContactSectionProps {
  id: string;
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection({ id }: ContactSectionProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setFormError(null);
    startTransition(async () => {
      try {
        await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: data.name,
              from_email: data.email,
              message: data.message,
            },
            publicKey,
        );

        toast({
          title: "Success!",
          description: "Message sent successfully!",
        });
        form.reset();
      } catch (error) {
        console.error(error);
        setFormError("Failed to send message. Please try again.");
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    });
  }

  return (
      <section id={id} className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Get In Touch
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeInUp delay={100}>
              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out to me!
                </p>
                <div className="space-y-3">
                  <a href="mailto:me@vrishankp.com" className="flex items-center text-foreground/80 hover:text-primary transition-colors group">
                    <Mail className="mr-3 h-5 w-5 text-primary group-hover:animate-pulse" />
                    me@vrishankp.com
                  </a>
                  <a href="https://www.linkedin.com/in/vrishank-paladugu/" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-primary transition-colors group">
                    <Linkedin className="mr-3 h-5 w-5 text-primary group-hover:animate-pulse" />
                    linkedin.com/in/vrishank-paladugu
                  </a>
                  <a href="https://github.com/vrishankp" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-primary transition-colors group">
                    <Github className="mr-3 h-5 w-5 text-primary group-hover:animate-pulse" />
                    github.com/vrishankp
                  </a>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={200}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 sm:p-8 bg-card rounded-lg shadow-xl">
                  <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} className="bg-background focus:ring-primary focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                      )}
                  />
                  <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background focus:ring-primary focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                      )}
                  />
                  <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Your message..." {...field} rows={5} className="bg-background focus:ring-primary focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                      )}
                  />
                  {formError && <p className="text-sm font-medium text-destructive">{formError}</p>}
                  <Button type="submit" disabled={isPending} className="w-full transition-transform hover:scale-105">
                    {isPending ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                  </Button>
                </form>
              </Form>
            </FadeInUp>
          </div>
        </div>
      </section>
  );
}
