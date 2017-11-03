const credentials = require('./cred')
const express = require('express')
const path = require('path')
const webpack = require('webpack')
const logger = require('../build/lib/logger')
const webpackConfig = require('../build/webpack.config')
const project = require('../project.config')
const compress = require('compression')
const nodemailer = require('nodemailer')
const app = express()

const { Pool, Client } = require('pg')
const connectionString = process.env.DATABASE_URL?ssl=true || 'postgresql://postgres:Gliflit28%@localhost:5432/greekgamedevs'

const pool = new Pool({
  connectionString: connectionString,
})
const queryCompanies = "SELECT vgcom.*, json_build_object('games',json_build_object('name', vg.name,'status', vg.status)) FROM vgcom INNER JOIN vg ON vgcom.name = vg.developer"

app.get('/api/companies', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client => {
    let links = []
    let games = []
    client.query('SELECT * FROM vgcom ORDER BY name ASC').then(resCompanies => {
      Promise.all(resCompanies.rows.map(company => {
        client.query('SELECT name, status FROM vg WHERE developer= $1 ORDER BY name ASC', [company.name]).then(resGames => {
          games.push(resGames.rows)
        })
        return client.query('SELECT type, link FROM vgcomlinks WHERE company= $1 ORDER BY type ASC ', [company.name]).then(resLinks => {
          links.push(resLinks.rows)
        })
      })).then(e => {
        client.release()
        res.json(resCompanies.rows.map((c, index) => ({company: c, games: games[index], links: links[index]})))
      })
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    })
  })
})

app.get('/api/games', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.query('SELECT * FROM vg ORDER BY name ASC', (err, result) => {
    if (err) {
      throw err
    }
    res.json(result.rows)
  })
})

/// REMOVE THIS AFTER MAIL
const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: credentials.mail,
    pass: credentials.pass,
  }
})
////

app.use(express.static(__dirname + '/public'))

app.set('src', __dirname + '/src')

/// REMOVE THIS AFTER MAIL
app.get('/send', (req, res) => {
  const mailOptions = {
    to : credentials.mail,
    subject : req.query.title,
    text : 'From ' + req.query.mail + ': ' + req.query.comment,
  }
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.end('error')
    } else {
      res.end('sent')
    }
  })
})
//////

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
  const compiler = webpack(webpackConfig)

  logger.info('Enabling webpack development and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : path.resolve(project.basePath, project.srcDir),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : 'normal',
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(project.basePath, 'public')))

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })

module.exports = app
