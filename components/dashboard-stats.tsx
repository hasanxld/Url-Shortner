"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, MousePointer, Globe, Users } from "lucide-react"

const stats = [
  {
    title: "Total Links",
    value: "2,847",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Globe,
  },
  {
    title: "Total Clicks",
    value: "45,231",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: MousePointer,
  },
  {
    title: "Click Rate",
    value: "15.9%",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Unique Visitors",
    value: "12,847",
    change: "+5.7%",
    changeType: "positive" as const,
    icon: Users,
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={stat.title}
          className="bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 group animate-in slide-in-from-bottom-4"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-poppins text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="font-space-grotesk text-2xl font-bold">{stat.value}</div>
              <p className="font-poppins text-xs text-muted-foreground">
                <span className="text-green-600 font-medium">{stat.change}</span> from last month
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
