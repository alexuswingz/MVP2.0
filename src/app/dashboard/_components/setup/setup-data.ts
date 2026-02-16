export interface SetupStep {
  label: string
  completed: boolean
}

export const setupStepsData: SetupStep[] = [
  { label: "Connect your repository", completed: true },
  { label: "Set up your first project", completed: true },
  { label: "Invite team members", completed: false },
  { label: "Configure environments", completed: false },
  { label: "Deploy your first release", completed: false },
]
