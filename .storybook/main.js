const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {

    
    const customAliases = {
        "@components": path.resolve(__dirname, '../src/components/'),
        "@styles":     path.resolve(__dirname, '../src/styles/'),
        "@public":     path.resolve(__dirname, '../public/'),
        "@interfaces": path.resolve(__dirname, '../src/interfaces/'),
        "@types":      path.resolve(__dirname, '../src/types/')
        // add future aliases here (see tsconfig.json)
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      ...customAliases,
    };
    
   

    return config;
  },
};