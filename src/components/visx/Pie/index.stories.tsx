import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "./index";

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const Nomarl: Story = {
  render: () => {
    return <Component width={400} height={400} />;
  },
};
