const path = require('path');

module.exports = {
  entry: './src/login.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled files
    filename: 'bundle.js', // Output filename
    publicPath: '/', // Public URL path for the bundle (used by webpack-dev-server)
  },
  module: {
    rules: [
      // Add any necessary rules for your project (e.g., transpiling with Babel, handling CSS, etc.)
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Directory where your static files are located
    },
    port: 3000, // Port on which the dev server will run
    open: true, // Open the app in the default browser when the dev server starts
    historyApiFallback: true, // Enable history API fallback so that React Router can work correctly

    // Add the setupMiddlewares option and set it to an empty array
    setupMiddlewares: [],
  },
};
