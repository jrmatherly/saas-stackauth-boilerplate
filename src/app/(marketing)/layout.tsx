import { Footer } from "@/components/marketing/shared/footer";
import { NavBar } from "@/components/marketing/shared/navbar";
import type { PropsWithChildren } from "react";

export default async function MarketingLayout({ children }: PropsWithChildren) {
	return (
		<>
			<NavBar />
			<main className="min-h-screen">{children}</main>
			<Footer />
		</>
	);
}
