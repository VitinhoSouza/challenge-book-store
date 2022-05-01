module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  // features:{ emotionAlias: false},
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.msj$/,
  //     include: /node_modules/,
  //     type: 'javascript/auto'
  //   });
  //   return config;
  // },
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}