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
const connectionString = process.env.DATABASE_URL ? (process.env.DATABASE_URL + '?ssl=true') : 'postgresql://postgres:Gliflit28%@localhost:5432/greekgamedevs'

const pool = new Pool({
  connectionString: connectionString,
})
const queryCompanies =
'SELECT ' +
'vgcom.name,' +
'vgcom.image,' +
'vgcom.founded AS date,' +
'vgcom.status,' +
'vgcom.description,' +
'jsonb_build_array(array_agg(DISTINCT  jsonb_build_object(' +
'\'link\', vgcomlinks.link,' +
'\'type\', vgcomlinks.type' +
')),\',\')AS links,' +
'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
'\'status\', vg.status,' +
'\'name\', vg.name,' +
'\'id\', vg.id' +
')),\',\')AS games,' +
'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
'\'url\',vglinks.link,' +
'\'type\',vglinks.type,' +
'\'id\', vglinks.gameid' +
')),\',\')AS gamelinks ' +
'FROM vgcom ' +
'LEFT JOIN vg on vgcom.name = vg.developer ' +
'LEFT JOIN vgcomlinks on vgcomlinks.company = vgcom.name ' +
'LEFT JOIN vglinks on vglinks.gameid = vg.id ' +
'GROUP BY vgcom.name ' +
'ORDER BY vgcom.name ASC'

const queryGames =
'SELECT ' +
'vg.name,' +
'vg.image,' +
'vg.released AS date,' +
'vg.status,' +
'vg.description,' +
'vg.id,' +
'vg.genre,' +
'vg.modes,' +
'vg.style,' +
'jsonb_build_array(array_agg(DISTINCT  jsonb_build_object(' +
'\'link\', vglinks.link,' +
'\'type\', vglinks.type,' +
'\'category\', vglinks.category' +
')),\',\')AS links,' +
'jsonb_build_array(array_agg (DISTINCT jsonb_build_object(' +
'\'status\', vgcom.status,' +
'\'name\', vgcom.name' +
')),\',\')AS companies,' +
'jsonb_build_array( array_agg (DISTINCT jsonb_build_object(' +
'\'url\',vgcomlinks.link,' +
'\'id\', vgcomlinks.company,' +
'\'type\', vgcomlinks.type' +
')),\',\')AS comlinks ' +
'FROM vg ' +
'LEFT JOIN vgcom on vgcom.name = vg.developer OR vgcom.name = vg.publisher ' +
'LEFT JOIN vglinks on vglinks.gameid = vg.id ' +
'LEFT JOIN vgcomlinks on vgcomlinks.company = vgcom.name ' +
'GROUP BY vg.id ' +
'ORDER BY vg.name ASC'

const queryCalendar =
'SELECT ' +
'calendar.name AS title,' +
'calendar.type,' +
'calendar.date AS start,' +
'calendar.end,' +
'calendar.location,' +
'calendar.description AS descr ' +
'FROM calendar '

const queryHistory =
'SELECT ' +
'milestones.date,' +
'milestones.description ' +
'FROM milestones '

const getLink = (links, id) =>
    links[0].find(l => l.id === id && l.type === 'website') ||
    links[0].find(l => l.id === id && l.type === 'indiedb') ||
    links[0].find(l => l.id === id && l.type === 'facebook') ||
    links[0].find(l => l.id === id)

app.get('/api/calendar', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query(queryCalendar).then(resEvents => {
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
    client.query(queryHistory).then(resHis => {
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
app.get('/api/companies', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query(queryCompanies).then(resCompanies => {
      res.json(resCompanies.rows.map(c => {
        const { name, image, date, status, description, links, gamelinks, games } = c
        return ({
          name,
          image,
          date,
          status,
          description,
          media: links[0],
          content: games[0].map(g => {
            const link = getLink(gamelinks, g.id)
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

app.get('/api/games', (req, res, next) => {
  // Get a Postgres client from the connection pool
  pool.connect().then(client =>
    client.query(queryGames).then(resGames => {
      res.json(resGames.rows.map(g => {
        const { name, style, genre, modes, image, date, status, description, links, comlinks, companies } = g
        return ({
          name,
          image,
          date,
          status,
          description,
          media: links[0].filter(l => l.category === 'media'),
          platforms: links[0].filter(l => l.category === 'platform'),
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
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.end('error')
    } else {
      res.end('sent')
    }
  })
})
/// ///

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
