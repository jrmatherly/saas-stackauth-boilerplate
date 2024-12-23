"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useUser } from "@stackframe/stack"

const menuItems = [
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
]

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const user = useUser();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex justify-between h-16 items-center">
          {/* Logo - Left */}
          <div className="flex sm:w-1/3">
            <Link href="/public" className="flex items-center space-x-2">
              <span className="font-bold">Acme</span>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <nav className="hidden sm:w-1/3 justify-center items-center space-x-6 sm:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Right */}
          <div className="flex sm:w-1/3 justify-end items-center space-x-4">
            {user ? (
              <Button asChild className="hidden sm:flex">
                <Link href="/app">Continue</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild className="hidden sm:flex">
                  <Link href="/handler/signin">Sign in</Link>
                </Button>
                <Button asChild className="hidden sm:flex">
                  <Link href="/handler/signup">Sign up</Link>
                </Button>
              </>
            )}

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                
                <SheetTitle className="hidden">Menu</SheetTitle>
                <div className="flex h-full flex-col justify-between py-6">
                  {/* Top section with menu items */}
                  <div className="flex flex-col space-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-sm font-medium text-muted-foreground hover:text-foreground",
                          pathname === item.href && "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Bottom section with auth buttons */}
                  <div className="flex flex-col space-y-2">
                    {user ? (
                      <Button asChild>
                        <Link href="/app">Continue</Link>
                      </Button>
                    ) : (
                      <>
                        <Button variant="ghost" asChild>
                          <Link href="/handler/signin">Sign in</Link>
                        </Button>
                        <Button asChild>
                          <Link href="/handler/signup">Sign up</Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}
