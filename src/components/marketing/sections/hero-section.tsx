"use client";

import { motion } from "framer-motion";
import HeroBanner from "../hero/hero-banner";
import { TestimonialsAvatars } from "../hero/testimonials-avatars";
import { RainbowButton } from "../../ui/rainbow-button";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../../ui/animated-grid-pattern";
import HeroVideoDialog from "../../ui/hero-video-dialog";
import { AssuranceItem } from "../hero/assurance-items";

const ease = [0.16, 1, 0.3, 1];

export function HeroSection() {
	return (
		<div className="container relative pt-24 pb-20 text-center">
			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				repeatDelay={1}
				className={cn(
					"[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
					"absolute inset-x-0 top-0 h-[650px] md:h-[550px] z-0"
				)}
			/>
			<div className="relative z-10">
				<motion.div
					className="mb-4 flex justify-center"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease }}
				>
					<HeroBanner />
				</motion.div>
				<div className="mx-auto flex w-full max-w-5xl flex-col space-y-4 overflow-hidden">
					<motion.h1
						className="text-balance font-bold text-3xl lg:text-5xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease }}
					>
						{["The", "Ultimate", "SaaS", "Techstack"].map(
							(text, index) => (
								<motion.span
									key={index}
									className="inline-block px-1"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.8,
										delay: 0.3 + index * 0.1,
										ease,
									}}
								>
									{text}
								</motion.span>
							),
						)}
					</motion.h1>

					<motion.p
						className="mx-auto mt-4 max-w-3xl text-balance text-foreground/80 text-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8, ease }}
					>
						Your product is ready to go. Start selling it today. This is the best way to get your product out there and start generating revenue.
					</motion.p>
				</div>
				<motion.div
					className="mt-8 hidden flex-col items-center justify-center gap-6 text-lg md:flex md:flex-row"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.0, duration: 0.8, ease }}
				>
					<AssuranceItem text="Pay once, access forever" />
					<AssuranceItem text="Make money today" />
					<AssuranceItem text="Founders Support" />
				</motion.div>
				<motion.div
					className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8, ease }}
				>
					<RainbowButton>Get Started Now</RainbowButton>
				</motion.div>
				<motion.div
					className="mt-8 flex flex-col items-center justify-center gap-4 px-8 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.4, duration: 0.8, ease }}
				>
					<TestimonialsAvatars />
				</motion.div>

			</div>
			<motion.div
				className="mt-24 flex flex-col items-center justify-center gap-4 px-8 text-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.8, ease }}
			>

				<HeroVideoDialog
					className="dark:hidden block"
					animationStyle="from-center"
					videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
					thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
					thumbnailAlt="HeroSection Video"
				/>
				<HeroVideoDialog
					className="hidden dark:block"
					animationStyle="from-center"
					videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
					thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
					thumbnailAlt="HeroSection Video"
				/>
			</motion.div>
		</div>
	);
}
