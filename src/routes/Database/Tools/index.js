import { injectReducer } from 'store/reducers'

export default (store) => ({
  path : '/database/tools',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Tools = require('../containers/databaseContainer').ToolsC
      const reducer = require('../modules/database').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'database', reducer })

      /*  Return getComponent   */
      cb(null, Tools)

    /* Webpack named bundle   */
    }, 'database')
  }
})
