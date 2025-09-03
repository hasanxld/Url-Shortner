"use client"

import { PublicHeader } from "@/components/public-header"
import { BeautifulSidebar } from "@/components/beautiful-sidebar"
import { AnimatedFooter } from "@/components/animated-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Zap } from "lucide-react"
import { useState } from "react"

export default function HelpPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader onMenuClick={() => setSidebarOpen(true)} />
      <BeautifulSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl font-bold gradient-text mb-4">Help Center</h1>
            <p className="font-poppins text-muted-foreground text-lg">
              Find answers to common questions and learn how to use our URL shortener
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-poppins">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Getting Started
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-inter">
                <div>
                  <h3 className="font-semibold mb-2">How to shorten a URL?</h3>
                  <p className="text-muted-foreground text-sm">
                    Simply paste your long URL into the input field and click "Shorten URL". Your shortened link will be
                    ready in seconds.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">URL Requirements</h3>
                  <p className="text-muted-foreground text-sm">
                    URLs must be valid HTTP or HTTPS links. Local URLs (localhost) cannot be shortened.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-poppins">
                  <Zap className="h-5 w-5 text-primary" />
                  Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-inter">
                <div>
                  <h3 className="font-semibold mb-2">Free Service</h3>
                  <p className="text-muted-foreground text-sm">
                    Our URL shortener is completely free to use with no registration required.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Instant Results</h3>
                  <p className="text-muted-foreground text-sm">
                    Get your shortened URLs instantly with our fast and reliable service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <AnimatedFooter />
    </div>
  )
}
