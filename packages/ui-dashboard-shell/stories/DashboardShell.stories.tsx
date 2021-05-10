import * as React from "react"
import { DashboardShell as DashboardShellComponent } from "../src"
import type { Meta } from "@storybook/react"

export default {
  title: "Pages/Dashboard Shell",
  component: DashboardShellComponent,
  decorators: [],
} as Meta

export const DashboardShell = () => <DashboardShellComponent />
