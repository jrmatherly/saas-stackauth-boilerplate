import { LatestPost } from "@/components/saas/post";
import { api } from "@/trpc/server";
import { stackServerApp } from "@/stack";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

export default async function Home() {
  await stackServerApp.getUser({ or: "redirect" }); // prevent unauthenticated users from accessing the page

  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <>
    <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                   <div className="flex flex-col items-center gap-2">
             <p className="text-2xl text-white">
               {hello ? hello.greeting : "Loading tRPC query..."}
             </p>
           </div>

          <LatestPost />
         </div>
          </div>
          </>
    // <HydrateClient>
    //   <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    //     <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
    //       <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
    //         Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
    //       </h1>
    //       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
    //         <Link
    //           className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
    //           href="https://create.t3.gg/en/usage/first-steps"
    //           target="_blank"
    //         >
    //           <h3 className="text-2xl font-bold">First Steps →</h3>
    //           <div className="text-lg">
    //             Just the basics - Everything you need to know to set up your
    //             database and authentication.
    //           </div>
    //         </Link>
    //         <Link
    //           className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
    //           href="https://create.t3.gg/en/introduction"
    //           target="_blank"
    //         >
    //           <h3 className="text-2xl font-bold">Documentation →</h3>
    //           <div className="text-lg">
    //             Learn more about Create T3 App, the libraries it uses, and how
    //             to deploy it.
    //           </div>
    //         </Link>
    //       </div>
    //       <div className="flex flex-col items-center gap-2">
    //         <p className="text-2xl text-white">
    //           {hello ? hello.greeting : "Loading tRPC query..."}
    //         </p>
    //       </div>

    //       <LatestPost />
    //     </div>
    //   </main>
    // </HydrateClient>
  );
}
