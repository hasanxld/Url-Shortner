"use client"

import { PublicHeader } from "@/components/public-header"
import { BeautifulSidebar } from "@/components/beautiful-sidebar"
import { AnimatedFooter } from "@/components/animated-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Link2, Shield, Zap, Globe } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader onMenuClick={() => setSidebarOpen(true)} />
      <BeautifulSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl font-bold gradient-text mb-4">About Us</h1>
            <p className="font-poppins text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide a fast, reliable, and free URL shortening service to help you share links more effectively.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="glass hover-lift">
              <CardContent className="p-6 text-center">
                <Link2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-poppins text-xl font-semibold mb-2">Simple & Fast</h3>
                <p className="font-inter text-muted-foreground">
                  Shorten any URL in seconds with our streamlined interface and powerful backend.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-poppins text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="font-inter text-muted-foreground">
                  Your links are processed securely with 99.9% uptime guarantee.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-poppins text-xl font-semibold mb-2">No Registration</h3>
                <p className="font-inter text-muted-foreground">
                  Start shortening URLs immediately without creating an account.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-poppins text-xl font-semibold mb-2">Global Access</h3>
                <p className="font-inter text-muted-foreground">
                  Available worldwide with fast response times from anywhere.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass">
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">Our Mission</h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                We believe that sharing links should be simple, fast, and accessible to everyone. Our URL shortener is
                designed to provide a seamless experience without the complexity of user accounts or premium features.
                Whether you're sharing on social media, in emails, or anywhere else, we make it easy to create clean,
                professional-looking links.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <AnimatedFooter />
    </div>
  )
}
