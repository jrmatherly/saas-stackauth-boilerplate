'use client';

import { AnimatedTestimonials } from '@/components/animated-testimonials';

// Mock testimonial data following the required structure
const testimonials = [
  {
    quote:
      "Having an invisible illness means constantly explaining myself. Spoons of Salt helped me find my voice and taught me I don't owe anyone an explanation. The community here understands what it's like to look 'fine' while struggling inside.",
    name: 'Alex Morgan',
    designation: 'Living with Fibromyalgia',
    src: '/demo/testimonials/1.avif',
  },
  {
    quote:
      'The resources here helped me explain my condition to my employer, and I finally received the accommodations I needed to continue working. Understanding the spoon theory changed how I communicate my limitations to others.',
    name: 'James Chen',
    designation: 'Living with Multiple Sclerosis',
    src: '/demo/testimonials/2.avif',
  },
  {
    quote:
      'For years, I felt alone in my struggle. Finding this community of people who understand invisible pain changed everything for me. The support groups and educational resources have been invaluable in my journey.',
    name: 'Sarah Johnson',
    designation: 'Living with Chronic Fatigue Syndrome',
    src: '/demo/testimonials/3.avif',
  },
  {
    quote:
      'Navigating life with an autoimmune disease felt impossible until I found Spoons of Salt. The advocacy tools and self-care strategies have empowered me to set boundaries and prioritize my health without guilt.',
    name: 'Michael Rivera',
    designation: 'Living with Lupus',
    src: '/demo/testimonials/4.avif',
  },
  {
    quote:
      "The invisible illness workshops changed my perspective on pacing and energy conservation. I've learned to celebrate small victories and find joy even on difficult days. This community truly understands the spoon theory.",
    name: 'Olivia Garcia',
    designation: 'Living with POTS',
    src: '/demo/testimonials/5.avif',
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 border-t border-divider dark:border-[hsl(var(--iridescent-pink-dark)/0.2)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 backdrop-blur-lg bg-white/40 dark:bg-black/60 py-8 px-4 rounded-xl shadow-lg border border-white/30 dark:border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white text-shadow-xl">
            Real Stories, Real Impact
          </h2>
          <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto text-shadow-lg">
            Hear from people living with invisible illnesses about their
            experiences, challenges, and how our community has made a
            difference.
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
