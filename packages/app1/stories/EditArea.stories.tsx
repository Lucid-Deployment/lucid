import * as React from "react"
import type { Meta } from "@storybook/react"
import { EditArea as EditAreaComponent } from "../features/dashboard"

export default {
  title: "Lucid Space/Edit Area",
  component: EditAreaComponent,
  decorators: [
    (story: Function) => (
      <div
        style={{
          display: "flow-root",
          backgroundColor: "#b2b2b2",
        }}
      >
        <div
          style={{
            margin: "50px",
          }}
        >
          {story()}
        </div>
      </div>
    ),
  ],
} as Meta

export const EditArea = () => <EditAreaComponent>Text</EditAreaComponent>
