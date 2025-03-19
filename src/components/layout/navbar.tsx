'use client';

import { PayPalDonateButton } from '@/components/paypal-donate-button';
import { ThemeSwitch } from '@/components/theme-switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <header
      className={cn(
        'bg-background fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-background/70 dark:bg-background/40 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo on the far left */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-display text-2xl">
            <div
              style={{ position: 'relative', width: '80px', height: '80px' }}
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
        </div>

        {/* Desktop Navigation centered */}
        <div className="hidden md:block mx-auto">
          <nav className="flex items-center space-x-8">
            <TooltipProvider>
              {Object.entries(menuItems).map(([key, items]) => (
                <div key={key} className="relative group">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(key)}
                    className="text-foreground hover-iridescent-pink transition-colors flex items-center gap-1 relative group font-medium text-shadow-md dark:text-iridescent-pink"
                  >
                    <span className="capitalize">{key}</span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        'transition-transform duration-200',
                        activeDropdown === key ? 'rotate-180' : ''
                      )}
                    />
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[hsl(var(--iridescent-pink))] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </button>

                  {/* Desktop Dropdown Content */}
                  <div
                    className={cn(
                      'absolute left-0 top-full mt-2 w-48 bg-white dark:bg-gray-800/90 rounded-md shadow-lg overflow-hidden transition-all duration-200 ease-in-out border border-transparent dark:border-[hsl(var(--iridescent-pink-dark)/0.3)]',
                      activeDropdown === key
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    )}
                  >
                    <div className="py-2">
                      {items.map(item => (
                        <Tooltip key={item.sectionId}>
                          <TooltipTrigger asChild>
                            <Link
                              href={item.href}
                              onClick={() => {
                                setActiveDropdown(null);
                              }}
                              className="block w-full text-left px-4 py-2 hover:bg-accent/10 text-foreground dark:text-gray-200 hover-iridescent-pink transition-colors"
                            >
                              {item.label}
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Go to {item.label}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </TooltipProvider>
          </nav>
        </div>

        {/* Sign In button on the far right */}
        <div className="hidden md:flex items-center gap-4">
          <PayPalDonateButton size="xs" />
          <ThemeSwitch className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-default-100" />
          TODO: AUTHENTICATION
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground p-2 hover-iridescent-pink transition-colors focus:outline-none dark:text-iridescent-pink"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-white/95 dark:bg-gray-900/90 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300 ease-in-out',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center space-y-6 w-full max-w-sm">
          {Object.entries(menuItems).map(([key, items]) => (
            <div key={key} className="w-full">
              <button
                type="button"
                onClick={() => toggleDropdown(key)}
                className="text-foreground dark:text-iridescent-pink hover-iridescent-pink transition-colors text-xl font-medium flex items-center justify-center gap-2 w-full text-shadow-md"
              >
                <span className="capitalize">{key}</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    'transition-transform duration-200',
                    activeDropdown === key ? 'rotate-180' : ''
                  )}
                />
              </button>

              {/* Mobile Dropdown Content */}
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300 mx-auto',
                  activeDropdown === key
                    ? 'max-h-60 opacity-100 mt-3'
                    : 'max-h-0 opacity-0'
                )}
              >
                <div className="flex flex-col space-y-2 items-center">
                  {items.map(item => (
                    <Link
                      href={item.href}
                      key={item.sectionId}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                      className="text-muted-foreground dark:text-gray-300 hover-iridescent-pink transition-colors text-base px-4 py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Sign In Button */}
          <div className="flex flex-col items-center gap-4">
            TODO: AUTHENTICATION
          </div>
          <ThemeSwitch className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-default-100 mt-2" />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
