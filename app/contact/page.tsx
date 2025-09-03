"use client"

import { PublicHeader } from "@/components/public-header"
import { BeautifulSidebar } from "@/components/beautiful-sidebar"
import { AnimatedFooter } from "@/components/animated-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <PublicHeader onMenuClick={() => setSidebarOpen(true)} />
      <BeautifulSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 mb-6">
              <MessageCircle className="h-4 w-4" />
              <span className="font-poppins text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="font-playfair-display text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                LinkCraft
              </span>
            </h1>
            <p className="font-poppins text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions about our URL shortening service? Need technical support? We're here to help you succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 shadow-lg border border-slate-200">
              <h2 className="font-space-grotesk text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-poppins text-sm font-medium text-slate-700 mb-2 block">First Name</label>
                    <Input placeholder="John" className="font-poppins" />
                  </div>
                  <div>
                    <label className="font-poppins text-sm font-medium text-slate-700 mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="font-poppins" />
                  </div>
                </div>
                <div>
                  <label className="font-poppins text-sm font-medium text-slate-700 mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" className="font-poppins" />
                </div>
                <div>
                  <label className="font-poppins text-sm font-medium text-slate-700 mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" className="font-poppins" />
                </div>
                <div>
                  <label className="font-poppins text-sm font-medium text-slate-700 mb-2 block">Message</label>
                  <Textarea placeholder="Tell us more about your inquiry..." className="font-poppins min-h-32" />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-poppins">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 shadow-lg border border-slate-200">
                <h3 className="font-space-grotesk text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-blue-100 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-slate-900">Email</p>
                      <p className="font-jetbrains-mono text-sm text-slate-600">support@linkcraft.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-green-100 text-green-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-slate-900">Phone</p>
                      <p className="font-jetbrains-mono text-sm text-slate-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-purple-100 text-purple-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-slate-900">Address</p>
                      <p className="font-jetbrains-mono text-sm text-slate-600">
                        123 Tech Street, San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6" />
                  <h3 className="font-space-grotesk text-xl font-bold">Support Hours</h3>
                </div>
                <div className="space-y-2 font-poppins text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mt-6 p-4 bg-white/10 border border-white/20">
                  <p className="font-poppins text-sm">
                    <strong>Emergency Support:</strong> For critical issues, email us at emergency@linkcraft.com
                  </p>
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
