const queries = require('./queries');
const _ = require('lodash');

module.exports = function (app, pool) {

  // app.get('/api/stats/companies', (req, res, next) => {
  //   // Get a Postgres client from the connection pool
  //   pool.connect().then(client =>
  //     client
  //       .query(queries[`${req.params.category}Companies`])
  //       .then(resCompanies => {
  //         res.json({
  //           totalActiveCompanies: resCompanies.rows.filter(c => c.status === 'Active').length,
  //           companiesByYear: _.groupBy(resCompanies.rows, 'date'),
  //       //    companiesByLocation: ,
  //
  //           filtersData: {
  //             locations: _.uniq(_.flatten(resCompanies.rows.filter(r => r.location).map(c => c.location.split(',')))).sort(),
  //             foundationYears: _.uniq(resCompanies.rows.filter(r => r.date).map(c => c.date)).sort(),
  //           },
  //           itemsData:
  //           resCompanies.rows.map(c => {
  //             const {
  //               name,
  //               image,
  //               date,
  //               type,
  //               status,
  //               description,
  //               links,
  //               contentlinks,
  //               content,
  //               location,
  //             } = c;
  //             return {
  //               name,
  //               image,
  //               description,
  //               type,
  //               other: [date, status, type, location],
  //               links1: links[0],
  //               content: content && content[0].map(g => {
  //                 const link = getLink(contentlinks, g.id);
  //                 return {
  //                   name: g.name,
  //                   status: g.status,
  //                   link: link && link.url,
  //                 };
  //               }),
  //               tags: `${status},${type},${location},${date}`.split(','),
  //             };
  //           })
  //         });
  //         client.release();
  //       })
  //       .catch(e => {
  //         client.release();
  //         console.error('query error', e.message, e.stack);
  //       })
  //   );
  // });

  app.get('/api/totalGames', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query('SELECT COUNT(*) FROM vg')
        .then(result => {
          res.json(result.rows[0]);
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });
  app.get('/api/totalTeams', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query('SELECT COUNT(*) FROM vgcom')
        .then(result => {
          res.json(result.rows[0]);
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });

  app.get('/api/stats/games', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query(queries.queryGames)
        .then(resGames => {
          const gamesByYear = _.omit(_.groupBy(resGames.rows, 'date'), 'null');
          res.json({
            gamesByYearData: {
              label: 'Games released',
              labels: _.keys(gamesByYear),
              data: _.values(gamesByYear).map(games => games.length),
            },
          });
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });

}
