"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Link2, HelpCircle, Info, Mail, FileText, Shield, Sigma as Sitemap } from "lucide-react"

interface BeautifulSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function BeautifulSidebar({ isOpen, onClose }: BeautifulSidebarProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <Link2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-space-grotesk text-lg font-bold text-white">LinkCraft</h2>
              <p className="font-poppins text-xs text-slate-400">Advanced URL Shortener</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-slate-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="p-6 border-b border-slate-700">
          <h3 className="font-poppins text-sm font-semibold text-slate-300 mb-4">Public Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-3 border border-slate-700">
              <div className="flex items-center gap-2 mb-1">
                <Link2 className="h-4 w-4 text-blue-400" />
                <span className="font-jetbrains-mono text-xs text-slate-400">Links</span>
              </div>
              <p className="font-space-grotesk text-lg font-bold text-white">2.5M+</p>
            </div>
            <div className="bg-slate-800 p-3 border border-slate-700">
              <div className="flex items-center gap-2 mb-1">
                <Link2 className="h-4 w-4 text-green-400" />
                <span className="font-jetbrains-mono text-xs text-slate-400">Clicks</span>
              </div>
              <p className="font-space-grotesk text-lg font-bold text-white">45M+</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-b border-slate-700">
          <h3 className="font-poppins text-sm font-semibold text-slate-300 mb-4">Pages</h3>
          <nav className="space-y-2">
            <a
              href="/help"
              className="flex items-center gap-3 p-3 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors group"
            >
              <HelpCircle className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
              <span className="font-poppins text-sm">Help</span>
            </a>
            <a
              href="/about"
              className="flex items-center gap-3 p-3 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors group"
            >
              <Info className="h-5 w-5 text-green-400 group-hover:text-green-300" />
              <span className="font-poppins text-sm">About</span>
            </a>
            <a
              href="/contact"
              className="flex items-center gap-3 p-3 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors group"
            >
              <Mail className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
              <span className="font-poppins text-sm">Contact</span>
            </a>
            <a
              href="/terms"
              className="flex items-center gap-3 p-3 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors group"
            >
              <FileText className="h-5 w-5 text-yellow-400 group-hover:text-yellow-300" />
              <span className="font-poppins text-sm">Terms</span>
            </a>
            <a
              href="/privacy"
              className="flex items-center gap-3 p-3 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors group"
            >
              <Shield className="h-5 w-5 text-red-400 group-hover:text-red-300" />
              <span className="font-poppins text-sm">Privacy</span>
            </a>
            <a
              href="/sitemap"
              className="flex items-center gap-3 p-3 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors group"
            >
              <Sitemap className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300" />
              <span className="font-poppins text-sm">Sitemap</span>
            </a>
          </nav>
        </div>

        {/* Features Highlight */}
        <div className="p-6 border-b border-slate-700">
          <h3 className="font-poppins text-sm font-semibold text-slate-300 mb-4">Why Choose LinkCraft?</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-blue-500/20 text-blue-400">
                <Link2 className="h-4 w-4" />
              </div>
              <div>
                <p className="font-poppins text-sm text-white">Lightning Fast</p>
                <p className="font-jetbrains-mono text-xs text-slate-400">Instant URL shortening</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-green-500/20 text-green-400">
                <Link2 className="h-4 w-4" />
              </div>
              <div>
                <p className="font-poppins text-sm text-white">Real-time Analytics</p>
                <p className="font-jetbrains-mono text-xs text-slate-400">Track every click</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-purple-500/20 text-purple-400">
                <Link2 className="h-4 w-4" />
              </div>
              <div>
                <p className="font-poppins text-sm text-white">Global Access</p>
                <p className="font-jetbrains-mono text-xs text-slate-400">No registration required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Link2 className="h-4 w-4 text-yellow-400" />
              <span className="font-poppins text-sm font-semibold text-white">Free Forever</span>
            </div>
            <p className="font-jetbrains-mono text-xs text-slate-400 mb-3">
              No limits, no registration, completely free URL shortening service.
            </p>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-poppins text-sm">
              Start Shortening URLs
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
