import Link from "next/link"
import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer className="border-t bg-background py-8">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">Acme</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Acme. All rights reserved.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-medium">Product</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-medium">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}
