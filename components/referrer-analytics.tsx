"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ExternalLink, Search, Mail, MessageCircle } from "lucide-react"

const referrerData = [
  { source: "Direct Traffic", clicks: 18420, percentage: 41.2, icon: ExternalLink, color: "text-primary" },
  { source: "Google Search", clicks: 12340, percentage: 27.6, icon: Search, color: "text-blue-600" },
  { source: "Social Media", clicks: 8930, percentage: 20.0, icon: MessageCircle, color: "text-purple-600" },
  { source: "Email Campaigns", clicks: 3240, percentage: 7.2, icon: Mail, color: "text-green-600" },
  { source: "Other Referrers", clicks: 1820, percentage: 4.0, icon: ExternalLink, color: "text-muted-foreground" },
]

export function ReferrerAnalytics() {
  return (
    <Card className="bg-card/50 backdrop-blur border-border/50">
      <CardHeader>
        <CardTitle className="font-playfair text-xl flex items-center space-x-2">
          <ExternalLink className="h-5 w-5 text-primary" />
          <span>Traffic Sources</span>
        </CardTitle>
        <p className="font-poppins text-sm text-muted-foreground">Where your clicks are coming from</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {referrerData.map((referrer, index) => (
            <div
              key={referrer.source}
              className="space-y-2 animate-in slide-in-from-left-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <referrer.icon className={`h-4 w-4 ${referrer.color}`} />
                  <div>
                    <span className="font-poppins text-sm font-medium">{referrer.source}</span>
                    <p className="font-mono text-xs text-muted-foreground">{referrer.clicks.toLocaleString()} clicks</p>
                  </div>
                </div>
                <span className="font-space-grotesk text-sm font-medium">{referrer.percentage}%</span>
              </div>
              <Progress value={referrer.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
