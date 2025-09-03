"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

const clicksData = [
  { date: "Jan 1", clicks: 1200, uniqueVisitors: 800 },
  { date: "Jan 2", clicks: 1800, uniqueVisitors: 1200 },
  { date: "Jan 3", clicks: 1600, uniqueVisitors: 1000 },
  { date: "Jan 4", clicks: 2200, uniqueVisitors: 1500 },
  { date: "Jan 5", clicks: 2800, uniqueVisitors: 1800 },
  { date: "Jan 6", clicks: 2400, uniqueVisitors: 1600 },
  { date: "Jan 7", clicks: 3200, uniqueVisitors: 2100 },
  { date: "Jan 8", clicks: 2900, uniqueVisitors: 1900 },
  { date: "Jan 9", clicks: 3600, uniqueVisitors: 2400 },
  { date: "Jan 10", clicks: 4200, uniqueVisitors: 2800 },
  { date: "Jan 11", clicks: 3800, uniqueVisitors: 2500 },
  { date: "Jan 12", clicks: 4500, uniqueVisitors: 3000 },
  { date: "Jan 13", clicks: 4100, uniqueVisitors: 2700 },
  { date: "Jan 14", clicks: 4800, uniqueVisitors: 3200 },
]

export function ClicksChart() {
  return (
    <Card className="bg-card/50 backdrop-blur border-border/50">
      <CardHeader>
        <CardTitle className="font-playfair text-xl">Clicks Over Time</CardTitle>
        <p className="font-poppins text-sm text-muted-foreground">
          Daily clicks and unique visitors for the last 14 days
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={clicksData}>
              <defs>
                <linearGradient id="clicksGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="date"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="clicks"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#clicksGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="uniqueVisitors"
                stroke="hsl(var(--accent))"
                fillOpacity={1}
                fill="url(#visitorsGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
