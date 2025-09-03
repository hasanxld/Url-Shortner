"use client"

import { PublicHeader } from "@/components/public-header"
import { BeautifulSidebar } from "@/components/beautiful-sidebar"
import { AnimatedFooter } from "@/components/animated-footer"
import { FileText, Calendar, Shield, AlertTriangle } from "lucide-react"
import { useState } from "react"

export default function TermsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <PublicHeader onMenuClick={() => setSidebarOpen(true)} />
      <BeautifulSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 mb-6">
              <FileText className="h-4 w-4" />
              <span className="font-poppins text-sm font-medium">Legal Information</span>
            </div>
            <h1 className="font-playfair-display text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Service
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-slate-600 font-poppins">
              <Calendar className="h-4 w-4" />
              <span>Last updated: March 3, 2025</span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white shadow-lg border border-slate-200 p-8">
            <div className="prose prose-slate max-w-none">
              <div className="bg-yellow-50 border border-yellow-200 p-4 mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-space-grotesk text-lg font-bold text-yellow-800 m-0">Important Notice</h3>
                </div>
                <p className="font-poppins text-sm text-yellow-700 m-0">
                  By using LinkCraft's URL shortening service, you agree to these terms. Please read them carefully.
                </p>
              </div>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="font-poppins text-slate-700 mb-4">
                By accessing and using LinkCraft ("the Service"), you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">2. Use License</h2>
              <p className="font-poppins text-slate-700 mb-4">
                Permission is granted to temporarily use LinkCraft for personal and commercial URL shortening purposes.
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="font-poppins text-slate-700 mb-4 list-disc pl-6">
                <li>Use the service for illegal activities</li>
                <li>Attempt to reverse engineer or hack the service</li>
                <li>Create shortened URLs that lead to malicious content</li>
                <li>Spam or abuse the service</li>
              </ul>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">
                3. Service Availability
              </h2>
              <p className="font-poppins text-slate-700 mb-4">
                LinkCraft strives to maintain 99.9% uptime but does not guarantee uninterrupted service. We reserve the
                right to modify or discontinue the service at any time.
              </p>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">
                4. Content Responsibility
              </h2>
              <p className="font-poppins text-slate-700 mb-4">
                Users are solely responsible for the content of URLs they shorten. LinkCraft does not monitor or control
                the content of destination URLs and is not responsible for their content.
              </p>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">5. Privacy and Data</h2>
              <p className="font-poppins text-slate-700 mb-4">
                We collect minimal data necessary to provide the service. For detailed information about data collection
                and usage, please refer to our Privacy Policy.
              </p>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="font-poppins text-slate-700 mb-4">
                LinkCraft shall not be liable for any damages arising from the use or inability to use the service,
                including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">7. Changes to Terms</h2>
              <p className="font-poppins text-slate-700 mb-4">
                LinkCraft reserves the right to revise these terms at any time. Users will be notified of significant
                changes via the website.
              </p>

              <div className="bg-blue-50 border border-blue-200 p-6 mt-8">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="font-space-grotesk text-lg font-bold text-blue-800 m-0">Contact Information</h3>
                </div>
                <p className="font-poppins text-sm text-blue-700 m-0">
                  If you have any questions about these Terms of Service, please contact us at legal@linkcraft.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AnimatedFooter />
    </div>
  )
}
