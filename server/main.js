const config = require('./config');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const logger = require('../build/lib/logger');
const webpackConfig = require('../build/webpack.config');
const project = require('../project.config');
const app = express();
const { Pool, Client } = require('pg');

const pool = new Pool({
  connectionString: config.connectionString,
})

const database = require('./controllers/database.js');
const home = require('./controllers/home.js');
const communication = require('./controllers/communication.js');
database(app, pool);
communication(app, pool);
home(app, pool);


app.use(express.static(`${__dirname}/public`));

app.set('src', `${__dirname}/src`);

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig);
  logger.info('Enabling webpack development and HMR middleware');
  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: path.resolve(project.basePath, project.srcDir),
      hot: true,
      quiet: false,
      noInfo: false,
      lazy: false,
      stats: 'normal',
    })
  );
  app.use(
    require('webpack-hot-middleware')(compiler, {
      path: '/__webpack_hmr',
    })
  );
  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(project.basePath, 'public')));
  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.use(express.static(path.resolve(project.basePath, project.outDir)));
  app.get('*', (req, res) => {
    res.sendFile(path.join(project.basePath, 'dist', 'index.html'));
    res.redirect('https://' + req.headers.host + req.url);
  });
}

module.exports = app;
