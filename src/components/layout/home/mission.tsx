'use client';

import AnimatedSection from '@/components/animated-section';
import { Heart, Shield, Users } from 'lucide-react';
import React from 'react';

const MissionCard = ({
  icon: Icon,
  title,
  description,
}: { icon: React.ElementType; title: string; description: string }) => (
  <div className="glass-card rounded-2xl p-8 transition-all hover:shadow-xl backdrop-blur-md bg-white/40 dark:bg-black/50 border border-white/40 dark:border-white/20 shadow-lg">
    <div className="w-16 h-16 rounded-xl bg-white/70 dark:bg-black/70 flex items-center justify-center mb-6 shadow-lg border-2 border-white/50 dark:border-white/20">
      <Icon
        size={32}
        className="text-iridescent-pink dark:text-iridescent-pink drop-shadow-lg"
        strokeWidth={2.5}
      />
    </div>
    <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white text-shadow-lg">
      {title}
    </h3>
    <p className="text-foreground dark:text-white text-shadow-md">
      {description}
    </p>
  </div>
);

const Mission = () => {
  const missions = [
    {
      icon: Heart,
      title: 'Support & Community',
      description:
        'Building a community where people with invisible illnesses feel understood, validated, and supported.',
    },
    {
      icon: Shield,
      title: 'Advocacy & Education',
      description:
        'Advocating for better understanding, research, and healthcare policies for those with invisible illnesses.',
    },
    {
      icon: Users,
      title: 'Awareness & Visibility',
      description:
        'Raising awareness about invisible illnesses, challenging misconceptions, and promoting empathy.',
    },
  ];

  return (
    <AnimatedSection
      id="mission"
      className="section-padding pb-16 border-t border-divider dark:border-[hsl(var(--iridescent-pink-dark)/0.2)]"
    >
      <div className="container-narrow">
        <div className="text-center mb-16 backdrop-blur-lg bg-white/40 dark:bg-black/60 py-8 px-4 rounded-xl shadow-lg border border-white/30 dark:border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white text-shadow-xl">
            Our Mission
          </h2>
          <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto text-shadow-lg">
            We're committed to supporting those with invisible illnesses through
            education, advocacy, and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <AnimatedSection
              key={`mission-${mission.title.toLowerCase().replace(/\s+/g, '-')}`}
              animation="scale-in"
              delay={index * 200}
            >
              <MissionCard {...mission} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Mission;
