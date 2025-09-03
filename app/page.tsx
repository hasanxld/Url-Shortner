"use client"

import { useState } from "react"
import { PublicHeader } from "@/components/public-header"
import { BeautifulSidebar } from "@/components/beautiful-sidebar"
import { UrlShortener } from "@/components/url-shortener"
import { AnimatedFooter } from "@/components/animated-footer"

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader onMenuClick={() => setSidebarOpen(true)} />
      <BeautifulSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-20">
        <UrlShortener />
      </main>
      <AnimatedFooter />
    </div>
  )
}
