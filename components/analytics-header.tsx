"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"

export function AnalyticsHeader() {
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
              href="/"
              className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#global-stats"
              className="font-poppins text-sm font-medium text-primary border-b-2 border-primary pb-1"
            >
              Global Analytics
            </Link>
            <Link
              href="#features"
              className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#api"
              className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              API
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search public analytics..."
                className="pl-10 w-64 bg-muted/50 border-border/50 focus:border-primary/50"
              />
            </div>

            <Button className="font-poppins bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Stats
            </Button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
