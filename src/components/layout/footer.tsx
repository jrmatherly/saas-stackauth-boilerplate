import { DonateBanner } from '@/components/donate-banner';
import { NewsletterCard } from '@/components/newsletter-card';
import { env } from '@/env';
import { Divider, Link } from '@heroui/react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
// biome-ignore lint/correctness/noUnusedImports: not used directly
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-divider dark:border-[hsl(var(--iridescent-pink-dark)/0.2)]">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Left Column - Logo and Description */}
          <div className="w-full lg:w-1/4 flex flex-col">
            <div className="flex items-center space-x-3 mb-6">
              <div
                style={{ position: 'relative', width: '60px', height: '60px' }}
              >
                <Image
                  src="/logo.png"
                  alt={env.NEXT_PUBLIC_APP_NAME}
                  fill
                  sizes="60px"
                  style={{ objectFit: 'contain' }}
                  className="rounded-sm"
                />
              </div>
              <span className="text-xl font-semibold dark:text-iridescent-pink text-shadow-md">
                {env.NEXT_PUBLIC_APP_NAME}
              </span>
            </div>
            <p className="text-foreground-500 dark:text-gray-300 mb-6 text-shadow-sm text-base max-w-xs">
              Supporting and advocating for those living with invisible
              illnesses.
            </p>
            <div className="flex space-x-5 mb-8">
              <Link
                href="https://www.facebook.com/profile.php?id=61555972720463"
                aria-label="Facebook"
                className="text-[hsl(var(--iridescent-pink))] hover:text-[#2D8A8A] transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon icon="lucide:facebook" className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com/spoonsofsalt/"
                aria-label="Twitter"
                className="text-[hsl(var(--iridescent-pink))] hover:text-[#2D8A8A] transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon icon="lucide:twitter" className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/spoonsofsalt4you/"
                aria-label="Instagram"
                className="text-[hsl(var(--iridescent-pink))] hover:text-[#2D8A8A] transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon icon="lucide:instagram" className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Middle Columns - Links */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-24">
            {/* Quick Links Column */}
            <div>
              <h3 className="font-semibold mb-6 text-xl dark:text-iridescent-pink text-shadow-md">
                Quick Links
              </h3>
              <div className="flex flex-col space-y-4">
                <Link
                  href="/about/vision"
                  color="foreground"
                  className="hover-iridescent-pink transition-colors text-shadow-sm dark:text-gray-300 text-base"
                >
                  About Us
                </Link>
                <Link
                  href="/about/approach"
                  color="foreground"
                  className="hover-iridescent-pink transition-colors text-shadow-sm dark:text-gray-300 text-base"
                >
                  Our Mission
                </Link>
                <Link
                  href="/involved/medical"
                  color="foreground"
                  className="hover-iridescent-pink transition-colors text-shadow-sm dark:text-gray-300 text-base"
                >
                  Get Involved
                </Link>
                <Link
                  href="/contact"
                  color="foreground"
                  className="hover-iridescent-pink transition-colors text-shadow-sm dark:text-gray-300 text-base"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold mb-6 text-xl dark:text-iridescent-pink text-shadow-md">
                Resources
              </h3>
              <div className="flex flex-col space-y-4">
                <Link
                  href="/blog"
                  color="foreground"
                  className="hover-iridescent-pink transition-colors text-shadow-sm dark:text-gray-300 text-base"
                >
                  Blog
                </Link>
                <Link
                  href="/support-groups"
                  color="foreground"
                  className="hover-iridescent-pink transition-colors text-shadow-sm dark:text-gray-300 text-base"
                >
                  Support Groups
                </Link>
                <Link
                  href="/newsletter"
                  color="foreground"
                  className="hover-iridescent-pink transition-colors text-shadow-sm dark:text-gray-300 text-base"
                >
                  Newsletter
                </Link>
                <Link
                  href="/donate"
                  color="foreground"
                  className="hover-iridescent-pink transition-colors text-shadow-sm dark:text-gray-300 text-base"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="w-full lg:w-2/5">
            <NewsletterCard />
          </div>
        </div>

        {/* Donate Section */}
        <DonateBanner />

        <Divider className="my-10" />

        {/* Footer Bottom */}
        <div className="text-center text-sm text-foreground-500 dark:text-gray-400 text-shadow-sm space-y-1">
          <p>
            &copy; {new Date().getFullYear()} {env.NEXT_PUBLIC_APP_NAME}. All
            rights reserved.
          </p>
          <p>EIN: 99-1733413</p>
        </div>
      </div>
    </footer>
  );
}
