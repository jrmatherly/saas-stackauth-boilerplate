import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Marquee from "../../ui/marquee";
import { SectionTitle } from "@/components/marketing/shared/section-title";

const Highlight = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<span
			className={cn(
				"bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200",
				className,
			)}
		>
			{children}
		</span>
	);
};

export interface TestimonialCardProps {
	name: string;
	role: string;
	img?: string;
	description: React.ReactNode;
	className?: string;
}

export const TestimonialCard = ({
	description,
	name,
	img,
	role,
	className,
}: TestimonialCardProps) => (
	<Card
		className={cn(
			"mb-4 flex max-w-sm cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
			// light styles
			" border border-primary/60 dark:border-primary/20",
			className,
		)}
	>
		<div className="select-none font-normal text-neutral-700 text-sm dark:text-neutral-200">
			{description}
		</div>

		<div className="flex w-full select-none items-center justify-start gap-5">
			{img && (
				<Image
					src={img}
					className="h-10 w-10 rounded-full ring-1 ring-orange-300 ring-offset-4"
					alt={"Profile Image"}
					width={128}
					height={128}
				/>
			)}

			<div>
				<p className="font-medium text-neutral-500 dark:text-neutral-200">
					{name}
				</p>
				<p className="font-normal text-neutral-400 text-xs dark:text-neutral-200">
					{role}
				</p>
			</div>
		</div>
	</Card>
);

const testimonials = [
	{
		name: "Alex Johnson",
		role: "Senior Developer at TechCorp",
		img: "https://avatar.vercel.sh/alex",
		description: (
			<p>
				Lorem ipsum dolor sit amet.{" "}
				<Highlight>
					Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua
				</Highlight>
				, ut enim ad minim veniam.
			</p>
		),
	},
	{
		name: "Sarah Smith",
		role: "CTO at StartupX",
		img: "https://avatar.vercel.sh/sarah",
		description: (
			<p>
				Ut enim ad minim veniam,{" "}
				<Highlight>
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat
				</Highlight>{" "}
				duis aute irure dolor.
			</p>
		),
	},
	{
		name: "Michael Chen",
		role: "Product Lead @TechStart",
		img: "https://avatar.vercel.sh/michael",
		description: (
			<p>
				Duis aute irure dolor in reprehenderit.{" "}
				<Highlight>
					In voluptate velit esse cillum dolore eu fugiat nulla pariatur
				</Highlight>{" "}
				excepteur sint occaecat cupidatat.
			</p>
		),
	},
	{
		name: "Emma Wilson",
		role: "Frontend Developer @WebCo",
		img: "https://avatar.vercel.sh/emma",
		description: (
			<p>
				<Highlight>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia
				</Highlight>{" "}
				deserunt mollit anim id est laborum.
			</p>
		),
	},
	{
		name: "David Lee",
		role: "Software Architect @CodeCo",
		img: "https://avatar.vercel.sh/david",
		description: (
			<p>
				Sed ut perspiciatis unde omnis.{" "}
				<Highlight>
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
				</Highlight>
				aut fugit, sed quia consequuntur.
			</p>
		),
	},
	{
		name: "Lisa Brown",
		role: "Tech Lead @DevInc",
		img: "https://avatar.vercel.sh/lisa",
		description: (
			<p>
				At vero eos et accusamus.{" "}
				<Highlight>
					Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
				</Highlight>
				deleniti atque corrupti.
			</p>
		),
	},
	{
		name: "Rachel Green",
		role: "UX Designer @DesignHub",
		img: "https://avatar.vercel.sh/rachel",
		description: (
			<p>
				Neque porro quisquam est.{" "}
				<Highlight>
					Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
				</Highlight>{" "}
				sed quia non numquam eius modi.
			</p>
		),
	},
	{
		name: "James Wilson",
		role: "DevOps Engineer @CloudTech",
		img: "https://avatar.vercel.sh/james",
		description: (
			<p>
				Temporibus autem quibusdam.{" "}
				<Highlight>
					Et aut officiis debitis aut rerum necessitatibus saepe eveniet
				</Highlight>{" "}
				ut et voluptates repudiandae sint.
			</p>
		),
	},
	{
		name: "Sofia Rodriguez",
		role: "Mobile Dev @AppWorks",
		img: "https://avatar.vercel.sh/sofia",
		description: (
			<p>
				Nam libero tempore.{" "}
				<Highlight>
					Cum soluta nobis est eligendi optio cumque nihil impedit quo minus
				</Highlight>{" "}
				id quod maxime placeat facere.
			</p>
		),
	},
	{
		name: "Ryan Park",
		role: "Backend Lead @ServerPro",
		img: "https://avatar.vercel.sh/ryan",
		description: (
			<p>
				Itaque earum rerum.{" "}
				<Highlight>
					Hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
				</Highlight>{" "}
				alias consequatur aut perferendis.
			</p>
		),
	},
];
const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

export function Testimonials({ className }: { className?: string }) {
	return (
		<section className={cn("container py-16 lg:py-24", className)} id="faq">
			<SectionTitle name="Testimonials" title="What our customers are saying" />

			<div className="relative flex h-[400px] w-full flex-col mt-12 items-center justify-center overflow-hidden ">
				<Marquee pauseOnHover className="hidden [--duration:40s] md:flex">
					{firstRow.map((review) => (
						<TestimonialCard key={review.name} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="hidden [--duration:40s] md:flex">
					{secondRow.map((review) => (
						<TestimonialCard key={review.name} {...review} />
					))}
				</Marquee>
				<div
					className={cn(
						"flex w-full snap-x snap-mandatory flex-row gap-6 overflow-x-auto py-14 md:hidden",

						// no scrollbar
						"[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					)}
				>
					{/* Empty placeholder  */}
					<div className="size-72 shrink-0 md:h-60 md:min-w-96" />
					{testimonials.map((card, idx) => (
						<TestimonialCard
							{...card}
							className="flex w-72 shrink-0 cursor-pointer snap-center snap-always flex-col justify-between rounded-xl p-4 shadow-black/[0.1] shadow-xl lg:min-w-96"
							key={idx}
						/>
					))}
					
					{/* Empty placeholder  */}
					<div className="size-72 shrink-0 md:h-60 md:min-w-96" />
				</div>

				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background md:w-1/3" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background md:w-1/3" />
			</div>
		</section>
	);
}
