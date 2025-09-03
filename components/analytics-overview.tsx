"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, MousePointer, Globe, Users, Clock } from "lucide-react"

const overviewStats = [
  {
    title: "Total Clicks",
    value: "127,845",
    change: "+15.2%",
    changeType: "positive" as const,
    icon: MousePointer,
    period: "vs last month",
  },
  {
    title: "Unique Visitors",
    value: "45,231",
    change: "+8.7%",
    changeType: "positive" as const,
    icon: Users,
    period: "vs last month",
  },
  {
    title: "Click-Through Rate",
    value: "18.4%",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: TrendingUp,
    period: "vs last month",
  },
  {
    title: "Avg. Session Duration",
    value: "2m 34s",
    change: "-0.8%",
    changeType: "negative" as const,
    icon: Clock,
    period: "vs last month",
  },
  {
    title: "Top Countries",
    value: "127",
    change: "+12",
    changeType: "positive" as const,
    icon: Globe,
    period: "countries reached",
  },
  {
    title: "Bounce Rate",
    value: "24.7%",
    change: "-3.2%",
    changeType: "positive" as const,
    icon: TrendingDown,
    period: "vs last month",
  },
]

export function AnalyticsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {overviewStats.map((stat, index) => (
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
            <div className="space-y-2">
              <div className="font-space-grotesk text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2">
                <span
                  className={`font-poppins text-xs font-medium ${
                    stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="font-poppins text-xs text-muted-foreground">{stat.period}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
