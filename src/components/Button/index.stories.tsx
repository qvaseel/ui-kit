import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const CRMTheme: Story = {
  render: () => (
    <div data-theme="crm" className="flex flex-col gap-2 p-5 w-fit">
      <Button size='sm'>CRM style</Button>
      <Button size='md'>CRM style</Button>
    </div>
  )
};

export const LKTheme: Story = {
  render: () => (
    <div data-theme="lk" className="flex flex-col gap-2 p-5 w-fit">
      <Button size='sm'>LK style</Button>
      <Button size='md'>LK style</Button>
    </div>
  )
};

export const Outline: Story = {
  render: () => (
    <div data-theme="crm" className="p-5">
      <Button variant='outline'>Outline</Button>
    </div>
  )
};
