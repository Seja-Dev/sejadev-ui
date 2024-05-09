/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../src/components/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    'storybook-dark-mode'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
