import * as React from "react"
import type { Meta } from "@storybook/react"
import { ConfigWebsite as ConfigWebsiteComponent } from "../features/dashboard"

export default {
  title: "Lucid Space/Config Website",
  component: ConfigWebsiteComponent,
  decorators: [],
} as Meta

export const ConfigWebsite = () => <ConfigWebsiteComponent />
