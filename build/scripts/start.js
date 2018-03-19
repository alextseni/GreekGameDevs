const logger = require('../lib/logger')

logger.info('Starting server...')
require('../../server/main').listen(process.env.PORT || 3000, () => {
  logger.success('Server is running at http://localhost:3000')
})
