const queries = require('./queries');
const _ = require('lodash');
const getLink = (links, id) =>
  links[0].find(l => l.id === id && l.type === 'website') ||
  links[0].find(l => l.id === id && l.type === 'websiteD') ||
  links[0].find(l => l.id === id && l.type === 'websiteP') ||
  links[0].find(l => l.id === id && l.type === 'indiedb') ||
  links[0].find(l => l.id === id && l.type === 'facebook') ||
  links[0].find(l => l.id === id);

module.exports = function (app, pool) {

  app.get('/api/:category/media', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query(queries.queryMedia)
        .then(resMedia => {
          res.json({
            filtersData: {
              mediaTypes: _.uniq(_.flatten(resMedia.rows.map(c => c.tags ? c.tags.split(',') : 'Unknown category'))).sort(),
            },
            itemsData: resMedia.rows.map(c => {
              const {
                name,
                image,
                tags,
                description,
                links,
              } = c;
              return {
                name,
                image,
                description,
                category: tags,
                other: [tags],
                links1: links[0],
                tags: `${tags || 'Unknown category'}`.split(','),
              };
            })
          });
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });

  app.get('/api/:category/networks', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query(queries.queryNetworks)
        .then(resNetworks => {
          res.json({
            filtersData: {
              netLocations: _.uniq(_.flatten(resNetworks.rows.map(c => c.location ? c.location.split(',') : 'Unknown location'))).sort(),
              netTypes: _.uniq(_.flatten(resNetworks.rows.map(c => c.tags ? c.tags.split(',') : 'Unknown category'))).sort(),
            },
            itemsData: resNetworks.rows.map(c => {
              const {
                name,
                image,
                date,
                tags,
                description,
                links,
                location,
              } = c;
              return {
                name,
                image,
                description,
                category: tags,
                other: [date, location, tags],
                links1: links[0],
                tags: `${location || 'Unknown location'},${tags || 'Unknown category'}`.split(','),
              };
            })
          });
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });

  app.get('/api/:category/companies', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query(queries[`${req.params.category}Companies`])
        .then(resCompanies => {
          res.json({
            filtersData: {
              teamLocations: _.uniq(_.flatten(resCompanies.rows.map(c => c.location ? c.location.split(',') : 'Unknown location'))).sort(),
              foundationYears: _.uniq(resCompanies.rows.map(c => c.date || 'Unknown year')).sort(),
              teamStatus: _.uniq(resCompanies.rows.map(c => c.status || 'Unknown status')).sort(),
            },
            itemsData:
            resCompanies.rows.map(c => {
              const {
                name,
                image,
                date,
                type,
                status,
                description,
                links,
                contentlinks,
                content,
                location,
              } = c;
              return {
                name,
                image,
                description,
                type,
                other: [date, status, location, type],
                links1: links[0],
                content: content && content[0].map(g => {
                  const link = getLink(contentlinks, g.id);
                  return {
                    name: g.name,
                    status: g.status,
                    link: link && link.url,
                  };
                }),
                tags: `${status || 'Unknown status'},${type || 'Unknown category'},${location || 'Unknown location'},${date || 'Unknown year'}`.split(','),
              };
            })
          });
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });

  app.get('/api/videogames/games', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query(queries.queryGames)
        .then(resGames => {
          res.json({
            filtersData: {
              releasesYears: _.uniq(resGames.rows.map(c => c.date || 'Unknown year')).sort(),
              gameGenres: _.uniq(_.flatten(resGames.rows.map(c => c.genre ? c.genre.split(',') : 'Unknown genre'))).sort(),
              gameStyles: _.uniq(_.flatten(resGames.rows.map(c => c.style ? c.style.split(',') : 'Unknown type'))).sort(),
              gameModes: _.uniq(_.flatten(resGames.rows.map(c => c.modes ? c.modes.split(',') : 'Unknown mode'))).sort(),
              gameStatus: _.uniq(_.flatten(resGames.rows.map(c => c.status || 'Unknown status'))).sort(),
            },
            itemsData:
            resGames.rows.map(g => {
              const {
                name,
                style,
                genre,
                modes,
                image,
                date,
                status,
                description,
                links,
                comlinks,
                companies,
              } = g;
              return {
                name,
                image,
                description,
                other: [date, status],
                links1: links[0].filter(l => l.category === 'media'),
                links2: links[0].filter(l => l.category === 'platform'),
                content: companies[0].map(c => {
                  const link = getLink(comlinks, c.name);
                  return {
                    name: c.name,
                    status: c.status,
                    link: link && link.url,
                  };
                }),
                tags: `${status || 'Unknown status'},${genre || 'Unknown genre'},${modes || 'Unknown mode'},${style || 'Unknown type'},${date || 'Unknown year'}`
                  .split(',')
                  .concat(links[0].map(l => l.type)),
                displayedtags: `${genre},${modes},${style}`.split(','),
              };
            })
          });
          client.release();
        })
        .catch(e => {
          client.release();
          console.error('query error', e.message, e.stack);
        })
    );
  });

  app.get('/api/assets/assets', (req, res, next) => {
    // Get a Postgres client from the connection pool
    pool.connect().then(client =>
      client
        .query(queries.queryAssets)
        .then(resAssets => {
          res.json({
            filtersData: {
              assetStatus: _.uniq(_.flatten(resAssets.rows.map(c => c.status || 'Unknown status'))).sort(),
              assetPrice: _.uniq(_.flatten(resAssets.rows.map(c => c.price || 'Unknown plan'))).sort(),
              assetCategories: _.uniq(_.flatten(resAssets.rows.map(c => c.category || 'Unknown category'))).sort(),
              assetTags: _.uniq(_.flatten(resAssets.rows.map(c => c.tags ? c.tags.split(',') : 'Other'))).sort(),
            },
            itemsData:
            resAssets.rows.map(g => {
              const {
                name,
                category,
                image,
                date,
                tags,
                price,
                status,
                description,
                links,
                comlinks,
                companies,
              } = g;
              return {
                name,
                image,
                description,
                other: [date, status],
                links1: links[0],
                content: companies[0].map(c => {
                  const link = getLink(comlinks, c.name);
                  return {
                    name: c.name,
                    status: c.status,
                    link: link && link.url,
                  };
                }),
                tags: `${status || 'Unknown status'},${category || 'Unknown category'},${price || 'Unknown plan'},${tags || 'Other'}`
                  .split(',')
                  .concat(links[0].map(l => l.type)),
                displayedtags: (`${tags},` + `null`).split(','),
              };
            })
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
