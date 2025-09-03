"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus, Copy, ExternalLink, MoreHorizontal, Eye } from "lucide-react"

const mockLinks = [
  {
    id: 1,
    shortUrl: "https://lnk.cr/summer-sale",
    originalUrl: "https://shop.example.com/summer-sale-2024-mega-discount",
    title: "Summer Sale 2024",
    clicks: 15420,
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    shortUrl: "https://lnk.cr/product-launch",
    originalUrl: "https://example.com/new-product-revolutionary-ai-tool",
    title: "Product Launch",
    clicks: 12890,
    status: "active",
    createdAt: "2024-01-12",
  },
]

export function LinksManager() {
  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search links..." className="pl-10 bg-muted/50 border-border/50" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins bg-transparent">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="font-poppins bg-gradient-to-r from-primary to-accent">
            <Plus className="h-4 w-4 mr-2" />
            New Link
          </Button>
        </div>
      </div>

      {/* Links List */}
      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle className="font-playfair text-xl">All Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockLinks.map((link, index) => (
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
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
