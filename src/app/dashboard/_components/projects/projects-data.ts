export interface Project {
  name: string
  status: "Production" | "Beta" | "Development"
  health: string
}

export const projectsData: Project[] = [
  { name: "Core API", status: "Production", health: "98%" },
  { name: "Mobile App", status: "Beta", health: "94%" },
  { name: "Dashboard", status: "Development", health: "87%" },
]
