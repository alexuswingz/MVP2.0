import { Rocket, BarChart3, Users, Zap, LucideIcon } from "lucide-react"

export interface QuickAction {
  label: string
  icon: LucideIcon
  color: string
}

export const quickActionsData: QuickAction[] = [
  { label: "Create New Project", icon: Rocket, color: "from-violet-600 to-purple-600" },
  { label: "View Analytics", icon: BarChart3, color: "from-orange-500 to-red-500" },
  { label: "Manage Team", icon: Users, color: "from-blue-500 to-cyan-500" },
  { label: "Deploy Now", icon: Zap, color: "from-green-500 to-emerald-500" },
]
