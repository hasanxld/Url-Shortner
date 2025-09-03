"use client"
import { Button } from "@/components/ui/button"
import { Menu, Link2 } from "lucide-react"

interface PublicHeaderProps {
  onMenuClick: () => void
}

export function PublicHeader({ onMenuClick }: PublicHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground">
              <Link2 className="h-4 w-4" />
            </div>
            <span className="font-space-grotesk text-xl font-bold">LinkCraft</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/help" className="font-poppins text-sm font-medium hover:text-primary transition-colors">
            Help
          </a>
          <a href="/about" className="font-poppins text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="/contact" className="font-poppins text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <a href="/terms" className="font-poppins text-sm font-medium hover:text-primary transition-colors">
            Terms
          </a>
          <a href="/privacy" className="font-poppins text-sm font-medium hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="/sitemap" className="font-poppins text-sm font-medium hover:text-primary transition-colors">
            Sitemap
          </a>
        </nav>
      </div>
    </header>
  )
}
