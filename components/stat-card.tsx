import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  trend?: "up" | "down"
  trendValue?: string
}

export function StatCard({ title, value, description, icon: Icon, trend, trendValue }: StatCardProps) {
  return (
    <Card className="border-border bg-card">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold tracking-tight text-card-foreground">{value}</p>
            <div className="flex items-center gap-1">
              {trend && trendValue && (
                <span
                  className={`text-xs font-medium ${
                    trend === "up" ? "text-[hsl(var(--success))]" : "text-destructive"
                  }`}
                >
                  {trend === "up" ? "+" : "-"}{trendValue}
                </span>
              )}
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
