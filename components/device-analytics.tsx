"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Monitor, Smartphone, Tablet } from "lucide-react"

const deviceData = [
  { name: "Desktop", value: 45.2, clicks: 20340, color: "hsl(var(--primary))", icon: Monitor },
  { name: "Mobile", value: 38.7, clicks: 17420, color: "hsl(var(--accent))", icon: Smartphone },
  { name: "Tablet", value: 16.1, clicks: 7240, color: "hsl(var(--muted-foreground))", icon: Tablet },
]

export function DeviceAnalytics() {
  return (
    <Card className="bg-card/50 backdrop-blur border-border/50">
      <CardHeader>
        <CardTitle className="font-playfair text-xl flex items-center space-x-2">
          <Monitor className="h-5 w-5 text-primary" />
          <span>Device Breakdown</span>
        </CardTitle>
        <p className="font-poppins text-sm text-muted-foreground">Click distribution by device type</p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {deviceData.map((device, index) => (
              <div
                key={device.name}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg animate-in slide-in-from-right-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: device.color + "20" }}>
                    <device.icon className="h-4 w-4" style={{ color: device.color }} />
                  </div>
                  <div>
                    <p className="font-poppins text-sm font-medium">{device.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{device.clicks.toLocaleString()} clicks</p>
                  </div>
                </div>
                <span className="font-space-grotesk text-lg font-bold">{device.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
