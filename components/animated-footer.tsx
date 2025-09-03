"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Twitter, Github, Linkedin, Mail, Heart } from "lucide-react"
import { ScrollAnimation } from "./scroll-animations"

export function AnimatedFooter() {
  const [email, setEmail] = useState("")

  const footerLinks = {
    Product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Analytics", href: "/analytics" },
      { name: "API", href: "/api" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Status", href: "/status" },
      { name: "Changelog", href: "/changelog" },
    ],
    Legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "Cookies", href: "/cookies" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@linkcraft.com", label: "Email" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-muted/50 to-background border-t border-border/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <ScrollAnimation animation="slide-left" className="lg:col-span-4">
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <Zap className="h-10 w-10 text-primary transition-transform group-hover:scale-110 animate-glow-pulse" />
                  <div className="absolute inset-0 animate-pulse-glow rounded-full opacity-20"></div>
                </div>
                <span className="font-playfair text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  LinkCraft
                </span>
              </Link>

              <p className="font-poppins text-muted-foreground max-w-md">
                The most advanced URL shortening platform for modern businesses. Create, track, and optimize your links
                with powerful analytics and enterprise-grade security.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-poppins font-semibold">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary/50 glass"
                  />
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 animate-pulse-glow">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <ScrollAnimation key={social.label} animation="bounce-in" delay={index * 100}>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="bg-transparent border-border/50 hover:bg-primary/10 hover:border-primary/50 hover-glow"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <ScrollAnimation
                key={category}
                animation="slide-right"
                delay={200 + categoryIndex * 100}
                className="space-y-4"
              >
                <h4 className="font-poppins font-semibold text-foreground">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <ScrollAnimation key={link.name} animation="fade-in" delay={400 + linkIndex * 50}>
                      <li>
                        <Link
                          href={link.href}
                          className="font-poppins text-sm text-muted-foreground hover:text-primary transition-colors hover-scale inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    </ScrollAnimation>
                  ))}
                </ul>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <ScrollAnimation animation="slide-up" delay={800}>
          <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="font-poppins">© 2024 LinkCraft. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-heartbeat" />
              <span className="font-poppins">for the web.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="font-poppins text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-poppins text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span className="font-poppins text-muted-foreground">v2.1.0</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}
