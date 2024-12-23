<h1 align="center">
  <br>
  SaaS Boilerplate
  <br>
</h1>

<h4 align="center">A modern, type-safe SaaS boilerplate built with Next.js 15, tRPC, and Prisma.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#project-structure">Project Structure</a>
</p>

<p align="center">
  <i>Looking for a mobile app boilerplate? Check out <a href="https://native.express?ref=saas-boilerplate">NativeExpress</a> - The ultimate React Native & Expo boilerplate!</i>
</p>

## Key Features

* Full-stack type safety with TypeScript and tRPC
* Modern file-based routing with Next.js 15 App Router
* Beautiful UI components from ShadcN and MagicUI
* Secure database management with Prisma and PostgreSQL
* Real-time analytics with PostHog
* Responsive design with TailwindCSS
* Dark/Light mode support
* End-to-end type safety from database to frontend
* Production-ready authentication system
* Optimized data fetching with React Query

## Tech Stack

* **Framework**: Next.js 15 with App Router
* **Language**: TypeScript
* **API**: tRPC for end-to-end type-safe APIs
* **Database**: PostgreSQL with Prisma ORM
* **UI Components**: ShadcN UI & MagicUI
* **Styling**: TailwindCSS
* **Analytics**: PostHog
* **Data Fetching**: React Query (through tRPC)
* **Validation**: Zod

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/robinsadeghpour/saas-boilerplate.git
   cd saas-boilerplate
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Copy the environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the PostgreSQL database:
   ```bash
   ./start-database.sh
   ```

5. Run database migrations:
   ```bash
   pnpm prisma migrate dev
   ```

6. Start the development server:
   ```bash
   pnpm dev
   ```

## Project Structure

```
src/
├── app/          # Next.js App Router pages and layouts
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Core utilities and services
├── provider/     # Context providers and wrappers
├── server/       # Server-side logic
├── styles/       # Global styles and Tailwind config
├── trpc/         # tRPC router and procedures
└── types/        # TypeScript types and interfaces
```

## Development Guidelines

* Use TypeScript for all files except configurations
* Follow functional component patterns with hooks
* Keep components focused and small
* Use Tailwind for styling with consistent design tokens
* Follow mobile-first responsive design
* Implement proper error handling with tRPC
* Use React Query features through tRPC for data management

For more detailed guidelines, check the `cursorrules` file in the project root.

## Related Projects

🚀 **[NativeExpress](https://native.express?ref=saas-boilerplate)** - The ultimate React Native & Expo boilerplate with all the features you need to build production-ready mobile apps.

---

<p align="center">
  <a href="https://x.com/robin_faraj?ref=saas-boilerplate">Follow on X</a> •
  <a href="https://www.youtube.com/@robinfaraj?sub_confirmation=1">Subscribe on YouTube</a>
</p>

> This project is maintained by [Robin Sadeghpour](https://x.com/robin_faraj?ref=saas-boilerplate)
