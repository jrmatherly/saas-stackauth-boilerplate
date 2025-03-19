import env from '@/config/env';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: env.NEXT_PUBLIC_APP_NAME,
  description: env.NEXT_PUBLIC_APP_DESCRIPTION,
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Docs',
      href: '/docs',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
  ],
  links: {
    facebook: 'https://www.facebook.com/spoons-of-salt',
    twitter: 'https://twitter.com/spoons_of_salt',
    instagram: 'https://www.instagram.com/spoons_of_salt',
  },
};
