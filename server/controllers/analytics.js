const queries = require('./queries');
const _ = require('lodash');

module.exports = function (app, pool) {

  app.get('/api/stats/totalAssets', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query('SELECT COUNT(*) FROM assets')
        .then(result => {
          res.json({
            totalAssets: result.rows[0].count,
          });
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });

  app.get('/api/stats/totalTeams', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query('SELECT * FROM vgcom')
        .then(result => {
          const teamCategories = _.groupBy(result.rows, 'type');
          res.json({
            totalMedia: teamCategories['Media'].length,
            totalNetworks: teamCategories['Network'].length,
          });
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
          const gamesByYear = _.groupBy(
            resGames.rows.filter(g => g.status !== 'Under Development' && g.status !== 'Stopped'),
            'date');
          const gamesByStatus = _.groupBy(resGames.rows, 'status');
          res.json({
            totalGames: resGames.rows.length,
            gamesByYearData: {
              label: 'Games by release year',
              labels: _.keys(gamesByYear).map(key => key === 'null' ? 'Unknown' : key),
              data: _.values(gamesByYear).map(games => games.length),
            },
            gamesByStatusData: {
              label: 'Games by status',
              labels: _.keys(gamesByStatus).map(key => key === 'null' ? 'Unknown' : key),
              data: _.values(gamesByStatus).map(games => games.length),
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

  app.get('/api/stats/gamesPlatforms', (req, res, next) => {
    // Get a Postgres client from the connection pool
    const mapPlatform = {
      'appStore': 'iOS',
      'playstore': 'android',
      'windowstore': 'windows',
    };
    pool.connect().then(client =>
      client
        .query("SELECT * FROM vglinks WHERE category = 'platform' AND active = true")
        .then(resGames => {
          const gamesByPlatform = _.groupBy(resGames.rows, 'type');
          res.json({
            gamesByPlatformData: {
              label: 'Games by platform',
              labels: _.keys(gamesByPlatform).map(plat => mapPlatform[plat] || plat),
              data: _.values(gamesByPlatform).map(games => games.length),
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

  app.get('/api/stats/gameDevs', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query(queries.videogamesCompanies)
        .then(resDevs => {
          const gameDevsByYear = _.groupBy(resDevs.rows, 'date');
          const gameDevsByStatus = _.groupBy(resDevs.rows, 'status');
          const gameDevsByLocation = _.groupBy(resDevs.rows, 'location');
          const gameDevsByCategory = _.groupBy(resDevs.rows, 'category');
          res.json({
            totalGameDevs: resDevs.rows.length,
            gameDevsByYearData: {
              label: 'Devs by year of initial activity',
              labels: _.keys(gameDevsByYear).map(key => key === 'null' ? 'Unknown' : key),
              data: _.values(gameDevsByYear).map(devs => devs.length),
            },
            gameDevsByStatusData: {
              label: 'Devs by status',
              labels: _.keys(gameDevsByStatus).map(key => key === 'null' ? 'Unknown' : key),
              data: _.values(gameDevsByStatus).map(devs => devs.length),
            },
            gameDevsByLocationData: {
              label: 'Devs by location',
              labels: _.keys(gameDevsByLocation).map(key => key === 'null' ? 'Unknown' : key),
              data: _.values(gameDevsByLocation).map(devs => devs.length),
            },
            gameDevsByCategoryData: {
              label: 'Devs by business plan',
              labels: _.keys(gameDevsByCategory).map(key => key === 'null' ? 'Unknown' : key),
              data: _.values(gameDevsByCategory).map(devs => devs.length),
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
