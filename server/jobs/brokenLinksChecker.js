const { Pool, Client } = require('pg')
const config = require('../config')
const request = require('request')
const blc = require('broken-link-checker')
const logger = require('../../build/lib/logger')

const pool = new Pool({
  connectionString: config.connectionString,
})

const options = {
  excludeExternalLinks: true,
  excludeInternalLinks: true,
  excludeLinksToSamePage: true,
  acceptedSchemes: ['http', 'https'],
  filterLevel: 0,
  honorRobotExclusions: false,
}

const getQueryLinks = (table) =>
'SELECT ' +
table + '.link ' +
'FROM ' + table

const updateLinkStatus = (status, url, table) => {
  pool.connect().then(client =>
    client.query(
      'UPDATE ' + table + ' ' +
      'SET active = $1 ' +
      'WHERE ' + table + '.link = $2'
    , [status, url]).then(res => client.release())
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    }))
}

const overlook = {
  'HTTP_999': true,
  'HTTP_undefined': true,
  'BLC_UNKNOWN': true,
}

const UrlChecker = new blc.UrlChecker(options, {
  link: (result, customData) => {
    if (!result.broken) {
      updateLinkStatus(true, result.url.original, customData)
    } else if (overlook[result.brokenReason]) {
      logger.info('~~~~~~~~~~~~~~~~~')
      logger.info('MANUAL-CHECK')
      logger.info(result.brokenReason)
      logger.info( result.url.original)
      logger.info('~~~~~~~~~~~~~~~~~')
    } else {
      logger.info('~~~~~~~~~~~~~~~~~')
      logger.info('BROKEN')
      logger.info(result.brokenReason)
      logger.info( result.url.original)
      logger.info('~~~~~~~~~~~~~~~~~')
      updateLinkStatus(false, result.url.original, customData)
    }
  },
  end: () => console.log('~~~~END~~~~')
})

const checkLinks = (table) =>
  pool.connect().then(client =>
    client.query(getQueryLinks(table)).then(resLinks => {
      resLinks.rows.map(l => {
        return UrlChecker.enqueue(l.link, l.link, table)
      })
      client.release()
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    }))

const checkBrokenLinks = () => {
  // Get a Postgres client from the connection pool
  checkLinks('vgcomlinks')
  checkLinks('vglinks')
  checkLinks('assetlinks')
}

checkBrokenLinks()
