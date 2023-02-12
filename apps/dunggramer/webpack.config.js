const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.module.rules.push({
    test: /\.svg$/,
    loader: 'react-svg-loader',
    options: {
      jsx: true, // true outputs JSX tags
    },
  });


  return config;
});
