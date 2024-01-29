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
      builder: {
        useSWC: true, // Set useSWC to true if you want to try out the experimental SWC compiler in Next.js >= 14.0.0
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
