'use client';

/* import { UserMenu } from '@/components/auth/user-menu'; */
import { PayPalDonateButton } from '@/components/paypal-donate-button';
import { ThemeSwitch } from '@/components/theme-switch';
import { cn } from '@/lib/utils';
import { motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

/* Define the menu items for each dropdown */
const menuItems = {
  about: [
    { label: 'Who We Are', href: '/about/us', sectionId: 'about-us' },
    { label: 'Our Work', href: '/about/work', sectionId: 'about-work' },
    {
      label: 'Why Support SOS',
      href: '/about/support',
      sectionId: 'about-support',
    },
    { label: 'Contact Us', href: '/about/contact', sectionId: 'about-contact' },
  ],
  'get involved': [
    {
      label: 'Fundraising',
      href: '/involved/fundraising',
      sectionId: 'involved-fundraising',
    },
    {
      label: 'Volunteer',
      href: '/involved/volunteer',
      sectionId: 'involved-volunteer',
    },
  ],
  resources: [
    { label: 'FAQs', href: '/resources/faq', sectionId: 'resources-faq' },
    { label: 'Blog', href: '/resources/blog', sectionId: 'resources-blog' },
    { label: 'For You', href: '/resources/you', sectionId: 'resources-you' },
  ],
  events: [
    {
      label: 'Upcoming Events',
      href: '/events/upcoming',
      sectionId: 'events-upcoming',
    },
    {
      label: 'Previous Events',
      href: '/events/previous',
      sectionId: 'events-previous',
    },
  ],
  shop: [
    { label: 'Salty Store', href: '/shop/store', sectionId: 'shop-store' },
  ],
};

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', latest => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-50 w-full pt-2"
      >
        <div
          className={cn(
            'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12',
            scrolled && 'bg-background/50 backdrop-blur-2xl'
          )}
        >
          <motion.div
            key={1}
            className={cn(
              'relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6',
              scrolled && 'lg:py-4'
            )}
          >
            {/* Logo on the far left */}
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <div
                  style={{
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Spoons of Salt logo"
                    fill
                    sizes="80px"
                    style={{ objectFit: 'contain' }}
                    className="rounded-sm"
                    priority
                  />
                </div>
              </Link>

              {/* Mobile Navigation */}
              <button
                type="button"
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState === true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              {/* Mobile Menu Content */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {Object.entries(menuItems).map(([key, items]) => (
                    <li key={key}>
                      <Link
                        href={items[0]?.href || '#'}
                        className="text-foreground hover-iridescent-pink dark:text-gray-300 block duration-150 text-shadow-sm"
                      >
                        <span className="capitalize">{key}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {Object.entries(menuItems).map(([key, items]) => (
                    <li key={key}>
                      <Link
                        href={items[0]?.href || '#'}
                        className="text-foreground hover-iridescent-pink dark:text-gray-300 block duration-150 text-shadow-sm"
                      >
                        <span className="capitalize">{key}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sign In button on the far right */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <PayPalDonateButton size="xs" />
                <ThemeSwitch className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-default-100" />
                {/* <UserMenu /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
