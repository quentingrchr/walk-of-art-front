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
      // "@components/*": ["src/components/*"],
      // "@components": ["src/components"],
      // "@styles/*": ["src/styles/*"],
      // "@styles": ["src/styles"],
      // "@public/*": ["public/*"],
      // "@public": ["public"],
      // "@interfaces/*": ["src/interfaces/*"],
      // "@types": ["src/types/*"],
      // "@for/*": ["src/types/*"],
      // "@assets/*": ["src/assets/*"],
      // "@utility/*": ["src/utility/*"],
      // "@data/*": ["src/data/*"],    
    
    const customAliases = {
        "@components": path.resolve(__dirname, '../src/components/'),
        "@styles":     path.resolve(__dirname, '../src/styles/'),
        "@public":     path.resolve(__dirname, '../public/'),
        "@interfaces": path.resolve(__dirname, '../src/interfaces/'),
        "@types": path.resolve(__dirname, '../src/types/'),
        "@utility": path.resolve(__dirname, '../src/utility/'),
        "@data": path.resolve(__dirname, '../src/data/'),
        "@assets": path.resolve(__dirname, '../src/assets/'),
        "@public": path.resolve(__dirname, '../public/'),
        
        
        // add future aliases here (see tsconfig.json)
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      ...customAliases,
    };
    
   

    return config;
  },
};