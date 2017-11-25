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
const request = require('request')
const { Pool, Client } = require('pg')
const connectionString = process.env.DATABASE_URL ? (process.env.DATABASE_URL + '?ssl=true')
  : credentials.connectionString
const queries = require('./queries')
const pool = new Pool({
  connectionString: connectionString,
})

const getLink = (links, id) =>
    links[0].find(l => l.id === id && l.type === 'website') ||
    links[0].find(l => l.id === id && l.type === 'websiteD') ||
    links[0].find(l => l.id === id && l.type === 'websiteP') ||
    links[0].find(l => l.id === id && l.type === 'indiedb') ||
    links[0].find(l => l.id === id && l.type === 'facebook') ||
    links[0].find(l => l.id === id)

app.get('/api/calendar', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query(queries.queryCalendar).then(resEvents => {
      res.json(resEvents.rows)
      client.release()
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    }))
})

app.get('/api/history', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query(queries.queryHistory).then(resHis => {
      res.json(resHis.rows)
      client.release()
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    }))
})

app.get('/api/totalGames', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query('SELECT COUNT(*) FROM vg').then(result => {
      res.json(result.rows[0])
      client.release()
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    }))
})
app.get('/api/totalTeams', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query('SELECT COUNT(*) FROM vgcom').then(result => {
      res.json(result.rows[0])
      client.release()
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    }))
})

app.get('/api/:category/companies', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query(queries[req.params.category + 'Companies']).then(resCompanies => {
      res.json(resCompanies.rows.map(c => {
        const { name, image, date, status, description, links, contentlinks, content, location } = c
        return ({
          name,
          image,
          description,
          other: [date, status, location],
          links1: links[0],
          content: content[0].map(g => {
            const link = getLink(contentlinks, g.id)
            return ({
              name: g.name,
              status: g.status,
              link: link && link.url,
            })
          }),
          tags: [status],
        })
      }))
      client.release()
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    })
  )
})


app.get('/api/videogames/games', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query(queries.queryGames).then(resGames => {
      res.json(resGames.rows.map(g => {
        const { name, style, genre, modes, image, date, status, description, links, comlinks, companies } = g
        return ({
          name,
          image,
          description,
          other: [date, status],
          links1: links[0].filter(l => l.category === 'media'),
          links2: links[0].filter(l => l.category === 'platform'),
          content: companies[0].map(c => {
            const link = getLink(comlinks, c.name)
            return ({
              name: c.name,
              status: c.status,
              link: link && link.url,
            })
          }),
          tags: (status + ',' + genre + ',' + modes + ',' + style).split(',').concat(links[0].map(l => l.type)),
          displayedtags: (genre + ',' + modes + ',' + style).split(','),
        })
      }))
      client.release()
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    })
  )
})

app.get('/api/assets/assets', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query(queries.queryAssets).then(resGames => {
      res.json(resGames.rows.map(g => {
        const { name, category, image, date, tags, price, status, description, links, comlinks, companies } = g
        return ({
          name,
          image,
          description,
          other: [date, status],
          links1: links[0],
          content: companies[0].map(c => {
            const link = getLink(comlinks, c.name)
            return ({
              name: c.name,
              status: c.status,
              link: link && link.url,
            })
          }),
          tags: (status + ',' + category + ',' + price + ',' + tags).split(',').concat(links[0].map(l => l.type)),
          displayedtags: (tags + ',' + 'null').split(','),
        //  displayedtags: (genre + ',' + modes + ',' + style).split(','),
        })
      }))
      client.release()
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    })
  )
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
/// /

app.use(express.static(__dirname + '/public'))

app.set('src', __dirname + '/src')

/// REMOVE THIS AFTER MAIL
app.get('/send', (req, res) => {
  const mailOptions = {
    to : credentials.mail,
    subject : req.query.title,
    text : 'From ' + req.query.mail + ': ' + req.query.comment,
  }
  console.log('data', req.query.verification, req.connection.remoteAddress )
  request.post('https://www.google.com/recaptcha/api/siteverify', {
    form: {
      secret: '6LejpjUUAAAAAFxxvha5U1o4cHKbwpWC_w0KX4gX',
      response: req.query.verification,
      remoteip: req.connection.remoteAddress,
    }
  }, function (error, response, body) {
    body = JSON.parse(body)
    if (body.success !== undefined && !body.success) {
      console.log('captcha')
      return res.end('error')
    }
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        res.end('error')
      } else {
        res.end('sent')
      }
    })
  })
})

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
