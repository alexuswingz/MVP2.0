import { DashboardHeader } from "./_components/dashboard-header"
import { StatsGrid } from "./_components/stats"
import { QuickActions } from "./_components/actions"
import { RecentActivity } from "./_components/activity"
import { GettingStarted } from "./_components/setup"
import { ActiveProjects } from "./_components/projects"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <StatsGrid />
      <QuickActions />
      
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivity />
        <GettingStarted />
      </div>

      <ActiveProjects />
    </div>
  )
}
