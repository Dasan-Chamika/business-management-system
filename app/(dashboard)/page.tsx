import { AppHeader } from "@/components/app-header"
import { StatCard } from "@/components/stat-card"
import { SalesChart } from "@/components/sales-chart"
import { RecentActivity } from "@/components/recent-activity"
import { DollarSign, ShoppingCart, Users, Clock } from "lucide-react"

export default function DashboardPage() {
  return (
    <>
      <AppHeader title="Dashboard" />
      <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Sales"
            value="Rs. 1,225,000"
            description="vs last month"
            icon={DollarSign}
            trend="up"
            trendValue="12.5%"
          />
          <StatCard
            title="Orders"
            value="342"
            description="vs last month"
            icon={ShoppingCart}
            trend="up"
            trendValue="8.2%"
          />
          <StatCard
            title="Customers"
            value="1,248"
            description="vs last month"
            icon={Users}
            trend="up"
            trendValue="3.1%"
          />
          <StatCard
            title="Pending Items"
            value="18"
            description="requires attention"
            icon={Clock}
            trend="down"
            trendValue="5"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SalesChart />
          <RecentActivity />
        </div>
      </div>
    </>
  )
}
