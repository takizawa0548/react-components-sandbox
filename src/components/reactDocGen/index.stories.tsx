import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "./index";

const meta = {
  title: "components/reactDocGen",

  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const Nomarl: Story = {
  render: () => {
    return <Component />;
  },
};
