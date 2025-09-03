"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, ExternalLink, TrendingUp, Eye, Calendar } from "lucide-react"

const topLinks = [
  {
    id: 1,
    shortUrl: "https://lnk.cr/summer-sale",
    originalUrl: "https://shop.example.com/summer-sale-2024-mega-discount",
    title: "Summer Sale 2024 - Up to 70% Off",
    clicks: 15420,
    uniqueVisitors: 12340,
    conversionRate: 8.7,
    createdAt: "2024-01-15",
    trend: "+23.4%",
  },
  {
    id: 2,
    shortUrl: "https://lnk.cr/product-launch",
    originalUrl: "https://example.com/new-product-revolutionary-ai-tool",
    title: "Revolutionary AI Tool Launch",
    clicks: 12890,
    uniqueVisitors: 10230,
    conversionRate: 12.3,
    createdAt: "2024-01-12",
    trend: "+18.9%",
  },
  {
    id: 3,
    shortUrl: "https://lnk.cr/blog-post",
    originalUrl: "https://blog.example.com/how-to-increase-conversion-rates-2024",
    title: "How to Increase Conversion Rates",
    clicks: 9870,
    uniqueVisitors: 8120,
    conversionRate: 6.4,
    createdAt: "2024-01-10",
    trend: "+15.2%",
  },
  {
    id: 4,
    shortUrl: "https://lnk.cr/webinar",
    originalUrl: "https://events.example.com/marketing-automation-webinar-2024",
    title: "Marketing Automation Webinar",
    clicks: 7650,
    uniqueVisitors: 6890,
    conversionRate: 15.8,
    createdAt: "2024-01-08",
    trend: "+11.7%",
  },
  {
    id: 5,
    shortUrl: "https://lnk.cr/case-study",
    originalUrl: "https://resources.example.com/customer-success-story-enterprise",
    title: "Enterprise Customer Success Story",
    clicks: 5430,
    uniqueVisitors: 4820,
    conversionRate: 9.2,
    createdAt: "2024-01-05",
    trend: "+8.3%",
  },
]

export function TopPerformingLinks() {
  return (
    <Card className="bg-card/50 backdrop-blur border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-playfair text-xl flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Top Performing Links</span>
            </CardTitle>
            <p className="font-poppins text-sm text-muted-foreground mt-1">
              Your highest converting links in the last 30 days
            </p>
          </div>
          <Button variant="outline" size="sm" className="font-poppins bg-transparent">
            Export Report
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topLinks.map((link, index) => (
            <div
              key={link.id}
              className="p-6 bg-muted/30 rounded-lg border border-border/30 hover:bg-muted/50 transition-all duration-300 animate-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-poppins font-semibold text-lg truncate">{link.title}</h4>
                      <Badge variant="secondary" className="font-mono text-xs">
                        #{index + 1}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="font-mono text-sm text-primary truncate">{link.shortUrl}</p>
                      <p className="font-mono text-xs text-muted-foreground truncate">{link.originalUrl}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span className="font-poppins text-xs">Total Clicks</span>
                    </div>
                    <p className="font-space-grotesk text-xl font-bold">{link.clicks.toLocaleString()}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span className="font-poppins text-xs">Unique Visitors</span>
                    </div>
                    <p className="font-space-grotesk text-xl font-bold">{link.uniqueVisitors.toLocaleString()}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <TrendingUp className="h-3 w-3" />
                      <span className="font-poppins text-xs">Conversion Rate</span>
                    </div>
                    <p className="font-space-grotesk text-xl font-bold text-green-600">{link.conversionRate}%</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span className="font-poppins text-xs">Growth</span>
                    </div>
                    <p className="font-space-grotesk text-xl font-bold text-green-600">{link.trend}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
