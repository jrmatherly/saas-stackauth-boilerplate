import { AppSidebar } from "@/components/saas/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import type { PropsWithChildren } from "react";

export default async function MarketingLayout({ children }: PropsWithChildren) {
	return (
        <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
	);
}
