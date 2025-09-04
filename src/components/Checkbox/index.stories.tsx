import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const CRMTheme: Story = {
  render: () => (
    <div data-theme="crm">
      <Checkbox className="p-5" />
    </div>
  ),
};

export const LKTheme: Story = {
  render: () => (
    <div data-theme="lk">
      <Checkbox className="p-5" />
    </div>
  ),
};

export const Checked: Story = {
  render: () => <Checkbox className="p-5" defaultChecked />,
};
