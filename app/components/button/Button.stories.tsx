import Button from ".";

import type { Story, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Basic: Story = () => <Button />;
