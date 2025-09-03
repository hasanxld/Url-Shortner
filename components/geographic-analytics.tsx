"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Globe } from "lucide-react"

const geographicData = [
  { country: "United States", clicks: 15420, percentage: 34.2, flag: "🇺🇸" },
  { country: "United Kingdom", clicks: 8930, percentage: 19.8, flag: "🇬🇧" },
  { country: "Germany", clicks: 6750, percentage: 15.0, flag: "🇩🇪" },
  { country: "Canada", clicks: 4560, percentage: 10.1, flag: "🇨🇦" },
  { country: "France", clicks: 3240, percentage: 7.2, flag: "🇫🇷" },
  { country: "Australia", clicks: 2890, percentage: 6.4, flag: "🇦🇺" },
  { country: "Japan", clicks: 1980, percentage: 4.4, flag: "🇯🇵" },
  { country: "Others", clicks: 1330, percentage: 2.9, flag: "🌍" },
]

export function GeographicAnalytics() {
  return (
    <Card className="bg-card/50 backdrop-blur border-border/50">
      <CardHeader>
        <CardTitle className="font-playfair text-xl flex items-center space-x-2">
          <Globe className="h-5 w-5 text-primary" />
          <span>Geographic Distribution</span>
        </CardTitle>
        <p className="font-poppins text-sm text-muted-foreground">Clicks by country in the last 30 days</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {geographicData.map((item, index) => (
            <div
              key={item.country}
              className="space-y-2 animate-in slide-in-from-right-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{item.flag}</span>
                  <div>
                    <span className="font-poppins text-sm font-medium">{item.country}</span>
                    <p className="font-mono text-xs text-muted-foreground">{item.clicks.toLocaleString()} clicks</p>
                  </div>
                </div>
                <span className="font-space-grotesk text-sm font-medium">{item.percentage}%</span>
              </div>
              <Progress value={item.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
