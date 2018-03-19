const defaultConfig = {
  environments: {
    'localhost:3000': 'DEV',
    'ggdtest.herokuapp.com': 'TEST',
    'greekgamedevs.com': 'PROD',
    'www.greekgamedevs.com': 'PROD',
  },
  analyticsKeys: {
    DEV: 'UA-109511849-2',
    TEST: 'UA-109511849-2',
    PROD: 'UA-109511849-1',
  },
};

let config = {};
try {
  const local = require(`./local.js`);
  config = { ...defaultConfig, ...local.default };
} catch (e) {
  config = { ...defaultConfig };
  console.info(`local.js not found`);
}
export default config;
