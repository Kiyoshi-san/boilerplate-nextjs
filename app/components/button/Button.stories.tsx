import Button from ".";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Basic: StoryFn = () => <Button />;
