import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../**/*.mdx",
    "../**/(*.)?stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {},
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
