import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { recentActivity } from "@/lib/demo-data"
import { Activity } from "lucide-react"

export function RecentActivity() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-card-foreground">Recent Activity</CardTitle>
        <p className="text-sm text-muted-foreground">Latest updates from your business</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {recentActivity.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Activity className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="flex flex-1 flex-col gap-0.5">
                <p className="text-sm font-medium text-card-foreground">{item.action}</p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
