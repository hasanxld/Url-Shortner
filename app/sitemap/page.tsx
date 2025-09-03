"use client"

import { PublicHeader } from "@/components/public-header"
import { BeautifulSidebar } from "@/components/beautiful-sidebar"
import { AnimatedFooter } from "@/components/animated-footer"
import { Sigma as Sitemap, Link2, HelpCircle, Info, Mail, FileText, Shield } from "lucide-react"
import { useState } from "react"

export default function SitemapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <PublicHeader onMenuClick={() => setSidebarOpen(true)} />
      <BeautifulSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 mb-6">
              <Sitemap className="h-4 w-4" />
              <span className="font-poppins text-sm font-medium">Site Navigation</span>
            </div>
            <h1 className="font-playfair-display text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Site{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Map</span>
            </h1>
            <p className="font-poppins text-lg text-slate-600 max-w-2xl mx-auto">
              Navigate through all pages and sections of LinkCraft. Find exactly what you're looking for.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white shadow-lg border border-slate-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Pages */}
              <div>
                <h2 className="font-space-grotesk text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Link2 className="h-5 w-5 text-blue-600" />
                  Main Pages
                </h2>
                <div className="space-y-4">
                  <a href="/" className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center bg-blue-100 text-blue-600 group-hover:bg-blue-200">
                      <Link2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-slate-900">Homepage</p>
                      <p className="font-jetbrains-mono text-xs text-slate-600">
                        URL shortening tool and main features
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Information Pages */}
              <div>
                <h2 className="font-space-grotesk text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Info className="h-5 w-5 text-green-600" />
                  Information
                </h2>
                <div className="space-y-4">
                  <a href="/help" className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center bg-blue-100 text-blue-600 group-hover:bg-blue-200">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-slate-900">Help Center</p>
                      <p className="font-jetbrains-mono text-xs text-slate-600">FAQs and support documentation</p>
                    </div>
                  </a>
                  <a href="/about" className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center bg-green-100 text-green-600 group-hover:bg-green-200">
                      <Info className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-slate-900">About Us</p>
                      <p className="font-jetbrains-mono text-xs text-slate-600">
                        Learn about LinkCraft and our mission
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact & Support */}
              <div>
                <h2 className="font-space-grotesk text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-purple-600" />
                  Contact & Support
                </h2>
                <div className="space-y-4">
                  <a href="/contact" className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center bg-purple-100 text-purple-600 group-hover:bg-purple-200">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-slate-900">Contact Us</p>
                      <p className="font-jetbrains-mono text-xs text-slate-600">Get in touch with our support team</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Legal Pages */}
              <div>
                <h2 className="font-space-grotesk text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  Legal
                </h2>
                <div className="space-y-4">
                  <a href="/terms" className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-slate-900">Terms of Service</p>
                      <p className="font-jetbrains-mono text-xs text-slate-600">Legal terms and conditions</p>
                    </div>
                  </a>
                  <a href="/privacy" className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center bg-red-100 text-red-600 group-hover:bg-red-200">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-slate-900">Privacy Policy</p>
                      <p className="font-jetbrains-mono text-xs text-slate-600">How we handle your data</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="font-space-grotesk text-lg font-bold text-slate-900 mb-6">Quick Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 border border-blue-200">
                  <p className="font-space-grotesk text-2xl font-bold text-blue-600">6</p>
                  <p className="font-poppins text-sm text-blue-700">Total Pages</p>
                </div>
                <div className="text-center p-4 bg-green-50 border border-green-200">
                  <p className="font-space-grotesk text-2xl font-bold text-green-600">2.5M+</p>
                  <p className="font-poppins text-sm text-green-700">URLs Shortened</p>
                </div>
                <div className="text-center p-4 bg-purple-50 border border-purple-200">
                  <p className="font-space-grotesk text-2xl font-bold text-purple-600">45M+</p>
                  <p className="font-poppins text-sm text-purple-700">Total Clicks</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 border border-yellow-200">
                  <p className="font-space-grotesk text-2xl font-bold text-yellow-600">99.9%</p>
                  <p className="font-poppins text-sm text-yellow-700">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AnimatedFooter />
    </div>
  )
}
