"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Link2, BarChart3, Settings } from "lucide-react"
import { UrlShortener } from "./url-shortener"

export function QuickActions() {
  const [showShortener, setShowShortener] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-playfair text-2xl font-semibold">Quick Actions</h2>
        <Button
          onClick={() => setShowShortener(!showShortener)}
          className="font-poppins bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create New Link
        </Button>
      </div>

      {showShortener && (
        <div className="animate-in slide-in-from-top-4 duration-300">
          <UrlShortener />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 group cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Link2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold">Bulk Import</h3>
                <p className="font-poppins text-sm text-muted-foreground">Import multiple URLs at once</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 group cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold">Analytics Report</h3>
                <p className="font-poppins text-sm text-muted-foreground">Generate detailed reports</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 group cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold">Custom Domain</h3>
                <p className="font-poppins text-sm text-muted-foreground">Setup branded domains</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
