import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'boardgames',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const BoardGames = require('./containers/BoardGamesContainer').default
      const reducer = require('./modules/boardgames').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'boardgames', reducer })

      /*  Return getComponent   */
      cb(null, BoardGames)

    /* Webpack named bundle   */
    }, 'boardgames')
  }
})
