const config = require('../config');
const queries = require('./queries');
const ical = require('ical-generator');

const cal = ical({
  domain: config.calendar.domain,
  name: 'GGD events',
  prodId: config.calendar.id,
  url: config.calendar.url,
  timezone: 'Europe/Athens',
});

module.exports = function (app, pool) {

  app.get('/api/calendar', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query(queries.queryCalendar)
        .then(resEvents => {
          resEvents.rows.map(e =>
            cal.createEvent({
              start: e.start,
              end: e.end,
              summary: e.title,
              description: e.descr,
              location: e.location,
            })
          );
          cal.toString();
          res.json(resEvents.rows);
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });

  app.get('/calendar', (req, res) => {
    cal.serve(res);
  });

  app.get('/api/history', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query(queries.queryHistory)
        .then(resHis => {
          res.json(resHis.rows);
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });
}
