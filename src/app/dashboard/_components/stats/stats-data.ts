import { Rocket, Users, Zap, TrendingUp, LucideIcon } from "lucide-react"

export interface StatItem {
  label: string
  value: string
  change: string
  icon: LucideIcon
}

export const statsData: StatItem[] = [
  { label: "Active Projects", value: "12", change: "+3", icon: Rocket },
  { label: "Team Members", value: "48", change: "+8", icon: Users },
  { label: "Deployments", value: "284", change: "+24", icon: Zap },
  { label: "Success Rate", value: "98.5%", change: "+2.1%", icon: TrendingUp },
]
