export interface ActivityItem {
  action: string
  project: string
  time: string
  status: "success" | "info" | "warning"
}

export const recentActivityData: ActivityItem[] = [
  { action: "Deployed to Production", project: "Core API v2.1", time: "2 hours ago", status: "success" },
  { action: "New team member added", project: "Mobile App Team", time: "5 hours ago", status: "info" },
  { action: "MVP review completed", project: "Dashboard Redesign", time: "1 day ago", status: "success" },
  { action: "Environment switched", project: "Staging → Production", time: "1 day ago", status: "warning" },
]
