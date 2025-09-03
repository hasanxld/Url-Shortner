"use client"

import { PublicHeader } from "@/components/public-header"
import { BeautifulSidebar } from "@/components/beautiful-sidebar"
import { AnimatedFooter } from "@/components/animated-footer"
import { Shield, Eye, Lock, Database, Calendar } from "lucide-react"
import { useState } from "react"

export default function PrivacyPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <PublicHeader onMenuClick={() => setSidebarOpen(true)} />
      <BeautifulSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 mb-6">
              <Shield className="h-4 w-4" />
              <span className="font-poppins text-sm font-medium">Privacy & Security</span>
            </div>
            <h1 className="font-playfair-display text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Policy</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-slate-600 font-poppins">
              <Calendar className="h-4 w-4" />
              <span>Last updated: March 3, 2025</span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white shadow-lg border border-slate-200 p-8">
            <div className="prose prose-slate max-w-none">
              <div className="bg-green-50 border border-green-200 p-4 mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="h-5 w-5 text-green-600" />
                  <h3 className="font-space-grotesk text-lg font-bold text-green-800 m-0">Your Privacy Matters</h3>
                </div>
                <p className="font-poppins text-sm text-green-700 m-0">
                  LinkCraft is committed to protecting your privacy. We collect minimal data and never sell your
                  information.
                </p>
              </div>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">Information We Collect</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-blue-600" />
                    <h4 className="font-poppins font-semibold text-blue-800">Automatically Collected</h4>
                  </div>
                  <ul className="font-poppins text-sm text-blue-700 list-disc pl-4">
                    <li>IP address (anonymized)</li>
                    <li>Browser type and version</li>
                    <li>Click timestamps</li>
                    <li>Referrer information</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="h-4 w-4 text-purple-600" />
                    <h4 className="font-poppins font-semibold text-purple-800">User Provided</h4>
                  </div>
                  <ul className="font-poppins text-sm text-purple-700 list-disc pl-4">
                    <li>Original URLs you shorten</li>
                    <li>Custom aliases (if provided)</li>
                    <li>Contact form submissions</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="font-poppins text-slate-700 mb-4">We use the collected information solely to:</p>
              <ul className="font-poppins text-slate-700 mb-4 list-disc pl-6">
                <li>Provide URL shortening services</li>
                <li>Generate anonymous analytics and statistics</li>
                <li>Prevent abuse and maintain service security</li>
                <li>Improve our service performance</li>
                <li>Respond to support inquiries</li>
              </ul>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">Data Sharing</h2>
              <p className="font-poppins text-slate-700 mb-4">
                <strong>We do not sell, trade, or share your personal information with third parties.</strong> We may
                share anonymized, aggregated statistics that cannot be used to identify individual users.
              </p>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">Data Security</h2>
              <p className="font-poppins text-slate-700 mb-4">
                We implement industry-standard security measures including:
              </p>
              <ul className="font-poppins text-slate-700 mb-4 list-disc pl-6">
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure database storage with encryption at rest</li>
                <li>Regular security audits and updates</li>
                <li>Limited access controls for our systems</li>
              </ul>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">Data Retention</h2>
              <p className="font-poppins text-slate-700 mb-4">
                We retain shortened URL data indefinitely to ensure links continue working. Analytics data is aggregated
                and anonymized after 90 days. You can request deletion of specific URLs by contacting us.
              </p>

              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mt-8 mb-4">Your Rights</h2>
              <p className="font-poppins text-slate-700 mb-4">You have the right to:</p>
              <ul className="font-poppins text-slate-700 mb-4 list-disc pl-6">
                <li>Request information about data we have collected</li>
                <li>Request deletion of your shortened URLs</li>
                <li>Opt-out of analytics tracking</li>
                <li>Contact us with privacy concerns</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 p-6 mt-8">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="font-space-grotesk text-lg font-bold text-blue-800 m-0">Contact Us</h3>
                </div>
                <p className="font-poppins text-sm text-blue-700 m-0">
                  For privacy-related questions or requests, email us at privacy@linkcraft.com
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
