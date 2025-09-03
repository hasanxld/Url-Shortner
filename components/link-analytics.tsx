"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Globe, Smartphone, Monitor, Tablet } from "lucide-react"

const deviceData = [
  { name: "Desktop", value: 45, icon: Monitor, color: "bg-primary" },
  { name: "Mobile", value: 35, icon: Smartphone, color: "bg-accent" },
  { name: "Tablet", value: 20, icon: Tablet, color: "bg-muted-foreground" },
]

const countryData = [
  { name: "United States", value: 35, flag: "🇺🇸" },
  { name: "United Kingdom", value: 25, flag: "🇬🇧" },
  { name: "Germany", value: 15, flag: "🇩🇪" },
  { name: "Canada", value: 12, flag: "🇨🇦" },
  { name: "Others", value: 13, flag: "🌍" },
]

export function LinkAnalytics() {
  return (
    <div className="space-y-6">
      {/* Device Analytics */}
      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle className="font-playfair text-lg flex items-center space-x-2">
            <Monitor className="h-5 w-5 text-primary" />
            <span>Device Analytics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deviceData.map((device, index) => (
              <div
                key={device.name}
                className="space-y-2 animate-in slide-in-from-right-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <device.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-poppins text-sm">{device.name}</span>
                  </div>
                  <span className="font-space-grotesk text-sm font-medium">{device.value}%</span>
                </div>
                <Progress value={device.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Geographic Analytics */}
      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle className="font-playfair text-lg flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Top Countries</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {countryData.map((country, index) => (
              <div
                key={country.name}
                className="flex items-center justify-between animate-in slide-in-from-right-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{country.flag}</span>
                  <span className="font-poppins text-sm">{country.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${country.value}%` }}
                    ></div>
                  </div>
                  <span className="font-space-grotesk text-sm font-medium w-8 text-right">{country.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle className="font-playfair text-lg">Today's Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-poppins text-sm text-muted-foreground">Clicks Today</span>
              <span className="font-space-grotesk font-semibold">1,247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-poppins text-sm text-muted-foreground">New Links</span>
              <span className="font-space-grotesk font-semibold">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-poppins text-sm text-muted-foreground">Top Performer</span>
              <span className="font-mono text-sm text-primary">lnk.cr/abc123</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
