"use client"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 animate-pulse-glow opacity-20"></div>
            </div>
            <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LinkCraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#analytics"
              className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Analytics
            </Link>
            <Link
              href="#api"
              className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              API Docs
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="font-poppins bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 animate-pulse-glow">
              Start Shortening
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
