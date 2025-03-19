import { AuroraText } from '@/components/magicui/aurora-text';
/* import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'; */
import { Button } from '@/components/ui/button';
/* import { WavyBackground } from '@/components/wavy-background'; */
import WavyBackgroundWrapper from '@/components/wavy-background-wrapper';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
// biome-ignore lint/correctness/noUnusedImports: not used directly
import React from 'react';

export default function DnaHero() {
  return (
    <>
      <WavyBackgroundWrapper
        colors={[
          '#38bdf8', // Light blue
          '#818cf8', // Indigo
          '#c084fc', // Purple
          '#e879f9', // Pink
          '#22d3ee', // Cyan
        ]}
        blur={6} // Increased blur to match the original demo's softer appearance
        speed="slow"
        waveWidth={50} // Standard width matching original code
        waveOpacity={0.05} // Low background opacity for better wave visibility
        className="text-shadow-xl" // Strong text shadow for better readability
      >
        <main className="overflow-x-hidden">
          <section>
            <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
              <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                  {/* Enhanced heading with stronger text shadow and increased size */}
                  {/* <h1 className="mt-8 max-w-2xl text-balance text-5xl text-shadow-xl font-black md:text-6xl lg:mt-16 xl:text-7xl dark:text-white"> */}
                  <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                    <AuroraText>Advocating</AuroraText> for the chronically ill
                  </h1>
                  {/* Added text shadow and stronger styling to subtitle */}
                  <div className="mt-4 text-4xl font-bold text-shadow-lg dark:text-white">
                    Making the{' '}
                    <span className="text-gradient font-black">Invisible</span>{' '}
                    Visible
                  </div>
                  {/* Added text shadow and increased size to paragraph */}
                  <p className="mt-8 max-w-2xl text-balance text-xl text-shadow-md dark:text-white">
                    We're dedicated to raising awareness, providing resources,
                    and building a community for those affected by invisible
                    illnesses.
                  </p>
                  <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row lg:justify-start">
                    <Button
                      asChild
                      size="lg"
                      className="h-14 rounded-full pl-6 pr-4 text-lg shadow-lg bg-white/80 dark:bg-black/80"
                    >
                      <Link href="#link">
                        <span className="text-nowrap font-semibold">
                          Start Building
                        </span>
                        <ChevronRight
                          className="ml-2 h-6 w-6"
                          strokeWidth={2.5}
                        />
                      </Link>
                    </Button>
                    <Button
                      key={2}
                      asChild
                      size="lg"
                      variant="ghost"
                      className="h-14 rounded-full px-6 text-lg hover:bg-white/20 dark:hover:bg-white/20 text-shadow-lg"
                    >
                      <Link href="#link">
                        <span className="text-nowrap font-semibold">
                          Request a demo
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              {/* <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <video
                muted
                autoPlay
                loop
                className="size-full -scale-x-100 object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                src="/videos/dna.mp4"
              />
            </div> */}
            </div>
          </section>
          {/* <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20" />
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20" />
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section> */}
        </main>
      </WavyBackgroundWrapper>
    </>
  );
}
