'use client';

import { NewsletterSignup } from '@/components/newsletter-signup';

export const NewsletterCard = () => {
  const handleSubmit = async (email: string) => {
    // Handle form submission
    /* await submitToAPI(email); */
  };

  return <NewsletterSignup onSubmitAction={handleSubmit} />;
};
