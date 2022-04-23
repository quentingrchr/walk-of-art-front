const withPlugins = require("next-compose-plugins");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withPlugins([], {
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  }
});
