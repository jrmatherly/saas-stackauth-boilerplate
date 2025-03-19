'use client';

import AnimatedSection from '@/components/animated-section';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  FileText,
  HelpCircle,
  Hospital,
  Info,
} from 'lucide-react';
import React from 'react';

const ResourceCard = ({
  icon: Icon,
  title,
  description,
  color = 'accent',
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color?: 'accent' | 'primary';
}) => (
  <div className="glass-card rounded-2xl p-6 h-full transition-all hover:shadow-xl backdrop-blur-md bg-white/50 dark:bg-black/60 border border-white/40 dark:border-white/20 shadow-lg hover:translate-y-[-5px] group">
    <div
      className={cn(
        'w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg border-2 border-white/70 dark:border-white/30',
        'bg-white/80 dark:bg-black/80 text-iridescent-pink'
      )}
    >
      <Icon size={30} className="drop-shadow-lg" strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white text-shadow-lg">
      {title}
    </h3>
    <p className="text-foreground dark:text-white text-shadow-md text-sm mb-4">
      {description}
    </p>
    <div className="flex items-center text-sm font-semibold text-iridescent-pink dark:text-iridescent-pink text-shadow-md">
      <span>Learn more</span>
      <ArrowRight
        size={16}
        className="ml-2 group-hover:translate-x-1 transition-transform"
      />
    </div>
  </div>
);

const Resources = () => {
  const resources: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: 'accent' | 'primary';
  }[] = [
    {
      icon: Hospital,
      title: 'Medical Resources',
      description:
        'Find information about specialists, treatment options, and healthcare providers who understand invisible illnesses.',
      color: 'primary' as const,
    },
    {
      icon: BookOpen,
      title: 'Educational Materials',
      description:
        'Access guides, articles, and research to better understand various invisible illnesses and conditions.',
      color: 'accent' as const,
    },
    {
      icon: Info,
      title: 'Advocacy Toolkit',
      description:
        'Resources to help you advocate for yourself or your loved ones in healthcare and workplace settings.',
      color: 'primary' as const,
    },
    {
      icon: FileText,
      title: 'Legal Rights Guide',
      description:
        'Information about your legal rights, workplace accommodations, and disability benefits.',
      color: 'accent' as const,
    },
    {
      icon: HelpCircle,
      title: 'Support Communities',
      description:
        'Connect with others who understand your journey through our curated list of support communities.',
      color: 'primary' as const,
    },
  ];

  return (
    <AnimatedSection
      id="resources"
      className="section-padding pt-16 pb-16 border-t border-divider dark:border-[hsl(var(--iridescent-pink-dark)/0.2)]"
    >
      <div className="container-narrow">
        <div className="text-center mb-16 backdrop-blur-lg bg-white/40 dark:bg-black/60 py-8 px-4 rounded-xl shadow-lg border border-white/30 dark:border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white text-shadow-xl">
            Helpful Resources
          </h2>
          <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto text-shadow-lg">
            Access our curated collection of resources designed to help navigate
            life with invisible illnesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <AnimatedSection
              key={`resource-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
              animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
              delay={index * 100}
            >
              <ResourceCard {...resource} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Resources;
