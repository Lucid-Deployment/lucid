import * as React from "react";
import { Pricing as PricingComponent } from "../../src";
import type { Meta } from "@storybook/react";

export default {
  title: "Organisms/Marketing/Pricing",
  component: PricingComponent,
  decorators: [],
} as Meta;

export const Pricing = () => <PricingComponent />;
