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
              types: _.uniq(_.flatten(resMedia.rows.filter(r => r.tags).map(c => c.tags.split(',')))).sort(),
            },
            itemsData: resMedia.rows.map(c => {
              const {
                name,
                image,
                date,
                tags,
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
                category: tags,
                other: [date, location, tags],
                links1: links[0],
                content: content && content[0].map(g => {
                  const link = getLink(contentlinks, g.id);
                  return {
                    name: g.name,
                    status: g.status,
                    link: link && link.url,
                  };
                }),
                tags: `${status},${location},${tags}`.split(','),
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
              locations: _.uniq(_.flatten(resNetworks.rows.filter(r => r.location).map(c => c.location.split(',')))).sort(),
              types: _.uniq(_.flatten(resNetworks.rows.filter(r => r.tags).map(c => c.tags.split(',')))).sort(),
            },
            itemsData: resNetworks.rows.map(c => {
              const {
                name,
                image,
                date,
                tags,
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
                category: tags,
                other: [date, location, tags],
                links1: links[0],
                content: content && content[0].map(g => {
                  const link = getLink(contentlinks, g.id);
                  return {
                    name: g.name,
                    status: g.status,
                    link: link && link.url,
                  };
                }),
                tags: `${status},${location},${tags}`.split(','),
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
              locations: _.uniq(_.flatten(resCompanies.rows.filter(r => r.location).map(c => c.location.split(',')))).sort(),
              foundationYears: _.uniq(resCompanies.rows.filter(r => r.date).map(c => c.date)).sort(),
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
                other: [date, status, type, location],
                links1: links[0],
                content: content && content[0].map(g => {
                  const link = getLink(contentlinks, g.id);
                  return {
                    name: g.name,
                    status: g.status,
                    link: link && link.url,
                  };
                }),
                tags: `${status},${type},${location},${date}`.split(','),
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
              releasesYears: _.uniq(resGames.rows.filter(r => r.date).map(c => c.date)).sort(),
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
                tags: `${status},${genre},${modes},${style},${date}`
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
                tags: `${status},${category},${price},${tags}`
                  .split(',')
                  .concat(links[0].map(l => l.type)),
                displayedtags: (`${tags},` + `null`).split(','),
                //  displayedtags: (genre + ',' + modes + ',' + style).split(','),
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
