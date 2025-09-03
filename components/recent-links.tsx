"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, ExternalLink, MoreHorizontal, TrendingUp, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const recentLinks = [
  {
    id: 1,
    shortUrl: "https://lnk.cr/abc123",
    originalUrl: "https://example.com/very-long-url-that-needs-shortening",
    title: "Product Launch Page",
    clicks: 1247,
    createdAt: "2 hours ago",
    status: "active",
  },
  {
    id: 2,
    shortUrl: "https://lnk.cr/def456",
    originalUrl: "https://blog.example.com/how-to-increase-conversion-rates",
    title: "Blog Post - Conversion Tips",
    clicks: 892,
    createdAt: "1 day ago",
    status: "active",
  },
  {
    id: 3,
    shortUrl: "https://lnk.cr/ghi789",
    originalUrl: "https://shop.example.com/summer-sale-2024",
    title: "Summer Sale Campaign",
    clicks: 2156,
    createdAt: "3 days ago",
    status: "active",
  },
  {
    id: 4,
    shortUrl: "https://lnk.cr/jkl012",
    originalUrl: "https://docs.example.com/api-documentation",
    title: "API Documentation",
    clicks: 445,
    createdAt: "1 week ago",
    status: "active",
  },
]

export function RecentLinks() {
  return (
    <Card className="bg-card/50 backdrop-blur border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-playfair text-xl">Recent Links</CardTitle>
          <Button variant="outline" size="sm" className="font-poppins bg-transparent">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentLinks.map((link, index) => (
            <div
              key={link.id}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/30 hover:bg-muted/50 transition-colors animate-in slide-in-from-left-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center space-x-2">
                  <h4 className="font-poppins font-medium text-sm truncate">{link.title}</h4>
                  <Badge variant="secondary" className="font-mono text-xs">
                    Active
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-xs text-primary truncate">{link.shortUrl}</p>
                  <p className="font-mono text-xs text-muted-foreground truncate">{link.originalUrl}</p>
                </div>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span className="font-poppins">{link.clicks.toLocaleString()} clicks</span>
                  </div>
                  <span className="font-poppins">{link.createdAt}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <div className="flex items-center space-x-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-poppins text-xs font-medium">+12%</span>
                </div>

                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Copy className="h-4 w-4" />
                </Button>

                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="font-poppins">Edit</DropdownMenuItem>
                    <DropdownMenuItem className="font-poppins">Analytics</DropdownMenuItem>
                    <DropdownMenuItem className="font-poppins">QR Code</DropdownMenuItem>
                    <DropdownMenuItem className="font-poppins text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
