import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "./index";
import { useState } from "react";

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const Nomarl: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <input
          type="button"
          onClick={() => setIsOpen(true)}
          value={"ReactModal"}
        />
        <Component
          isOpen={isOpen}
          onClickCloseButton={() => setIsOpen(false)}
        />
      </>
    );
  },
};
