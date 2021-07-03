import type { ComponentProps } from "@lucid/feature-component";

export type ColumnType = "default" | "boolean" | "button";

export const columnTypeTitles: Record<ColumnType, string> = {
  default: "Default",
  boolean: "Boolean",
  button: "Button",
};

export interface Column extends ComponentProps {
  title: string;
  columnType: ColumnType;
  editable: boolean;
}
