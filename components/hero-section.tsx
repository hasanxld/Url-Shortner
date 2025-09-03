"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, BarChart3, Shield, Globe } from "lucide-react"
import { UrlShortener } from "./url-shortener"
import { AnimatedBackground } from "./animated-background"
import { ScrollAnimation } from "./scroll-animations"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation animation="fade-in">
          <div className="text-center space-y-8 mb-16">
            {/* Badge */}
            <ScrollAnimation animation="scale-in" delay={200}>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 animate-pulse-glow hover-lift">
                <Zap className="h-4 w-4 animate-glow-pulse" />
                <span className="font-poppins text-sm font-medium">Advanced URL Shortening Platform</span>
              </div>
            </ScrollAnimation>

            {/* Main Heading */}
            <ScrollAnimation animation="slide-left" delay={400}>
              <div className="space-y-4">
                <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
                  Transform Your
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient gradient-text">
                    {" "}
                    Long URLs{" "}
                  </span>
                  Into Powerful Links
                </h1>
                <p className="font-poppins text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                  Create short, memorable links with advanced analytics, custom domains, and enterprise-grade security.
                  Perfect for marketers, developers, and businesses.
                </p>
              </div>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <ScrollAnimation animation="slide-right" delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="font-poppins text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 animate-pulse-glow hover-lift group"
                >
                  Start Shortening Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 animate-wave" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-poppins text-lg px-8 py-6 border-border/50 hover:bg-muted/50 bg-transparent glass hover-glow"
                >
                  View Live Demo
                </Button>
              </div>
            </ScrollAnimation>

            {/* Stats */}
            <ScrollAnimation animation="fade-in" delay={800}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/20">
                {[
                  { value: "10M+", label: "Links Created" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "150+", label: "Countries" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <ScrollAnimation key={stat.label} animation="scale-in" delay={1000 + index * 100}>
                    <div className="text-center space-y-2 hover-scale">
                      <div className="font-space-grotesk text-2xl sm:text-3xl font-bold text-primary animate-heartbeat">
                        {stat.value}
                      </div>
                      <div className="font-poppins text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        {/* URL Shortener Component */}
        <ScrollAnimation animation="slide-up" delay={1200}>
          <div className="mb-16 hover-lift">
            <UrlShortener />
          </div>
        </ScrollAnimation>

        {/* Features Preview */}
        <ScrollAnimation animation="fade-in" delay={1400}>
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            {[
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Track clicks, geographic data, referrers, and device information with real-time insights.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SSL encryption, malware protection, and compliance with industry security standards.",
              },
              {
                icon: Globe,
                title: "Custom Domains",
                description: "Use your own domain for branded short links that build trust and recognition.",
              },
            ].map((feature, index) => (
              <ScrollAnimation key={feature.title} animation="rotate-in" delay={1600 + index * 200}>
                <div className="text-center space-y-4 group hover-lift hover-glow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-300 animate-bounce-in">
                    <feature.icon className="h-8 w-8 text-primary animate-glow-pulse" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold neon-glow">{feature.title}</h3>
                  <p className="font-poppins text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
